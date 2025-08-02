"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-10 md:px-12">
      <motion.section
        className="max-w-2xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/hero.jpeg"
            alt="PT Mandala Putra Persada"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <motion.h1
          className="text-3xl md:text-5xl font-bold text-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          PT. Mandala Putra Persada
        </motion.h1>

        <motion.p
          className="text-lg font-semibold text-gray-700 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          “Mitra Terpercaya dalam Konstruksi dan Solusi Usaha”
        </motion.p>

        <motion.p
          className="text-gray-700 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Kami adalah perusahaan penyedia material konstruksi seperti batu,
          pasir, tanah urug, dan paving block yang berkomitmen mendukung
          pembangunan infrastruktur nasional secara berkelanjutan.
        </motion.p>

        <motion.a
          href="#kontak"
          className="inline-block mt-4 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Hubungi Kami
        </motion.a>
      </motion.section>
    </main>
  );
}
