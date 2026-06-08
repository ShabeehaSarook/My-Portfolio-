import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/75">404</p>
        <h1 className="mt-4 text-3xl font-semibold">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          The page you requested does not exist. Return to the main portfolio to continue exploring.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-cyan-300/15"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

