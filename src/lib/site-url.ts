function normalizeUrl(url?: string) {
  if (!url) {
    return undefined;
  }

  const urlWithProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`;

  return urlWithProtocol.replace(/\/$/, "");
}

export function getSiteUrl() {
  return (
    normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalizeUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    normalizeUrl(process.env.VERCEL_URL) ??
    "http://localhost:3000"
  );
}
