"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const timeline = [
  { year: "2008", title: "Awal perjalanan", description: "PT. Mandala Putra Persada didirikan untuk memenuhi kebutuhan material konstruksi." },
  { year: "2012", title: "Memperluas jangkauan", description: "Layanan berkembang ke wilayah Jabodetabek dengan dukungan armada distribusi." },
  { year: "2017", title: "Penguatan kualitas", description: "Perusahaan terus berupaya meningkatkan kualitas material dan layanan pelanggan." },
  { year: "2023", title: "Layanan digital", description: "Menghadirkan kemudahan digital untuk membantu pelanggan mendapatkan informasi dan layanan." },
];

const values = [
  { number: "01", title: "Kualitas", description: "Menjaga mutu material dan layanan di setiap tahap." },
  { number: "02", title: "Efisiensi", description: "Membantu proses pengadaan berjalan lebih jelas dan terkoordinasi." },
  { number: "03", title: "Kepercayaan", description: "Mengutamakan komunikasi yang terbuka dengan setiap mitra." },
  { number: "04", title: "Keberlanjutan", description: "Mendukung praktik kerja yang bertanggung jawab terhadap lingkungan." },
];

export default function TentangPage() {
  return (
    <main className="page-shell">
      <section className="px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Tentang perusahaan</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Mengenal lebih dekat
                <span className="accent-text"> Mandala Putra Persada.</span>
              </h1>
              <p className="text-muted mt-6 max-w-xl leading-7">
                Kami adalah mitra penyedia material konstruksi yang mendukung pembangunan dengan pilihan produk dan layanan yang dapat diandalkan.
              </p>
              <Link href="/kontak" className="accent-button mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5">
                Mari berkolaborasi <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#263b32] sm:min-h-[430px]"
            >
              <Image src="/screening.jpg" alt="Material konstruksi PT. Mandala Putra Persada" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
              <div className="hero-photo absolute inset-0" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#1e2b24]/65 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60">PT. Mandala Putra Persada</p>
                <p className="mt-2 text-lg font-medium leading-snug">Bertumbuh bersama kebutuhan pembangunan.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="soft-section px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Perjalanan kami</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Dibangun dari pengalaman, terus melangkah ke depan.</h2>
            <p className="text-muted mt-5 text-sm leading-7">
              Kami terus berkembang untuk menjawab kebutuhan material konstruksi yang berubah dari waktu ke waktu.
            </p>
          </div>
          <div className="relative space-y-4 before:absolute before:bottom-6 before:left-[19px] before:top-6 before:w-px before:bg-[var(--line)]">
            {timeline.map((item, index) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="surface-card relative ml-10 rounded-2xl p-5 sm:ml-12 sm:p-7"
              >
                <span className="absolute -left-[41px] top-7 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[var(--background)] bg-[var(--accent)] sm:-left-[49px]">
                  <span className="sr-only">Tahun {item.year}</span>
                </span>
                <span className="eyebrow text-sm font-bold">{item.year}</span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted mt-2 text-sm leading-6">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#263b32] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e39860]">Arah kami</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Visi</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Menjadi perusahaan penyedia material konstruksi yang terpercaya, unggul dalam kualitas, inovatif, dan bertanggung jawab terhadap lingkungan.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Terpercaya", "Profesional", "Bertanggung jawab"].map((item) => (
                <span key={item} className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/75">{item}</span>
              ))}
            </div>
          </div>
          <div className="border-t border-white/15 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e39860]">Yang kami lakukan</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Misi</h2>
            <div className="mt-6 space-y-3">
              {[
                ["Material berkualitas", "Menyediakan material yang sesuai dengan kebutuhan konstruksi."],
                ["Layanan profesional", "Mendukung pengadaan dengan koordinasi dan komunikasi yang baik."],
                ["Kemitraan berkelanjutan", "Membangun hubungan jangka panjang dengan pelanggan dan mitra."],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-sm font-semibold text-[#e39860]">0{index + 1}</span>
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Prinsip kerja</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Nilai yang kami pegang.</h2>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.number} className="surface-card rounded-2xl p-6">
                <span className="eyebrow text-xs font-bold">{value.number}</span>
                <h3 className="mt-7 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted mt-2 text-sm leading-6">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
