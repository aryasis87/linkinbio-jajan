import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo", weight: ["500", "600", "700", "800"] });

const __jsonld = {"@context":"https://schema.org","@type":"FoodEstablishment","name":"Jajanan Bu Rina","description":"Jajanan pasar & rice bowl rumahan","url":"https://linkinbio-jajan.vercel.app","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://linkinbio-jajan.vercel.app"),
  title: "Jajanan Bu Rina — Pesan Sekarang",
  description: "Link in bio Jajanan Bu Rina: jajanan pasar & rice bowl rumahan. Menu, promo, dan pesan antar dalam satu papan.",
  applicationName: "Jajanan Bu Rina",
  keywords: ["link in bio", "jajanan", "kuliner rumahan", "pesan antar", "umkm kuliner"],
  authors: [{ name: "Jajanan Bu Rina" }],
  creator: "Jajanan Bu Rina",
  publisher: "Jajanan Bu Rina",
  alternates: { canonical: "https://linkinbio-jajan.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-jajan.vercel.app",
    siteName: "Jajanan Bu Rina",
    title: "Jajanan Bu Rina — Pesan Sekarang",
    description: "Link in bio Jajanan Bu Rina: jajanan pasar & rice bowl rumahan. Menu, promo, dan pesan antar dalam satu papan.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Jajanan Bu Rina — Pesan Sekarang" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jajanan Bu Rina — Pesan Sekarang",
    description: "Link in bio Jajanan Bu Rina: jajanan pasar & rice bowl rumahan. Menu, promo, dan pesan antar dalam satu papan.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${baloo.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
