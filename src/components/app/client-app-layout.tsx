"use client";

import { SiteShell } from "@/components/providers/site-shell";

export function ClientAppLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
