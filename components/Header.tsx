// components/Header.tsx
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Mandala Putra Persada
        </Link>
        <div className="space-x-4 text-sm">
          <Link href="/" className="hover:underline">
            Beranda
          </Link>
          <Link href="/tentang" className="hover:underline">
            Tentang
          </Link>
          <Link href="/produk" className="hover:underline">
            Produk
          </Link>
          <Link href="/kontak" className="hover:underline">
            Kontak
          </Link>
        </div>
      </nav>
    </header>
  );
}
