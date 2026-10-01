import { SITE } from '@/lib/jajan';
import Kembali from '../components/Kembali';
import FormPO from '../components/FormPO';

export const metadata = {
  title: 'PO Acara & Hampers',
  description: 'Pesan snack box, rice bowl box, atau hampers keranjang bambu dari Jajanan Bu Rina untuk acara — minimal pesanan, paling lambat H-2, total langsung terhitung.',
  alternates: { canonical: `${SITE}/pesan` },
};

export default function Pesan() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-lg">
        <Kembali />
        <h1 className="mt-6 font-display text-4xl font-extrabold">PO acara & hampers</h1>
        <p className="mt-2 font-semibold text-kecap/85">Arisan, rapat RT, ulang tahun kantor — pesan paling lambat dua hari sebelumnya.</p>
        <FormPO />
        <p className="mt-6 text-center text-xs font-bold text-kecap/85">Harga adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
