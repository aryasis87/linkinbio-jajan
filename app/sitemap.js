const SITE = "https://linkinbio-jajan.vercel.app";

export default function sitemap() {
  const now = new Date();
  return ["", "/menu", "/pesan"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
