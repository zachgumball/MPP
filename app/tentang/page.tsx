"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function TentangPage() {
  const misiPoints = [
    {
      icon: "🎯",
      title: "Layanan Terbaik",
      desc: "Memberikan layanan terbaik dengan produk berkualitas tinggi dan pengiriman tepat waktu",
    },
    {
      icon: "🤝",
      title: "Kemitraan Kuat",
      desc: "Menjalin kemitraan berkelanjutan dengan pemerintah, swasta, dan masyarakat lokal",
    },
    {
      icon: "⚙️",
      title: "Profesional & Efisien",
      desc: "Menerapkan prinsip kerja profesional, efisien, dan inovatif dalam setiap proyek",
    },
    {
      icon: "🌍",
      title: "Lingkungan Berkelanjutan",
      desc: "Menjaga kelestarian lingkungan dengan praktik pertambangan yang bertanggung jawab",
    },
    {
      icon: "📈",
      title: "Pengembangan SDM",
      desc: "Meningkatkan daya saing melalui pengembangan sumber daya manusia dan teknologi",
    },
  ];

  const timeline = [
    {
      year: "2008",
      title: "Awal Perjalanan",
      desc: "PT. Mandala Putra Persada didirikan sebagai respons terhadap permintaan material konstruksi yang tinggi",
    },
    {
      year: "2012",
      title: "Ekspansi Bisnis",
      desc: "Memperluas jangkauan layanan ke wilayah Jabodetabek dengan armada distribusi profesional",
    },
    {
      year: "2017",
      title: "Sertifikasi Internasional",
      desc: "Mendapatkan sertifikasi ISO untuk menjamin kualitas material dan layanan pelanggan",
    },
    {
      year: "2023",
      title: "Inovasi Digital",
      desc: "Meluncurkan platform digital untuk memudahkan proses pemesanan dan tracking pengiriman",
    },
  ];

  const values = [
    { icon: "💎", title: "Kualitas", desc: "Komitmen pada standar kualitas tertinggi" },
    { icon: "⚡", title: "Efisiensi", desc: "Layanan cepat dan solusi yang tepat guna" },
    { icon: "🛡️", title: "Kepercayaan", desc: "Transparansi dalam setiap transaksi bisnis" },
    { icon: "♻️", title: "Keberlanjutan", desc: "Tanggung jawab terhadap lingkungan" },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-20 pb-16 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200 to-cyan-100 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block mb-2">Tentang</span>
              <span className="gradient-text">PT. Mandala Putra Persada</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Kami adalah mitra terpercaya dalam menyediakan solusi material konstruksi berkualitas tinggi
              untuk mendukung pembangunan infrastruktur nasional yang berkelanjutan.
            </p>
          </motion.div>

          {/* Company Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="/hero.png"
              alt="Kantor PT. Mandala Putra Persada"
              width={900}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sejarah Perjalanan Kami</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                className="flex gap-6 md:gap-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Year Marker */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-2xl shadow-lg">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/50 mb-6">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold text-cyan-300">Visi Kami</span>
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Menjadi Pemimpin Industri Material Konstruksi
              </h3>

              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                Menjadi perusahaan konstruksi dan pertambangan material terbaik di Indonesia yang terpercaya,
                unggul dalam kualitas, inovatif, serta berwawasan lingkungan demi mendukung pembangunan
                nasional yang berkelanjutan.
              </p>

              <div className="space-y-4">
                {["Terpercaya dan Profesional", "Inovatif dan Responsif", "Ramah Lingkungan"].map(
                  (item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-3 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/50 mb-6">
                <span className="text-2xl">💫</span>
                <span className="font-semibold text-blue-300">Misi Kami</span>
              </div>

              <h3 className="text-3xl font-bold mb-6">Memberikan Nilai Terbaik</h3>

              <div className="space-y-6">
                {[
                  { title: "Kualitas Material", desc: "Menyediakan material berkualitas dengan standar internasional" },
                  { title: "Layanan Prima", desc: "Pengiriman tepat waktu dan layanan konsultasi profesional" },
                  { title: "Partnership Solid", desc: "Membangun hubungan jangka panjang dengan semua stakeholder" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-bold text-cyan-300 mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 text-center card-hover"
                variants={itemVariants}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Misi Detail Section */}
      <section className="py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Komitmen Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Kami berkomitmen untuk terus berinovasi dan berkembang demi memberikan nilai terbaik kepada semua stakeholder
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {misiPoints.slice(0, 5).map((point) => (
              <motion.div
                key={point.title}
                className="p-8 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
              >
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tertarik untuk Berkolaborasi?
            </h2>
            <p className="text-cyan-50 text-lg mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk mendiskusikan kebutuhan material konstruksi proyek Anda
            </p>
            <a
              href="/kontak"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
