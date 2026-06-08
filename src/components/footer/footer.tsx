import { site } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-semibold tracking-tight text-white">{site.name}</p>
          <p className="mt-2 text-sm text-slate-400">{site.role}</p>
          <p className="mt-3 text-sm text-slate-500">
            Copyright {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>

        <p className="max-w-md text-sm leading-6 text-slate-500 md:text-right">
          Focused on full-stack products, AI systems, and clean engineering delivery.
        </p>
      </div>
    </footer>
  );
}
