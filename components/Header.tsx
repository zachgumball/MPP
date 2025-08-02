// components/Header.tsx
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 text-sm font-medium">
        <Link href="/" className="text-blue-700 text-lg font-bold tracking-wide">
          MANDALA PERSADA
        </Link>
        <div className="space-x-6 text-gray-700">
          <Link href="/" className="hover:text-blue-700">Beranda</Link>
          <Link href="/tentang" className="hover:text-blue-700">Tentang</Link>
          <Link href="/produk" className="hover:text-blue-700">Produk</Link>
          <Link href="/kontak" className="hover:text-blue-700">Kontak</Link>
        </div>
      </nav>
    </header>
  );
}
