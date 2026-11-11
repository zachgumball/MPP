"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Kategori = "batu" | "pasir" | "screening" | "lainnya";
type Produk = {
  id: number;
  nama: string;
  kategori: Kategori;
  deskripsi: string;
  spesifikasi: string[];
  gambar: string;
};

const produkList: Produk[] = [
  { id: 1, nama: "Batu Belah", kategori: "batu", deskripsi: "Batu alam untuk pondasi dan konstruksi bangunan.", spesifikasi: ["Ukuran 10–30 cm", "Untuk fondasi dan saluran air"], gambar: "/batu-belah.jpg" },
  { id: 2, nama: "Batu Split", kategori: "batu", deskripsi: "Batu pecah berbagai ukuran untuk campuran beton dan infrastruktur jalan.", spesifikasi: ["Ukuran 10–30 mm", "Gradasi untuk kebutuhan konstruksi"], gambar: "/split.jpg" },
  { id: 3, nama: "Pasir", kategori: "pasir", deskripsi: "Pasir untuk cor, beton, keramik, dan konstruksi umum.", spesifikasi: ["Gradasi terukur", "Untuk berbagai kebutuhan konstruksi"], gambar: "/pasir.png" },
  { id: 4, nama: "Abu Batu", kategori: "pasir", deskripsi: "Material berukuran halus untuk campuran beton, paving, dan pengerasan jalan.", spesifikasi: ["Ukuran halus", "Untuk campuran dan pengerasan jalan"], gambar: "/abu-batu.jpg" },
  { id: 5, nama: "Screening", kategori: "screening", deskripsi: "Material batu hasil penyaringan untuk lapisan dasar dan campuran konstruksi.", spesifikasi: ["Ukuran 3–5 cm", "Untuk lapisan dasar"], gambar: "/screening.jpg" },
  { id: 6, nama: "Tanah Urug", kategori: "lainnya", deskripsi: "Material untuk pengurugan dan persiapan lahan proyek konstruksi.", spesifikasi: ["Untuk pengurugan lahan", "Cocok untuk persiapan proyek"], gambar: "/pasir.png" },
];

const categories: { value: Kategori | "semua"; label: string }[] = [
  { value: "semua", label: "Semua produk" },
  { value: "batu", label: "Batu pecah" },
  { value: "pasir", label: "Pasir & abu batu" },
  { value: "screening", label: "Screening" },
  { value: "lainnya", label: "Lainnya" },
];

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState<Kategori | "semua">("semua");
  const filteredProduk = useMemo(
    () => selectedCategory === "semua" ? produkList : produkList.filter((product) => product.kategori === selectedCategory),
    [selectedCategory],
  );

  return (
    <main className="page-shell min-h-screen">
      <section className="px-5 pb-10 pt-16 md:px-8 md:pb-14 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Katalog material</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Temukan material
                <br className="hidden sm:block" /> untuk kebutuhan proyek.
              </h1>
              <p className="text-muted mt-5 max-w-2xl text-base leading-7">
                Jelajahi pilihan material konstruksi kami. Hubungi tim untuk konsultasi spesifikasi dan ketersediaan.
              </p>
            </div>
            <div className="surface-card rounded-2xl px-5 py-4 md:min-w-48">
              <p className="eyebrow text-xs font-semibold uppercase tracking-wider">Katalog</p>
              <p className="mt-1 text-2xl font-semibold">{produkList.length} pilihan</p>
              <p className="text-muted text-xs">material konstruksi</p>
            </div>
          </div>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter kategori produk">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                aria-pressed={selectedCategory === category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  selectedCategory === category.value
                    ? "bg-[#263b32] text-white shadow-sm"
                    : "surface-card text-muted hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProduk.map((produk) => (
              <motion.article
                layout
                key={produk.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="surface-card group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-black/5">
                  <Image
                    src={produk.gambar}
                    alt={produk.nama}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#263b32] backdrop-blur">
                    {categories.find((category) => category.value === produk.kategori)?.label}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{produk.nama}</h2>
                  <p className="text-muted mt-2 min-h-12 text-sm leading-6">{produk.deskripsi}</p>
                  <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-4">
                    {produk.spesifikasi.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-sm text-muted">
                        <span className="accent-text mt-0.5" aria-hidden="true">✓</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/kontak?produk=${encodeURIComponent(produk.nama)}`} className="accent-button mt-6 flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition hover:shadow-md">
                    Tanyakan produk <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredProduk.length === 0 && (
            <p className="text-muted py-16 text-center" role="status">Produk pada kategori ini belum tersedia.</p>
          )}
        </div>
      </section>

      <section className="soft-section px-5 py-14 md:px-8 md:py-18">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Butuh rekomendasi material?</h2>
            <p className="text-muted mt-2 text-sm">Tim kami siap berdiskusi tentang kebutuhan proyek Anda.</p>
          </div>
          <Link href="/kontak" className="accent-button inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5">
            Hubungi tim kami <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
