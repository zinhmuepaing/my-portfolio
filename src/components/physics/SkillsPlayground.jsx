// @ts-nocheck
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const STEP = 1000 / 60;

const Chip = ({ skill, color, className, chipRef }) => (
  <div
    ref={chipRef}
    data-chip={skill.name}
    className={cn(
      // Solid (no backdrop-filter): ~45 moving blurred layers would tank the frame rate.
      "inline-flex h-10 select-none items-center gap-2 rounded-full bg-white pl-3 pr-4 text-[13px] font-medium text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.07),inset_0_1px_0_#fff,0_2px_6px_rgba(0,0,0,0.05)]",
      className
    )}
  >
    <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
    {skill.icon && (
      <img
        src={skill.icon}
        alt=""
        draggable={false}
        className="h-[18px] w-[18px] object-contain"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    )}
    {skill.name}
  </div>
);

/**
 * Tech-stack "toy box": chips fall into a pile and can be dragged and thrown;
 * they collide with each other and the walls (matter-js, lazy-loaded).
 * Reduced motion gets a plain grouped list instead.
 */
export function SkillsPlayground({ categories }) {
  const reduce = useReducedMotion();
  const boxRef = useRef(null);
  const chipRefs = useRef([]);
  const flat = categories.flatMap((c) => c.skills.map((s) => ({ ...s, color: c.color })));

  useEffect(() => {
    const box = boxRef.current;
    if (reduce || !box) return;

    let disposed = false;
    let raf = 0;
    let engine = null;
    let M = null;
    let started = false;
    let running = false;
    let last = 0;
    let acc = 0;
    const entries = []; // { el, body, w, h }
    let walls = [];
    let drag = null; // { constraint, entry }

    const buildWalls = () => {
      const { Bodies, Composite } = M;
      Composite.remove(engine.world, walls);
      const W = box.clientWidth;
      const H = box.clientHeight;
      const T = 400;
      const wall = (x, y, w, h) => Bodies.rectangle(x, y, w, h, { isStatic: true });
      walls = [
        wall(W / 2, H + T / 2, W + 2 * T, T),
        wall(-T / 2, H / 2 - H, T, H * 4),
        wall(W + T / 2, H / 2 - H, T, H * 4),
        wall(W / 2, -H * 3 - T / 2, W + 2 * T, T),
      ];
      Composite.add(engine.world, walls);
    };

    const paint = () => {
      for (const { el, body, w, h } of entries) {
        el.style.transform = `translate3d(${body.position.x - w / 2}px, ${body.position.y - h / 2}px, 0) rotate(${body.angle}rad)`;
      }
    };

    const frame = (t) => {
      acc = Math.min(acc + (t - last), 100);
      last = t;
      while (acc >= STEP) {
        M.Engine.update(engine, STEP);
        acc -= STEP;
      }
      paint();
      if (drag || entries.some((e) => !e.body.isSleeping)) {
        raf = requestAnimationFrame(frame);
      } else {
        running = false;
      }
    };
    const kick = () => {
      if (running || disposed) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const pointerPos = (e) => {
      const b = box.getBoundingClientRect();
      return { x: e.clientX - b.left, y: e.clientY - b.top };
    };

    const onDown = (e) => {
      const chip = e.target.closest("[data-chip]");
      if (!chip || !M) return;
      const entry = entries.find((x) => x.el === chip);
      if (!entry) return;
      box.setPointerCapture(e.pointerId);
      const p = pointerPos(e);
      const { body } = entry;
      M.Sleeping.set(body, false);
      const dx = p.x - body.position.x;
      const dy = p.y - body.position.y;
      const cos = Math.cos(-body.angle);
      const sin = Math.sin(-body.angle);
      const constraint = M.Constraint.create({
        pointA: p,
        bodyB: body,
        pointB: { x: dx * cos - dy * sin, y: dx * sin + dy * cos },
        stiffness: 0.2,
        damping: 0.12,
        length: 0,
      });
      M.Composite.add(engine.world, constraint);
      drag = { constraint, entry };
      chip.style.cursor = "grabbing";
      chip.style.zIndex = "10";
      kick();
    };
    const onMove = (e) => {
      if (!drag) return;
      const p = pointerPos(e);
      const W = box.clientWidth;
      drag.constraint.pointA = { x: Math.min(Math.max(p.x, 0), W), y: Math.max(p.y, -200) };
    };
    const onUp = () => {
      if (!drag) return;
      M.Composite.remove(engine.world, drag.constraint);
      drag.entry.el.style.cursor = "";
      drag.entry.el.style.zIndex = "";
      drag = null;
      kick();
    };

    const start = async () => {
      started = true;
      const mod = await import("matter-js");
      if (disposed) return;
      M = mod.default ?? mod;
      await document.fonts?.ready;
      if (disposed) return;
      engine = M.Engine.create({ gravity: { x: 0, y: 1 }, enableSleeping: true });
      buildWalls();
      const W = box.clientWidth;
      chipRefs.current.forEach((el, i) => {
        if (!el) return;
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        const body = M.Bodies.rectangle(
          w / 2 + Math.random() * Math.max(W - w, 1),
          -40 - i * 46,
          w,
          h,
          {
            chamfer: { radius: h / 2 },
            restitution: 0.35,
            friction: 0.25,
            frictionAir: 0.012,
            angle: (Math.random() - 0.5) * 0.6,
            sleepThreshold: 40,
          }
        );
        // Heavier rotational inertia keeps the pills mostly upright and readable.
        M.Body.setInertia(body, body.inertia * 6);
        entries.push({ el, body, w, h });
        M.Composite.add(engine.world, body);
        el.style.opacity = "1";
      });
      paint();
      kick();
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) start();
      },
      { threshold: 0.25 }
    );
    io.observe(box);

    const ro = new ResizeObserver(() => {
      if (!engine) return;
      buildWalls();
      const W = box.clientWidth;
      for (const { body, w } of entries) {
        if (body.position.x > W - w / 2) M.Body.setPosition(body, { x: W - w / 2, y: body.position.y });
        M.Sleeping.set(body, false);
      }
      kick();
    });
    ro.observe(box);

    box.addEventListener("pointerdown", onDown);
    box.addEventListener("pointermove", onMove);
    box.addEventListener("pointerup", onUp);
    box.addEventListener("pointercancel", onUp);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      box.removeEventListener("pointerdown", onDown);
      box.removeEventListener("pointermove", onMove);
      box.removeEventListener("pointerup", onUp);
      box.removeEventListener("pointercancel", onUp);
      if (engine) M.Engine.clear(engine);
    };
  }, [reduce]);

  if (reduce) {
    return (
      <div className="space-y-8">
        {categories.map((c) => (
          <div key={c.title}>
            <h3 className="mb-3 font-serif text-2xl text-ink">{c.title}</h3>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <Chip key={s.name} skill={s} color={c.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div
        ref={boxRef}
        role="group"
        aria-label="Technical skills. Drag the chips to play with them."
        className="glass relative h-[600px] overflow-hidden rounded-[28px] sm:h-[440px]"
      >
        {flat.map((s, i) => (
          <Chip
            key={s.name}
            skill={s}
            color={s.color}
            chipRef={(el) => (chipRefs.current[i] = el)}
            className="absolute left-0 top-0 cursor-grab touch-none opacity-0 [@media(pointer:coarse)]:touch-pan-y"
          />
        ))}
        <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
          drag &amp; throw
        </span>
      </div>
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
        {categories.map((c) => (
          <li key={c.title} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
            {c.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
