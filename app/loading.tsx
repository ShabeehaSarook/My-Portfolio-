export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-cyan-300/20 border-t-cyan-300" />
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
          Loading experience
        </p>
      </div>
    </div>
  );
}
