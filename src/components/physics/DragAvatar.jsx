// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SIZE = "clamp(76px, 16vw, 144px)";
const STEP = 1000 / 60;
const MAX_SPEED = 26;

/**
 * Draggable avatar. Grab it anywhere and throw it: it moves freely over the page,
 * falls under gravity, spins and bounces, and comes to rest on the bottom of the
 * visible screen (matter-js, loaded lazily). The floor and walls are the user's
 * current viewport and follow it when the page scrolls, so the avatar drops again
 * to the new bottom. Leaves a dashed placeholder where it started.
 * `boundsRef` must be `relative`.
 */
export function DragAvatar({ boundsRef, src, alt }) {
  const slotRef = useRef(null);
  const avatarRef = useRef(null);
  const [moved, setMoved] = useState(false); // ever grabbed: hides the "drag me" hint
  const [away, setAway] = useState(false); // currently out of its slot: shows the dashed ring

  useEffect(() => {
    const bounds = boundsRef.current;
    const slot = slotRef.current;
    const el = avatarRef.current;
    if (!bounds || !slot || !el) return;

    let disposed = false;
    let hasMoved = false;
    let raf = 0;
    let engine = null;
    let ball = null;
    let statics = [];
    let M = null;
    let dragging = false;
    let target = null; // where the pointer wants the avatar's centre
    let offset = { x: 0, y: 0 }; // grab point relative to the centre
    let running = false;
    let last = 0;
    let acc = 0;

    const R = () => el.offsetWidth / 2;
    const place = (x, y, angle = 0) => {
      el.style.transform = `translate3d(${x - R()}px, ${y - R()}px, 0) rotate(${angle}rad)`;
    };
    const slotCenter = () => {
      const b = bounds.getBoundingClientRect();
      const s = slot.getBoundingClientRect();
      return { x: s.left - b.left + s.width / 2, y: s.top - b.top + s.height / 2 };
    };
    const home = () => {
      const c = slotCenter();
      place(c.x, c.y);
      el.style.opacity = "1";
      return c;
    };
    home();

    // The visible screen, in the coordinates of `bounds`.
    const screen = () => {
      const b = bounds.getBoundingClientRect();
      const x0 = -b.left;
      const y0 = -b.top;
      return { x0, y0, x1: x0 + document.documentElement.clientWidth, y1: y0 + window.innerHeight };
    };

    // Walls around the visible screen (rebuilt whenever the viewport moves).
    const buildStatics = () => {
      if (!M) return;
      const { Bodies, Composite } = M;
      Composite.remove(engine.world, statics);
      const s = screen();
      const W = s.x1 - s.x0;
      const H = s.y1 - s.y0;
      const T = 300;
      const wall = (x, y, w, h) => Bodies.rectangle(x, y, w, h, { isStatic: true });
      statics = [
        wall(s.x0 + W / 2, s.y0 - T / 2, W + 2 * T, T), // ceiling
        wall(s.x0 + W / 2, s.y1 + T / 2, W + 2 * T, T), // floor
        wall(s.x0 - T / 2, s.y0 + H / 2, T, H + 2 * T),
        wall(s.x1 + T / 2, s.y0 + H / 2, T, H + 2 * T),
      ];
      Composite.add(engine.world, statics);
    };

    const clampToScreen = (x, y) => {
      const s = screen();
      const r = R();
      return {
        x: Math.min(Math.max(x, s.x0 + r), s.x1 - r),
        y: Math.min(Math.max(y, s.y0 + r), s.y1 - r),
      };
    };

    const frame = (t) => {
      acc = Math.min(acc + (t - last), 100);
      last = t;
      while (acc >= STEP) {
        if (dragging && target) {
          // Follow the pointer by velocity (so solids still stop it), rolling as it goes.
          let vx = (target.x - ball.position.x) * 0.35;
          let vy = (target.y - ball.position.y) * 0.35;
          const m = Math.hypot(vx, vy);
          if (m > MAX_SPEED) {
            vx *= MAX_SPEED / m;
            vy *= MAX_SPEED / m;
          }
          M.Body.setVelocity(ball, { x: vx, y: vy });
          M.Body.setAngularVelocity(ball, (vx / R()) * 0.5);
        }
        M.Engine.update(engine, STEP);
        const v = ball.velocity;
        const sp = Math.hypot(v.x, v.y);
        if (sp > MAX_SPEED) M.Body.setVelocity(ball, { x: (v.x * MAX_SPEED) / sp, y: (v.y * MAX_SPEED) / sp });
        acc -= STEP;
      }
      place(ball.position.x, ball.position.y, ball.angle);
      // Keep simulating until the ball is at rest.
      if (dragging || !ball.isSleeping) raf = requestAnimationFrame(frame);
      else running = false;
    };
    const kick = () => {
      if (running || disposed) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const pointer = (e) => {
      const b = bounds.getBoundingClientRect();
      return { x: e.clientX - b.left, y: e.clientY - b.top };
    };

    const onDown = (e) => {
      if (!ball) return;
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      buildStatics();
      M.Body.setPosition(ball, clampToScreen(ball.position.x, ball.position.y));
      M.Sleeping.set(ball, false);
      const p = pointer(e);
      offset = { x: p.x - ball.position.x, y: p.y - ball.position.y };
      target = { x: ball.position.x, y: ball.position.y };
      dragging = true;
      hasMoved = true;
      setMoved(true);
      setAway(true);
      el.style.cursor = "grabbing";
      kick();
    };
    const onMove = (e) => {
      if (!dragging) return;
      const p = pointer(e);
      target = clampToScreen(p.x - offset.x, p.y - offset.y);
    };
    // Dropped back on its own spot: settle it there, upright, as if never moved.
    const snapHome = () => {
      const c = slotCenter();
      el.style.transition = "transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)";
      M.Body.setPosition(ball, c);
      M.Body.setAngle(ball, 0);
      M.Body.setVelocity(ball, { x: 0, y: 0 });
      M.Body.setAngularVelocity(ball, 0);
      M.Sleeping.set(ball, true);
      place(c.x, c.y, 0);
      hasMoved = false;
      setAway(false);
      setTimeout(() => {
        el.style.transition = "";
      }, 260);
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      el.style.cursor = "grab";
      const c = slotCenter();
      if (Math.hypot(ball.position.x - c.x, ball.position.y - c.y) < R() * 0.9) {
        snapHome();
        return;
      }
      M.Sleeping.set(ball, false);
      kick();
    };

    const onResize = () => {
      if (!ball) {
        home();
        return;
      }
      if (!hasMoved) {
        M.Body.setPosition(ball, home());
      } else {
        const p = clampToScreen(ball.position.x, ball.position.y);
        M.Body.setPosition(ball, p);
        place(p.x, p.y, ball.angle);
      }
      buildStatics();
      if (hasMoved) {
        M.Sleeping.set(ball, false); // layout changed: let it settle again
        kick();
      }
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(bounds);
    window.addEventListener("resize", onResize);

    // The screen moved: carry the floor/walls with it, keep the avatar on screen,
    // and let it fall to the new bottom.
    let scrollRaf = 0;
    const onScroll = () => {
      if (!ball || !hasMoved || scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        if (disposed) return;
        buildStatics();
        const { x, y } = ball.position;
        const p = clampToScreen(x, y);
        if (p.x !== x || p.y !== y) M.Body.setPosition(ball, p);
        M.Sleeping.set(ball, false);
        kick();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    import("matter-js").then((mod) => {
      if (disposed) return;
      M = mod.default ?? mod;
      engine = M.Engine.create({ gravity: { x: 0, y: 1 }, enableSleeping: true });
      const c = slotCenter();
      ball = M.Bodies.circle(c.x, c.y, R(), {
        restitution: 0.5,
        friction: 0.5,
        frictionStatic: 0.6,
        frictionAir: 0.012,
      });
      M.Composite.add(engine.world, ball);
      M.Sleeping.set(ball, true); // parked in its slot until first grabbed      buildStatics();
      document.fonts?.ready.then(() => !disposed && buildStatics());
    });

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(scrollRaf);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      if (engine) M.Engine.clear(engine);
    };
  }, [boundsRef]);

  return (
    <>
      {/* In-flow slot: keeps the layout and shows a dashed ring once the avatar leaves. */}
      <div
        ref={slotRef}
        className={cn(
          "relative shrink-0 rounded-full transition-colors duration-300",
          away ? "border-2 border-dashed border-black/20" : "border-2 border-transparent"
        )}
        style={{ width: SIZE, height: SIZE }}
      >
        {!moved && (
          // Sits above the avatar with the arrow pointing down at it.
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-full left-1/2 mb-0.5 flex -translate-x-1/2 -rotate-3 flex-col items-center whitespace-nowrap font-serif text-lg italic leading-none text-coral"
          >
            drag me!
            <svg viewBox="0 0 24 30" className="mt-0.5 h-6 w-5 fill-none stroke-coral" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2c9 3 12 10 6 22M12 24l-5-5M12 24l5-4" />
            </svg>
          </span>
        )}
      </div>

      <div
        ref={avatarRef}
        className="absolute left-0 top-0 z-20 aspect-square cursor-grab touch-none select-none rounded-full bg-white opacity-0 shadow-[0_0_0_3px_#EC4D25,0_8px_24px_rgba(236,77,37,0.25)]"
        style={{ width: SIZE, willChange: "transform" }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="pointer-events-none h-full w-full rounded-full object-cover"
        />
      </div>
    </>
  );
}
