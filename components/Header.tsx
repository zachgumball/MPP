// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 text-sm font-medium">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/hero.png"
            alt="Logo MPP"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
            priority
          />
        </Link>
        {/* Burger button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-gray-700 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Desktop menu */}
        <div className="space-x-6 text-gray-700 hidden md:flex">
          <Link href="/" className="hover:text-blue-700">Beranda</Link>
          <Link href="/tentang" className="hover:text-blue-700">Tentang</Link>
          <Link href="/produk" className="hover:text-blue-700">Produk</Link>
          <Link href="/kontak" className="hover:text-blue-700">Kontak</Link>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-40 animate-fade-in">
            <Link href="/" className="hover:text-blue-700" onClick={() => setMenuOpen(false)}>Beranda</Link>
            <Link href="/tentang" className="hover:text-blue-700" onClick={() => setMenuOpen(false)}>Tentang</Link>
            <Link href="/produk" className="hover:text-blue-700" onClick={() => setMenuOpen(false)}>Produk</Link>
            <Link href="/kontak" className="hover:text-blue-700" onClick={() => setMenuOpen(false)}>Kontak</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
