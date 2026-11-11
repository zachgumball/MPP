"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { name: "Batu belah", image: "/batu-belah.jpg", detail: "Pondasi dan konstruksi" },
  { name: "Batu split", image: "/split.jpg", detail: "Beton dan infrastruktur" },
  { name: "Pasir pilihan", image: "/pasir.png", detail: "Cor dan konstruksi umum" },
];

const benefits = [
  {
    number: "01",
    title: "Kualitas terjaga",
    description: "Material pilihan untuk membantu memenuhi kebutuhan dan spesifikasi proyek Anda.",
  },
  {
    number: "02",
    title: "Pengiriman terkoordinasi",
    description: "Pengiriman direncanakan bersama tim agar material tiba sesuai kebutuhan lapangan.",
  },
  {
    number: "03",
    title: "Konsultasi langsung",
    description: "Diskusikan kebutuhan, jenis material, serta rencana pengiriman bersama tim kami.",
  },
];

const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function HomePage() {
  return (
    <main className="page-shell overflow-hidden">
      <section className="px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12">
        <div className="relative mx-auto min-h-[620px] max-w-7xl overflow-hidden rounded-[2rem] bg-[#263b32] md:min-h-[680px]">
          <Image
            src="/split.jpg"
            alt="Material dan kegiatan konstruksi PT. Mandala Putra Persada"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover object-center opacity-75"
          />
          <div className="hero-photo absolute inset-0" />
          <div className="relative z-10 flex min-h-[620px] max-w-3xl flex-col justify-center px-6 py-16 text-white sm:px-12 md:min-h-[680px] md:px-16">
            <motion.div initial="hidden" animate="visible" variants={rise}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e39860]" />
                Mitra material konstruksi Anda
              </span>
              <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
                Fondasi kuat
                <br />
                <span className="text-[#efb17f]">dimulai dari sini.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
                PT. Mandala Putra Persada menyediakan material konstruksi untuk membantu proyek berjalan dengan tepat, dari awal hingga selesai.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/produk" className="accent-button inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold shadow-lg shadow-black/10 transition hover:-translate-y-0.5">
                  Jelajahi produk <span aria-hidden="true">→</span>
                </Link>
                <Link href="/kontak" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  Konsultasi proyek
                </Link>
              </div>
            </motion.div>
            <div className="absolute bottom-7 left-6 flex items-center gap-3 text-xs text-white/65 sm:left-12 md:bottom-10 md:left-16">
              <span className="h-px w-9 bg-[#e39860]" />
              Melayani kebutuhan material konstruksi
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden rounded-2xl border border-white/20 bg-[#1e2b24]/70 px-5 py-4 text-white backdrop-blur-lg lg:block">
            <p className="text-xs text-white/60">Beragam kebutuhan</p>
            <p className="mt-1 text-lg font-semibold">Satu mitra tepercaya</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Kenali MPP</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Material yang sesuai. Layanan yang bisa diandalkan.
            </h2>
          </div>
          <div className="md:pl-12">
            <p className="text-muted max-w-2xl leading-7">
              Dari batu belah hingga tanah urug, kami menyediakan pilihan material untuk beragam kebutuhan konstruksi. Tim kami siap membantu Anda menentukan langkah berikutnya.
            </p>
            <Link href="/tentang" className="accent-text mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3">
              Tentang perusahaan kami <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="soft-section px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Pilihan material</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Siap mendukung proyek Anda</h2>
            </div>
            <Link href="/produk" className="text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--accent-dark)]">
              Lihat semua produk <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{ ...rise, visible: { ...rise.visible, transition: { ...rise.visible.transition, delay: index * 0.08 } } }}
                className="group surface-card overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden bg-black/5">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#263b32] backdrop-blur">
                    Material konstruksi
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-muted mt-1 text-sm">{product.detail}</p>
                  </div>
                  <Link href="/kontak" aria-label={`Tanyakan ${product.name}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] transition group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Cara kami bekerja</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Sederhana, jelas, terkoordinasi.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="surface-card rounded-2xl p-6 sm:p-8">
                <span className="eyebrow text-sm font-semibold">{benefit.number}</span>
                <h3 className="mt-8 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted mt-3 text-sm leading-7">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2rem] bg-[#263b32] px-7 py-10 text-white sm:px-12 sm:py-14 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e39860]">Mulai percakapan</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Ceritakan kebutuhan proyek Anda.</h2>
            <p className="mt-4 text-sm leading-7 text-white/65">Tim kami siap membantu Anda menemukan material yang tepat.</p>
          </div>
          <Link href="/kontak" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#263b32] transition hover:-translate-y-0.5 hover:bg-[#f1eee8]">
            Hubungi tim kami <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
