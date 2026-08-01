// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/produk", label: "Produk" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Image
              src="/hero.png"
              alt="Logo MPP"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              priority
            />
          </div>
          <span className="text-white font-bold text-lg hidden sm:inline">Mandala Putra Persada</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle tema"
            className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/80 px-3 py-2 text-sm text-gray-200 shadow-sm transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <span>{theme === "dark" ? "🌙" : "☀️"}</span>
            <span className="hidden lg:inline">{theme === "dark" ? "Mode Malam" : "Mode Siang"}</span>
            <span className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${theme === "dark" ? "bg-cyan-500" : "bg-slate-600"}`}>
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${theme === "dark" ? "translate-x-5" : "translate-x-1"}`} />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-cyan-400 mb-1.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cyan-400 mb-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-slate-800 border-t border-slate-700 px-4 py-4"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 text-sm font-medium py-2 px-3 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-700/70 px-3 py-2 text-sm text-gray-200"
            >
              <span>{theme === "dark" ? "Mode Malam" : "Mode Siang"}</span>
              <span className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${theme === "dark" ? "bg-cyan-500" : "bg-slate-600"}`}>
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${theme === "dark" ? "translate-x-5" : "translate-x-1"}`} />
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
