// app/tentang/page.tsx
"use client";
import { motion } from "framer-motion";

export default function TentangPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center">
        Tentang Perusahaan
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Sejarah Perusahaan</h2>
        <p className="text-gray-700 text-justify">
          PT. Mandala Putra Persada didirikan sebagai respons terhadap tingginya
          permintaan material konstruksi seperti pasir, batu, tanah urug, dan paving block,
          khususnya di wilayah Jakarta, Tangerang, dan Banten. Berawal dari peluang untuk
          menyediakan suplai material berkualitas dan distribusi yang tepat waktu,
          perusahaan terus berkembang seiring meningkatnya pembangunan infrastruktur nasional.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Visi</h2>
        <p className="text-gray-700 italic text-justify">
          “Menjadi perusahaan konstruksi dan pertambangan material terbaik di Indonesia
          yang terpercaya, unggul dalam kualitas, inovatif, serta berwawasan lingkungan
          demi mendukung pembangunan nasional yang berkelanjutan.”
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Misi</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-justify">
          <li className="pl-0">
            Memberikan layanan terbaik di bidang konstruksi dan penyediaan material seperti batu, pasir, tanah merah, dan paving block dengan mengutamakan mutu, ketepatan waktu, dan kepuasan pelanggan.
          </li>
          <li className="pl-0">
            Menjalin kemitraan yang kuat dan berkelanjutan dengan pemerintah, swasta, dan masyarakat lokal.
          </li>
          <li className="pl-0">
            Menerapkan prinsip kerja profesional, efisien, dan inovatif.
          </li>
          <li className="pl-0">
            Menjaga kelestarian lingkungan dengan praktik pertambangan yang bertanggung jawab.
          </li>
          <li className="pl-0">
            Meningkatkan daya saing melalui pengembangan SDM dan teknologi.
          </li>
        </ul>
      </section>
    </motion.main>
  );
}
