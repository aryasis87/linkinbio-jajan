'use client';

import Image from 'next/image';
import { Instagram, Globe, Mail, ShoppingBag } from 'lucide-react';

export default function Home() {
  const links = [
    { label: 'Toko Visual', icon: <ShoppingBag size={18} />, url: '#' },
    { label: 'Galeri Digital', icon: <Globe size={18} />, url: '#' },
    { label: 'Instagram', icon: <Instagram size={18} />, url: '#' },
    { label: 'Email', icon: <Mail size={18} />, url: 'mailto:hello@jajanvisual.art' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-tr from-yellow-100 via-pink-100 to-blue-100 text-gray-900 px-4 flex items-center justify-center font-mono">
      <div className="max-w-md w-full bg-white/60 border-4 border-dashed border-black rounded-xl p-6 relative shadow-lg">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto relative rounded-full overflow-hidden border-3 border-green-800">
            <Image
              src="/matcha.jpg"
              alt="Avatar Jajan Visual"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold tracking-widest mt-3">Jajan Visual</h1>
          <p className="text-sm text-gray-600 italic mt-1">
            {`"Desain rasa boba matcha 🍵"`}
          </p>
        </div>
        <div className="space-y-3">
          {links.map(({ label, icon, url }, i) => (
            <a
              key={i}
              href={url}
              className="flex items-center justify-between px-4 py-3 bg-white border border-black rounded hover:bg-yellow-200 transition"
            >
              <span className="flex items-center gap-2">{icon} {label}</span>
              <span>→</span>
            </a>
          ))}
        </div>
        <p className="text-xs text-center mt-5 text-gray-700">🥟 Jajan dulu, mikir nanti</p>
      </div>
    </main>
  );
}
