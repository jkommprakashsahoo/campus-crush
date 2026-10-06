export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.15),_transparent_30%)] px-6 py-16 text-white">
      <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-fuchsia-950/20 backdrop-blur-sm sm:p-12">
        <p className="mb-4 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-200">
          Scaffold status
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Campus Crush
        </h1>
        <p className="mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg">
          A secure, private campus social product scaffold built on Next.js, TypeScript,
          Tailwind, Drizzle, Vitest, and Playwright. Phase 1 is intentionally not started.
        </p>
        <div className="mt-10 grid gap-4 text-sm text-zinc-200 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="text-2xl font-semibold text-fuchsia-300">Next.js</div>
            <p className="mt-2 text-zinc-300">App Router + strict TypeScript</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="text-2xl font-semibold text-violet-300">Drizzle</div>
            <p className="mt-2 text-zinc-300">Migration-first Postgres schema</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="text-2xl font-semibold text-pink-300">Security</div>
            <p className="mt-2 text-zinc-300">Documentation-first before feature work</p>
          </div>
        </div>
      </div>
    </main>
  );
}
