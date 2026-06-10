// @ts-nocheck

/**
 * Cinematic theme-aware backdrop: slow-drifting aurora gradient washes plus a
 * faint film-grain overlay. Rendered once in Layout.jsx, fixed behind the
 * Particles layer. Pure CSS animation (GPU-only transforms), no JS lifecycle.
 *
 * @type {React.FC}
 */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Aurora washes — soft pastels in light, deep glows in dark */}
      <div
        className="absolute -top-[20%] -left-[15%] h-[70vh] w-[70vw] rounded-full blur-3xl will-change-transform bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.22),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.20),transparent_65%)]"
        style={{ animation: "aurora-drift-1 26s ease-in-out infinite alternate" }}
      />
      <div
        className="absolute top-[25%] -right-[20%] h-[80vh] w-[65vw] rounded-full blur-3xl will-change-transform bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.16),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.13),transparent_65%)]"
        style={{ animation: "aurora-drift-2 34s ease-in-out infinite alternate" }}
      />
      <div
        className="absolute -bottom-[25%] left-[15%] h-[75vh] w-[70vw] rounded-full blur-3xl will-change-transform bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.13),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(216,79,42,0.14),transparent_65%)]"
        style={{ animation: "aurora-drift-3 40s ease-in-out infinite alternate" }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]"
        style={{ backgroundImage: GRAIN }}
      />
    </div>
  );
}
