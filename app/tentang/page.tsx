// app/tentang/page.tsx
"use client";
import { motion } from "framer-motion";

export default function TentangPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-10 space-y-12"
    >
      {/* Judul utama dengan garis bawah */}
      <div className="relative mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center tracking-tight">
          Tentang Perusahaan
        </h1>
        <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* Sejarah Perusahaan */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-md p-6 md:p-10"
      >
        <h2 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-blue-400 rounded-full mr-2" />
          Sejarah Perusahaan
        </h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          PT. Mandala Putra Persada didirikan sebagai respons terhadap tingginya
          permintaan material konstruksi seperti pasir, batu, tanah urug, dan paving block,
          khususnya di wilayah Jakarta, Tangerang, dan Banten. Berawal dari peluang untuk
          menyediakan suplai material berkualitas dan distribusi yang tepat waktu,
          perusahaan terus berkembang seiring meningkatnya pembangunan infrastruktur nasional.
        </p>
      </motion.section>

      {/* Visi */}
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl shadow-md p-6 md:p-10 border-l-4 border-blue-400"
      >
        <h2 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
          <svg width="22" height="22" fill="none" className="text-blue-400" viewBox="0 0 24 24"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/></svg>
          Visi
        </h2>
        <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-700 text-justify bg-blue-50/60 rounded">
          “Menjadi perusahaan konstruksi dan pertambangan material terbaik di Indonesia
          yang terpercaya, unggul dalam kualitas, inovatif, serta berwawasan lingkungan
          demi mendukung pembangunan nasional yang berkelanjutan.”
        </blockquote>
      </motion.section>

      {/* Misi */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-tr from-blue-50 via-white to-pink-50 rounded-2xl shadow-md p-6 md:p-10"
      >
        <h2 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
          <svg width="22" height="22" fill="none" className="text-pink-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Misi
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3 text-justify">
          <li>
            Memberikan layanan terbaik di bidang konstruksi dan penyediaan material seperti batu, pasir, tanah merah, dan paving block dengan mengutamakan mutu, ketepatan waktu, dan kepuasan pelanggan.
          </li>
          <li>
            Menjalin kemitraan yang kuat dan berkelanjutan dengan pemerintah, swasta, dan masyarakat lokal.
          </li>
          <li>
            Menerapkan prinsip kerja profesional, efisien, dan inovatif.
          </li>
          <li>
            Menjaga kelestarian lingkungan dengan praktik pertambangan yang bertanggung jawab.
          </li>
          <li>
            Meningkatkan daya saing melalui pengembangan SDM dan teknologi.
          </li>
        </ul>
      </motion.section>
    </motion.main>
  );
}
