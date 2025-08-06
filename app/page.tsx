"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900 px-4 py-10 md:px-12 overflow-hidden">
      {/* Futuristic animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-gradient-to-tr from-blue-400 via-blue-200 to-purple-300 opacity-40 rounded-full blur-3xl animate-blob1" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 opacity-40 rounded-full blur-3xl animate-blob2" />
        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse-slow" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Decorative floating dots */}
        <div className="absolute left-10 top-1/2 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-float" />
        <div className="absolute right-16 bottom-24 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-float2" />
      </div>

      <motion.section
        className="max-w-2xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo dengan efek shine */}
        <div className="relative max-w-xs mx-auto overflow-hidden">
          <Image
            src="/hero.png"
            alt="PT Mandala Putra Persada"
            width={250}
            height={250}
            className="w-full h-auto object-cover"
            priority
          />
          {/* Shine animation */}
          <span className="pointer-events-none absolute inset-0 block animate-shine" />
        </div>

        <motion.p
          className="text-lg font-semibold text-gray-700 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          “Mitra Terpercaya dalam Konstruksi dan Solusi Usaha”
        </motion.p>

        {/* Deskripsi singkat */}
        <motion.p
          className="text-gray-700 text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Kami adalah perusahaan penyedia material konstruksi seperti batu, pasir, tanah urug, dan paving block yang berkomitmen mendukung pembangunan infrastruktur nasional secara berkelanjutan. 
          <br className="hidden md:block" />
          <span className="inline-block mt-2 text-blue-600 font-medium">
            Layanan kami meliputi pengadaan, pengiriman, dan konsultasi material untuk proyek Anda.
          </span>
        </motion.p>

        {/* Tombol aksi */}
        <motion.a
          href="#kontak"
          className="inline-block mt-4 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Hubungi Kami
        </motion.a>
      </motion.section>

      {/* Section keunggulan */}
      <motion.section
        className="max-w-3xl mx-auto mt-14 grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          {
            icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-blue-600"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ),
            title: "Material Berkualitas",
            desc: "Hanya menyediakan material terbaik sesuai standar proyek nasional.",
          },
          {
            // Ganti icon menjadi jam
            icon: (
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-purple-600">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            title: "Pengiriman Tepat Waktu",
            desc: "Didukung armada profesional dan sistem distribusi efisien.",
          },
          {
            icon: (
              // Icon headset customer care (lebih jelas: lingkaran, headband, mic)
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-pink-600">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 17v-3a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="5" y="17" width="3" height="4" rx="1.5" stroke="currentColor" strokeWidth="2"/>
                <rect x="16" y="17" width="3" height="4" rx="1.5" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 21v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="19" cy="20" r="1" fill="currentColor"/>
                <path d="M19 20c0-1-2-1-2 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ),
            title: "Konsultasi Proyek",
            desc: "Tim ahli siap membantu solusi material sesuai kebutuhan Anda.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            className="bg-white/80 rounded-2xl shadow-md p-6 flex flex-col items-center text-center border-t-4"
            style={{
              borderColor: ["#3b82f6", "#a78bfa", "#f472b6"][i],
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          >
            <div className="mb-2">{item.icon}</div>
            <div className="font-bold text-blue-700 mb-1">{item.title}</div>
            <div className="text-gray-600 text-sm">{item.desc}</div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
