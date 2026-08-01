"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Produk = {
  id: number;
  nama: string;
  kategori: "batu" | "pasir" | "screening" | "dekorasi";
  deskripsi: string;
  spesifikasi: string[];
  gambar: string;
};

const produkList: Produk[] = [
  {
    id: 1,
    nama: "Batu Belah",
    kategori: "batu",
    deskripsi: "Batu hasil pemecahan alam untuk pondasi dan konstruksi bangunan berat dengan kualitas terjamin.",
    spesifikasi: ["Ukuran: 10-30 cm", "Kualitas Premium", "Cocok untuk fondasi dan saluran air"],
    gambar: "/batu-belah.jpg",
  },
  {
    id: 2,
    nama: "Split",
    kategori: "batu",
    deskripsi: "Batu pecah berbagai ukuran untuk campuran beton dan infrastruktur jalan berkualitas tinggi.",
    spesifikasi: ["Ukuran: 10-30 mm", "Gradasi sempurna", "Untuk campuran beton", "Infrastruktur jalan"],
    gambar: "/split.jpg",
  },
  {
    id: 3,
    nama: "Pasir",
    kategori: "pasir",
    deskripsi: "Pasir berkualitas tinggi untuk cor, beton, keramik, dan konstruksi umum dengan standar nasional.",
    spesifikasi: ["Ukuran gradasi terukur", "Bersih dan bebas lumpur", "Cocok untuk semua jenis konstruksi"],
    gambar: "/pasir.png",
  },
  {
    id: 4,
    nama: "Abu Batu",
    kategori: "pasir",
    deskripsi: "Material berukuran sangat halus untuk campuran beton, paving, dan pengerasan jalan profesional.",
    spesifikasi: ["Ukuran ultra halus", "Untuk campuran beton", "Paving dan pengerasan jalan"],
    gambar: "/abu-batu.jpg",
  },
  {
    id: 5,
    nama: "Screening",
    kategori: "screening",
    deskripsi: "Material batu kecil hasil penyaringan untuk lapisan dasar dan campuran konstruksi berkualitas.",
    spesifikasi: ["Ukuran 3-5 cm", "Lapisan dasar", "Campuran konstruksi", "Pemadatan optimal"],
    gambar: "/screening.jpg",
  },
  {
    id: 6,
    nama: "Tanah Urug",
    kategori: "dekorasi",
    deskripsi: "Tanah urug pilihan untuk pengurugan dan persiapan lahan proyek konstruksi berskala besar.",
    spesifikasi: ["Tanah pilihan", "Pengurugan lahan", "Persiapan proyek", "Harga kompetitif"],
    gambar: "/pasir.png",
  },
];

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { value: null, label: "Semua Produk" },
    { value: "batu", label: "Batu Pecah" },
    { value: "pasir", label: "Pasir & Abu" },
    { value: "screening", label: "Screening" },
    { value: "dekorasi", label: "Lainnya" },
  ];

  const filteredProduk = useMemo(() => {
    if (!selectedCategory) return produkList;
    return produkList.filter((p) => p.kategori === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 min-h-screen transition-colors duration-300 dark:from-slate-900 dark:to-slate-800">
      {/* Header Section */}
      <section className="pt-16 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Katalog Produk Lengkap
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block mb-2">Produk Unggulan Kami</span>
              <span className="gradient-text">Material Berkualitas Terpercaya</span>
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6 dark:text-gray-300">
              Kami menyediakan berbagai jenis material konstruksi berkualitas premium dengan harga kompetitif
              dan layanan pengiriman profesional ke seluruh wilayah Jabodetabek.
            </p>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value as string | null)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-cyan-500 hover:text-cyan-600 dark:bg-slate-800 dark:text-gray-100 dark:border-slate-700 dark:hover:text-cyan-400"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            {filteredProduk.map((produk) => (
              <motion.div
                key={produk.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover dark:bg-slate-800 dark:border-slate-700"
                variants={itemVariants}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <Image
                    src={produk.gambar}
                    alt={produk.nama}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {categories.find((c) => c.value === produk.kategori)?.label}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">
                    {produk.nama}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed dark:text-gray-300">
                    {produk.deskripsi}
                  </p>

                  {/* Spesifikasi */}
                  <div className="mb-6 space-y-2">
                    {produk.spesifikasi.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="inline-block w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/kontak"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                  >
                    Pesan Sekarang
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="mt-20 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: "📦",
                title: "Pengiriman Tersedia",
                desc: "Pengiriman gratis untuk pembelian minimal tertentu ke seluruh Jabodetabek",
              },
              {
                icon: "✓",
                title: "Kualitas Terjamin",
                desc: "Semua produk telah melewati quality control ketat sesuai standar nasional",
              },
              {
                icon: "💬",
                title: "Konsultasi Gratis",
                desc: "Tim ahli kami siap membantu memilih material yang tepat untuk proyek Anda",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-gray-200 text-center dark:bg-slate-800 dark:border-slate-700"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2 dark:text-white">{item.title}</h4>
                <p className="text-gray-600 text-sm dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
