import Link from 'next/link';
import { WARUNG } from '@/lib/jajan';

export default function Kembali() {
  return (
    <Link href="/" className="inline-flex -rotate-1 items-center gap-2 rounded-full border-[3px] border-kecap bg-santan px-4 py-2 font-extrabold shadow-[3px_3px_0_rgba(61,44,30,0.85)] hover:-translate-y-0.5">
      <span aria-hidden="true">🍛 ←</span> {WARUNG.nama}
    </Link>
  );
}
