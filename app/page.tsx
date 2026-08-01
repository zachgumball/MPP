"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeContext";

export default function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Material Berkualitas Premium",
      description: "Semua material telah melewati quality check ketat sesuai standar nasional dan internasional.",
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Pengiriman Cepat & Tepat",
      description: "Armada profesional siap mengantarkan material Anda ke lokasi proyek dengan aman dan tepat waktu.",
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Konsultasi Teknis Gratis",
      description: "Tim ahli kami siap memberikan solusi terbaik sesuai spesifikasi dan kebutuhan proyek Anda.",
    },
  ];

  const stats = [
    { number: "500+", label: "Proyek Selesai" },
    { number: "1000+", label: "Klien Puas" },
    { number: "15+", label: "Tahun Berpengalaman" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className={`overflow-hidden transition-colors duration-300 ${isDark ? 'dark bg-slate-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`relative pt-20 pb-32 md:pt-32 md:pb-48 px-4 md:px-6 transition-colors duration-300 ${isDark ? 'dark bg-slate-900' : 'bg-white'}`}>
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-blob" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-semibold text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              Solusi Material Konstruksi Terpercaya
            </motion.div>

            {/* Main Heading */}
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${isDark ? 'dark text-white' : 'text-slate-900'}`}>
              <span className="block mb-2">PT. Mandala Putra</span>
              <span className="gradient-text">Persada</span>
            </h1>

            {/* Tagline */}
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'dark text-gray-400' : 'text-gray-600'}`}>
              Kami menyediakan material konstruksi berkualitas tinggi dengan layanan profesional untuk mendukung kesuksesan setiap proyek Anda.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/produk" className="btn-primary">
                Lihat Produk Kami
              </Link>
              <Link href="/kontak" className="btn-secondary">
                Hubungi Tim Kami
              </Link>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="PT Mandala Putra Persada - Material Konstruksi Profesional"
                  width={350}
                  height={280}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 -z-10 animate-glow-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                variants={itemVariants}
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 px-4 md:px-6 transition-colors duration-300 ${isDark ? 'dark bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent`}>Keunggulan Kami</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4" />
            <p className={`max-w-2xl mx-auto text-lg transition-colors duration-300 ${isDark ? 'dark text-gray-300' : 'text-gray-600'}`}>
              Kami berkomitmen memberikan layanan terbaik dengan produk berkualitas tinggi
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className={`p-8 rounded-2xl bg-gradient-to-br border transition-colors duration-300 card-hover group ${
                  isDark
                    ? 'dark from-slate-700 to-slate-600 border-slate-600 hover:border-cyan-500'
                    : 'from-slate-50 to-white border-slate-200'
                }`}
                variants={itemVariants}
              >
                {/* Icon Background */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'dark text-white' : 'text-slate-900'}`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'dark text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 px-4 md:px-6 transition-colors duration-300 ${isDark ? 'dark bg-slate-900' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent`}>Testimoni Klien Kami</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4" />
            <p className={`max-w-2xl mx-auto text-lg transition-colors duration-300 ${isDark ? 'dark text-gray-300' : 'text-gray-600'}`}>
              Kepuasan klien adalah prioritas utama kami, dan kami bangga dengan reputasi yang telah dibangun
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                name: "PT. Sinar Konstruksi",
                role: "Project Manager",
                content: "Layanan PT. Mandala Putra Persada sangat profesional. Material berkualitas tinggi dan pengiriman selalu tepat waktu.",
                rating: 5,
              },
              {
                name: "CV. Bangunan Jaya",
                role: "Direktur Operasional",
                content: "Sudah bekerja sama selama 8 tahun. Konsistensi kualitas dan pelayanan yang luar biasa membuat kami terus mempercayai mereka.",
                rating: 5,
              },
              {
                name: "PT. Infrastruktur Indonesia",
                role: "Procurement Officer",
                content: "Harga yang kompetitif dan dukungan teknis yang excellent membuat pekerjaan proyek kami menjadi lebih efisien.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className={`p-8 rounded-2xl shadow-lg border transition-colors duration-300 card-hover ${
                  isDark
                    ? 'dark bg-slate-700 border-slate-600'
                    : 'bg-white border-gray-200'
                }`}
                variants={itemVariants}
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                </div>
                <p className={`mb-6 leading-relaxed italic transition-colors duration-300 ${isDark ? 'dark text-gray-200' : 'text-gray-700'}`}>
                  "{testimonial.content}"
                </p>
                <div className={`border-t pt-4 transition-colors duration-300 ${isDark ? 'dark border-slate-600' : 'border-gray-200'}`}>
                  <h4 className={`font-bold transition-colors duration-300 ${isDark ? 'dark text-white' : 'text-slate-900'}`}>{testimonial.name}</h4>
                  <p className="text-sm text-cyan-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 px-4 md:px-6 transition-colors duration-300 ${isDark ? 'dark bg-slate-800' : 'bg-gradient-to-b from-white to-slate-50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'dark text-white' : 'text-slate-900'}`}>Tim Profesional Kami</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4" />
            <p className={`max-w-2xl mx-auto text-lg transition-colors duration-300 ${isDark ? 'dark text-gray-300' : 'text-gray-600'}`}>
              Tim berpengalaman dan berdedikasi siap memberikan solusi terbaik untuk kebutuhan Anda
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                name: "Budi Santoso",
                role: "Direktur Utama",
                icon: "👔",
              },
              {
                name: "Siti Nurhaliza",
                role: "Manager Operasional",
                icon: "💼",
              },
              {
                name: "Roni Suryanto",
                role: "Kepala Distribusi",
                icon: "🚚",
              },
              {
                name: "Dewi Lestari",
                role: "Customer Service",
                icon: "📞",
              },
            ].map((team, idx) => (
              <motion.div
                key={idx}
                className={`p-8 rounded-2xl shadow-lg border text-center card-hover group transition-colors duration-300 ${
                  isDark
                    ? 'dark bg-slate-700 border-slate-600'
                    : 'bg-white border-gray-200'
                }`}
                variants={itemVariants}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {team.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'dark text-white' : 'text-slate-900'}`}>{team.name}</h3>
                <p className="text-cyan-600 font-semibold text-sm">{team.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 md:px-6 transition-colors duration-300 ${isDark ? 'dark bg-slate-900' : 'bg-gradient-to-r from-cyan-600 to-blue-600'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'dark text-white' : 'text-white'}`}>
              Siap untuk Memulai Proyek Anda?
            </h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'dark text-gray-300' : 'text-cyan-50'}`}>
              Hubungi tim kami hari ini untuk mendapatkan konsultasi gratis dan penawaran terbaik untuk material konstruksi Anda.
            </p>
            <Link
              href="/kontak"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Hubungi Kami Sekarang
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
