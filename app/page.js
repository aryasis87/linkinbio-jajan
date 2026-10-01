'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import { LINKS, MENU, WARUNG, rb, sedangBuka } from '@/lib/jajan';

const IKON = { menu: UtensilsCrossed, kado: Gift, baru: Sparkles, lokasi: MapPin };
const ANDALAN = MENU.flatMap((k) => k.item).filter(([, , laris]) => laris).concat([['Pisang Goreng Keju', 8000]]);
const MotionLink = motion.create(Link);

export default function Home() {
  const [buka, setBuka] = useState(null);
  useEffect(() => {
    const f = () => setBuka(sedangBuka());
    f();
    const t = setInterval(f, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <motion.p role="status" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className={`goyang mx-auto w-fit rounded-full border-4 border-kecap px-6 py-2 text-center font-bold shadow-[4px_4px_0_rgba(61,44,30,0.85)] ${buka === false ? 'bg-santan text-kecap' : 'bg-cabe text-santan'}`}>
          {buka === null ? '🍢 Jajanan Bu Rina' : buka ? '🍢 BUKA — silakan jajan!' : '🌙 TUTUP — buka Selasa–Minggu jam 9'}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }} className="papan mt-5 rounded-3xl p-6 md:p-8">
          <header className="text-center">
            <p className="text-4xl" aria-hidden="true">🍛</p>
            <h1 className="mt-1 font-display text-3xl font-extrabold">{WARUNG.nama}</h1>
            <p className="text-sm font-semibold text-kecap/80">jajanan pasar & rice bowl rumahan · sejak {WARUNG.sejak}</p>
          </header>

          <section className="mt-6" aria-labelledby="andalan">
            <h2 id="andalan" className="mb-2 text-center text-xs font-extrabold uppercase tracking-[0.25em] text-cabe">≈ Menu Andalan ≈</h2>
            <ul className="space-y-2.5">
              {ANDALAN.map(([nama, harga, laris], i) => (
                <motion.li key={nama} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.07 }} className="leaders text-[15px] font-bold">
                  <span>
                    {nama}
                    {laris && <span className="ml-2 rounded-full bg-cabe px-2 py-0.5 text-[10px] font-extrabold text-santan">LARIS!</span>}
                  </span>
                  <span className="dots" aria-hidden="true" />
                  <span className="text-cabe">{rb(harga)}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          <nav className="mt-7 space-y-3" aria-label="Pesan dan informasi">
            {LINKS.map((c, i) => {
              const Ikon = IKON[c.ikon];
              return (
                <MotionLink
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ y: -3, rotate: i % 2 ? 0.8 : -0.8 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 rounded-2xl border-[3px] border-kecap p-3.5 shadow-[4px_4px_0_rgba(61,44,30,0.85)] ${c.warna}`}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-kecap bg-kunyit text-kecap"><Ikon size={18} aria-hidden="true" /></span>
                  <span className="flex-1">
                    <span className="block font-extrabold leading-tight">{c.label}</span>
                    <span className="block text-xs font-semibold">{c.sub}</span>
                  </span>
                </MotionLink>
              );
            })}
          </nav>
        </motion.div>

        <p className="mt-5 text-center text-xs font-bold text-kecap/85">Menu baru tiap Senin di Instagram {WARUNG.handle} · warung fiktif untuk purwarupa desain 🛵</p>
      </div>
    </main>
  );
}
