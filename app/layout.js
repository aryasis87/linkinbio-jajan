import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo", weight: ["500", "600", "700", "800"] });

export const metadata = {
  title: "Jajanan Bu Rina — Pesan Sekarang",
  description: "Jajanan pasar & rice bowl rumahan. Menu, promo, dan pesan antar dalam satu papan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${baloo.variable} antialiased`}>{children}</body>
    </html>
  );
}
