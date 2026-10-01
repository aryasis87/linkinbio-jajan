import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="papan w-full max-w-sm rotate-1 rounded-3xl p-8 text-center">
        <p className="text-5xl" aria-hidden="true">🍢❓</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold">Menu ini sudah habis</h1>
        <p className="mt-2 font-semibold text-kecap/85">Atau memang tidak pernah ada. Coba lihat papan menu.</p>
        <Link href="/menu" className="mt-6 inline-flex rounded-2xl border-[3px] border-kecap bg-cabe px-5 py-2.5 font-extrabold text-santan">Lihat papan menu</Link>
      </div>
    </main>
  );
}
