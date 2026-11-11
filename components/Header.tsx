"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/produk", label: "Produk" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Aktifkan mode ${theme === "dark" ? "terang" : "gelap"}`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-lg transition hover:border-[var(--accent)] hover:text-[var(--accent-dark)]"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8" aria-label="Navigasi utama">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
            <Image src="/mpp.png" alt="" width={40} height={40} className="h-9 w-9 object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-[var(--foreground)] sm:text-base">Mandala Putra</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Persada</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[var(--forest)] text-white"
                    : "text-muted hover:bg-black/5 hover:text-[var(--foreground)] dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="mx-3 h-6 w-px bg-[var(--line)]" />
          {themeButton}
          <Link href="/kontak" className="accent-button ml-3 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5">
            Konsultasi
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {themeButton}
          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-xl"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-[var(--line)] px-5 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    active ? "bg-[var(--forest)] text-white" : "text-[var(--foreground)] hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/kontak" onClick={() => setMenuOpen(false)} className="accent-button mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold">
              Konsultasi proyek
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
