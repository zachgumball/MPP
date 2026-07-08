"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function KontakPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Lokasi Kantor",
      content: "Jl. Soekarno Hatta - By Pass No. 6 F, Kaduagung Tengah, Kec. Cinangka, Kab. Lebak, Prov. Banten",
      link: "https://maps.google.com/?q=Jl.+Soekarno+Hatta+-+By+Pass+No.+6+F,+Kaduagung+Tengah,+Cinangka,+Kab.+Lebak,+Banten",
    },
    {
      icon: "📞",
      title: "Telepon",
      content: "0812-1832-7779",
      link: "tel:081218327779",
    },
    {
      icon: "📧",
      title: "Email",
      content: "mandalaputrapersada01@gmail.com",
      link: "mailto:mandalaputrapersada01@gmail.com",
    },
    {
      icon: "🌐",
      title: "Website",
      content: "mandalapersada.vercel.app",
      link: "https://mandalapersada.vercel.app",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="bg-white overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block mb-2">Hubungi Kami</span>
              <span className="gradient-text">Mari Berkolaborasi Bersama</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Kami siap membantu Anda dengan konsultasi gratis dan solusi material konstruksi terbaik untuk proyek Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300 card-hover cursor-pointer"
                variants={itemVariants}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{info.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-cyan-600 transition-colors duration-300">
                  {info.content}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Kirim Pesan Anda</h2>
              <p className="text-gray-600 mb-8">
                Kami akan merespons pesan Anda dalam 24 jam kerja
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    placeholder="nama@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    placeholder="08XX-XXXX-XXXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    placeholder="Subjek pertanyaan Anda"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                  />
                </div>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <div className="p-4 bg-green-50 border-2 border-green-500 text-green-700 rounded-lg font-semibold">
                    ✓ Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="p-4 bg-red-50 border-2 border-red-500 text-red-700 rounded-lg font-semibold">
                    ✗ Terjadi kesalahan. Silakan coba lagi.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {formStatus === "loading" ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              className="order-1 md:order-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                <iframe
                  title="Lokasi Kantor PT. Mandala Putra Persada"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8467862261166!2d106.26638572503!3d-6.304881522093639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e422de6b1f7f0e5%3A0x1f1f1f1f1f1f1f1f!2sJl.%20Soekarno%20Hatta%20-%20By%20Pass%20No.%206%20F%2C%20Kaduagung%20Tengah!5e0!3m2!1sid!2sid!4v1234567890123"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Hubungi Kami Langsung</h3>
                <p className="text-cyan-50 mb-6">
                  Untuk pertanyaan mendesak, hubungi kami melalui WhatsApp atau telepon
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/081218327779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                  >
                    <span className="text-2xl">💬</span>
                    <div>
                      <div>WhatsApp</div>
                      <div className="text-sm text-cyan-100">0812-1832-7779</div>
                    </div>
                  </a>

                  <a
                    href="tel:081218327779"
                    className="flex items-center gap-3 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                  >
                    <span className="text-2xl">📞</span>
                    <div>
                      <div>Telepon</div>
                      <div className="text-sm text-cyan-100">0812-1832-7779</div>
                    </div>
                  </a>

                  <a
                    href="mailto:mandalaputrapersada01@gmail.com"
                    className="flex items-center gap-3 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                  >
                    <span className="text-2xl">📧</span>
                    <div>
                      <div>Email</div>
                      <div className="text-sm text-cyan-100">mandalaputrapersada01@gmail.com</div>
                    </div>
                  </a>
                </div>

                {/* Business Hours */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-3">Jam Operasional</h4>
                  <div className="space-y-2 text-sm">
                    <p>Senin - Jumat: 08:00 - 17:00</p>
                    <p>Sabtu: 08:00 - 14:00</p>
                    <p>Minggu & Hari Libur: Tutup</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan Umum</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: "Berapa waktu pengiriman material?",
                a: "Pengiriman biasanya memakan waktu 1-3 hari kerja tergantung lokasi dan jenis material yang dipesan.",
              },
              {
                q: "Apakah ada biaya pengiriman?",
                a: "Kami menawarkan gratis ongkir untuk pembelian minimal tertentu ke area Jabodetabek.",
              },
              {
                q: "Bagaimana cara melakukan pemesanan?",
                a: "Hubungi kami melalui telepon, WhatsApp, atau email untuk mendiskusikan kebutuhan Anda.",
              },
              {
                q: "Apakah tersedia konsultasi gratis?",
                a: "Ya, kami menyediakan konsultasi gratis untuk membantu Anda memilih material yang tepat.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-lg border-2 border-slate-200 hover:border-cyan-500 transition-colors duration-300"
                variants={itemVariants}
              >
                <h3 className="font-bold text-slate-900 mb-2 text-lg">❓ {faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
