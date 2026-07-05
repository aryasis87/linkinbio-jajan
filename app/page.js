'use client';
import { motion } from 'framer-motion';
import { Bike, MessageCircle, Instagram, MapPin } from 'lucide-react';

const MENU = [
  { nama: 'Rice Bowl Ayam Sambal Matah', harga: '15K', laris: true },
  { nama: 'Cireng Isi (5 pcs)', harga: '10K' },
  { nama: 'Es Kopi Gula Aren', harga: '12K', laris: true },
  { nama: 'Pisang Goreng Keju', harga: '8K' },
];

const CTA = [
  { icon: Bike, label: 'Pesan GoFood / GrabFood', sub: 'buka 09.00–20.00', url: '#', warna: 'bg-cabe text-santan' },
  { icon: MessageCircle, label: 'PO via WhatsApp', sub: 'untuk acara & hampers', url: 'https://wa.me/6281234567890', warna: 'bg-kecap text-santan' },
  { icon: Instagram, label: '@jajananburina', sub: 'menu baru tiap Senin', url: 'https://instagram.com', warna: 'bg-santan' },
  { icon: MapPin, label: 'Lokasi Gerobak', sub: 'depan Pasar Cihapit', url: 'https://maps.google.com', warna: 'bg-santan' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Gantungan papan */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="goyang mx-auto w-fit rounded-full border-4 border-kecap bg-cabe px-6 py-2 text-center font-bold text-santan shadow-[4px_4px_0_rgba(61,44,30,0.85)]">
          🍢 BUKA — silakan jajan!
        </motion.div>

        {/* Papan menu */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }} className="papan mt-5 rounded-3xl p-6 md:p-8">
          <header className="text-center">
            <p className="text-4xl" role="img" aria-label="nasi">🍛</p>
            <h1 className="mt-1 text-3xl font-extrabold">Jajanan Bu Rina</h1>
            <p className="text-sm font-semibold text-kecap/60">jajanan pasar & rice bowl rumahan · sejak 2018</p>
          </header>

          {/* Menu dotted */}
          <section className="mt-6" aria-label="Menu andalan">
            <p className="mb-2 text-center text-xs font-extrabold uppercase tracking-[0.25em] text-cabe">≈ Menu Andalan ≈</p>
            <ul className="space-y-2.5">
              {MENU.map((m, i) => (
                <motion.li key={m.nama} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.07 }} className="leaders text-[15px] font-bold">
                  <span>
                    {m.nama}
                    {m.laris && <span className="ml-2 rounded-full bg-cabe px-2 py-0.5 text-[10px] font-extrabold text-santan">LARIS!</span>}
                  </span>
                  <span className="dots" aria-hidden="true" />
                  <span className="text-cabe">{m.harga}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <nav className="mt-7 space-y-3" aria-label="Pesan">
            {CTA.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -3, rotate: i % 2 ? 0.8 : -0.8 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-3 rounded-2xl border-[3px] border-kecap p-3.5 shadow-[4px_4px_0_rgba(61,44,30,0.85)] ${c.warna}`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-kecap bg-kunyit text-kecap"><c.icon size={18} /></span>
                <span className="flex-1">
                  <span className="block font-extrabold leading-tight">{c.label}</span>
                  <span className="block text-xs font-semibold opacity-70">{c.sub}</span>
                </span>
              </motion.a>
            ))}
          </nav>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} className="mt-5 text-center text-xs font-bold text-kecap/60">
          © {new Date().getFullYear()} Jajanan Bu Rina · Bandung 🛵
        </motion.p>
      </div>
    </main>
  );
}
