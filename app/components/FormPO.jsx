'use client';

import { useEffect, useState } from 'react';
import { PAKET, rp } from '@/lib/jajan';

// Tanggal paling cepat = hari ini + 2 hari (WIB), format yyyy-mm-dd.
function hPlus2() {
  const wib = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  wib.setDate(wib.getDate() + 2);
  return `${wib.getFullYear()}-${String(wib.getMonth() + 1).padStart(2, '0')}-${String(wib.getDate()).padStart(2, '0')}`;
}

export default function FormPO() {
  const [paket, setPaket] = useState('snack');
  const [jml, setJml] = useState('20');
  const [min, setMin] = useState('');
  const [selesai, setSelesai] = useState(false);
  useEffect(() => setMin(hPlus2()), []);
  const p = PAKET.find((x) => x.id === paket);
  const n = parseInt(jml, 10) || 0;
  const kurang = n < p.min;
  const input = 'w-full rounded-xl border-[3px] border-kecap bg-santan px-3 py-2.5 font-bold focus:outline-none focus:ring-2 focus:ring-cabe';

  if (selesai) {
    return (
      <div role="status" className="papan mt-6 rounded-3xl p-6 text-center">
        <p className="text-4xl" aria-hidden="true">🧾</p>
        <p className="mt-2 font-display text-2xl font-extrabold">{n} {p.satuan} {p.nama} tercatat!</p>
        <p className="mt-1 font-bold text-cabe">{rp(p.harga * n)}</p>
        <p className="mt-2 text-sm font-semibold text-kecap/85">Ini purwarupa desain: tidak ada pesanan atau pembayaran sungguhan.</p>
        <button type="button" onClick={() => setSelesai(false)} className="mt-4 rounded-xl border-[3px] border-kecap bg-kunyit px-4 py-2 font-extrabold">Ubah pesanan</button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); if (!kurang) setSelesai(true); }} className="papan mt-6 space-y-5 rounded-3xl p-6">
      <fieldset>
        <legend className="mb-2 font-extrabold">Pilih paket</legend>
        <div className="space-y-2">
          {PAKET.map((x) => (
            <label key={x.id} className={`flex cursor-pointer items-start gap-3 rounded-2xl border-[3px] p-3 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-cabe ${paket === x.id ? 'border-kecap bg-kunyit' : 'border-kecap/30 bg-santan'}`}>
              <input type="radio" name="paket" value={x.id} checked={paket === x.id} onChange={() => { setPaket(x.id); setJml(String(x.min)); }} className="mt-1.5 accent-[#d62828]" />
              <span className="flex-1">
                <span className="flex justify-between gap-2 font-extrabold"><span>{x.nama}</span><span>{rp(x.harga)}</span></span>
                <span className="block text-xs font-semibold">{x.ket} · min. {x.min} {x.satuan}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="po-jml" className="mb-1 block text-sm font-extrabold">Jumlah {p.satuan}</label>
          <input id="po-jml" type="number" min={p.min} value={jml} onChange={(e) => setJml(e.target.value)} aria-describedby="po-min" className={input} />
          <span id="po-min" className={`mt-1 block text-xs font-bold ${kurang ? 'text-cabe' : ''}`}>{kurang ? `Minimal ${p.min} ${p.satuan}` : `min. ${p.min}`}</span>
        </div>
        <div>
          <label htmlFor="po-tgl" className="mb-1 block text-sm font-extrabold">Tanggal ambil</label>
          <input id="po-tgl" type="date" required min={min || undefined} className={input} aria-describedby="po-h2" />
          <span id="po-h2" className="mt-1 block text-xs font-bold">paling cepat H-2</span>
        </div>
      </div>
      <div>
        <label htmlFor="po-nama" className="mb-1 block text-sm font-extrabold">Nama pemesan</label>
        <input id="po-nama" required autoComplete="name" className={input} />
      </div>
      <div className="flex items-baseline justify-between rounded-2xl bg-kecap px-4 py-3 text-santan">
        <span className="font-bold">Total</span>
        <span className="font-display text-2xl font-extrabold" aria-live="polite">{rp(p.harga * n)}</span>
      </div>
      <button type="submit" disabled={kurang} className="w-full rounded-2xl border-[3px] border-kecap bg-cabe py-3.5 font-extrabold text-santan shadow-[4px_4px_0_rgba(61,44,30,0.85)] disabled:cursor-not-allowed disabled:opacity-50">Kirim PO</button>
      <p className="text-xs font-semibold">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
    </form>
  );
}
