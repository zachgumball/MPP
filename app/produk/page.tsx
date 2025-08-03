"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Produk = {
  nama: string;
  deskripsi: string;
  gambar: string;
};

const produkList: Produk[] = [
  {
    nama: "Abu Batu",
    deskripsi:
      "Material berukuran sangat halus, cocok untuk campuran beton, paving, dan pengerasan jalan.",
    gambar: "/abu-batu.jpg",
  },
  {
    nama: "Pasir",
    deskripsi:
      "Pasir berkualitas tinggi untuk kebutuhan cor, beton, keramik, dan konstruksi umum.",
    gambar: "/pasir.png",
  },
  {
    nama: "Screening",
    deskripsi:
      "Material batu kecil hasil penyaringan, digunakan sebagai lapisan dasar dan campuran konstruksi.",
    gambar: "/screening.jpg",
  },
  {
    nama: "Split",
    deskripsi:
      "Batu pecah berbagai ukuran (10–20 mm, 20–30 mm, dll) untuk campuran beton dan infrastruktur jalan.",
    gambar: "/split.jpg",
  },
  {
    nama: "Batu Belah",
    deskripsi:
      "Batu hasil pemecahan alam yang digunakan untuk pondasi, saluran air, dan kontruksi bangunan berat.",
    gambar: "/batu-belah.jpg",
  },
];

export default function ProdukPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 py-10 space-y-10"
    >
      {/* Judul dengan efek gradient dan garis */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight drop-shadow">
          Produk Unggulan Kami
        </h1>
        <div className="mx-auto mt-3 h-1 w-28 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 rounded-full" />
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Kami menyediakan berbagai material konstruksi berkualitas tinggi untuk
          mendukung kebutuhan proyek Anda, mulai dari pasir, batu, hingga material
          khusus lainnya.
        </p>
      </div>

      {/* Grid produk dengan animasi dan efek */}
      <div className="grid md:grid-cols-2 gap-8">
        {produkList.map((produk, idx) => (
          <motion.div
            key={produk.nama}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative group bg-white border border-blue-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-tr from-blue-300 via-purple-200 to-pink-200 opacity-30 rounded-full blur-2xl z-0 group-hover:scale-110 transition-transform duration-300" />
            <Image
              src={produk.gambar}
              alt={produk.nama}
              width={600}
              height={300}
              className="w-full h-48 object-cover z-10 relative group-hover:scale-105 transition-transform duration-300"
            />
            {/* Shine effect */}
            <span className="pointer-events-none absolute left-0 top-0 h-full w-full z-20 overflow-hidden">
              <span className="block absolute left-[-60%] top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md opacity-60 group-hover:animate-shine" />
            </span>
            <div className="p-5 space-y-2 relative z-10">
              <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  className="text-blue-400"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {produk.nama}
              </h2>
              <p className="text-gray-700 text-justify text-sm">
                {produk.deskripsi}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
