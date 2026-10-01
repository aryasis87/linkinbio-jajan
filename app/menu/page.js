import Link from 'next/link';
import { BARU, MENU, SITE, WARUNG, rb, rp } from '@/lib/jajan';
import Kembali from '../components/Kembali';

export const metadata = {
  title: 'Menu Lengkap',
  description: 'Papan menu lengkap Jajanan Bu Rina — rice bowl, gorengan, kue pasar, minuman — plus menu baru minggu ini, lokasi gerobak, dan jam buka.',
  alternates: { canonical: `${SITE}/menu` },
};

export default function Menu() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-lg">
        <Kembali />
        <div className="papan mt-6 rounded-3xl p-6 md:p-8">
          <h1 className="text-center font-display text-4xl font-extrabold">Papan Menu</h1>
          <p className="text-center text-sm font-semibold text-kecap/80">harga sudah termasuk kerupuk & senyum</p>

          {MENU.map((k) => (
            <section key={k.kat} aria-labelledby={`k-${k.kat}`} className="mt-7">
              <h2 id={`k-${k.kat}`} className="mb-2 text-center text-xs font-extrabold uppercase tracking-[0.25em] text-cabe">≈ {k.kat} ≈</h2>
              <ul className="space-y-2.5">
                {k.item.map(([nama, harga, laris]) => (
                  <li key={nama} className="leaders text-[15px] font-bold">
                    <span>{nama}{laris && <span className="ml-2 rounded-full bg-cabe px-2 py-0.5 text-[10px] font-extrabold text-santan">LARIS!</span>}</span>
                    <span className="dots" aria-hidden="true" />
                    <span className="text-cabe">{rb(harga)}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section id="baru" aria-labelledby="baru-h" className="mt-8 scroll-mt-6 -rotate-1 rounded-3xl border-4 border-kecap bg-cabe p-6 text-santan shadow-[6px_6px_0_rgba(61,44,30,0.85)]">
          <h2 id="baru-h" className="text-xs font-extrabold uppercase tracking-[0.25em]">✨ Menu baru minggu ini</h2>
          <p className="mt-2 font-display text-3xl font-extrabold">{BARU.nama}</p>
          <p className="mt-1 text-lg font-bold">{rp(BARU.harga)}</p>
          <p className="mt-1 text-sm font-semibold">{BARU.ket}</p>
        </section>

        <section id="lokasi" aria-labelledby="lokasi-h" className="papan mt-8 scroll-mt-6 rounded-3xl p-6">
          <h2 id="lokasi-h" className="font-display text-2xl font-extrabold">📍 Lokasi & jam</h2>
          <p className="mt-2 font-bold">{WARUNG.lokasi}</p>
          <p className="mt-1 text-sm font-semibold text-kecap/80">{WARUNG.jam}</p>
        </section>

        <Link href="/pesan" className="mt-8 flex justify-center rounded-2xl border-[3px] border-kecap bg-kecap py-4 font-extrabold text-santan shadow-[4px_4px_0_rgba(61,44,30,0.85)] hover:-translate-y-0.5">PO untuk acara & hampers →</Link>
        <p className="mt-5 text-center text-xs font-bold text-kecap/85">Harga, lokasi, dan jam adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
