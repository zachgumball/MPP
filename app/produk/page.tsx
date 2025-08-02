
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
    <motion.main initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-10 space-y-8" >

      <h1 className="text-3xl font-bold text-blue-700 text-center">
        Produk Unggulan Kami
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {produkList.map((produk) => (
          <div
            key={produk.nama}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={produk.gambar}
              alt={produk.nama}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-blue-700">{produk.nama}</h2>
              <p className="text-gray-700 text-sm">{produk.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.main>
  );
}
