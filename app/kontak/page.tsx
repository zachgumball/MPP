"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const address = "Jl. Soekarno Hatta - By Pass No. 6 F, Kaduagung Tengah, Kec. Cinangka, Kab. Lebak, Prov. Banten";
const contactItems = [
  { icon: "⌖", label: "Lokasi kantor", value: address, href: "https://maps.google.com/?q=Jl.+Soekarno+Hatta+-+By+Pass+No.+6+F,+Kaduagung+Tengah,+Cinangka,+Kab.+Lebak,+Banten" },
  { icon: "↗", label: "Telepon / WhatsApp", value: "0812-1832-7779", href: "https://wa.me/6281218327779" },
  { icon: "✉", label: "Email", value: "mandalaputrapersada01@gmail.com", href: "mailto:mandalaputrapersada01@gmail.com" },
];

const faqs = [
  { question: "Berapa waktu pengiriman material?", answer: "Waktu pengiriman menyesuaikan lokasi dan jenis material. Hubungi tim kami untuk mendiskusikan jadwal proyek Anda." },
  { question: "Bagaimana cara mengetahui ketersediaan produk?", answer: "Hubungi kami melalui WhatsApp atau telepon untuk mendapatkan informasi ketersediaan terbaru." },
  { question: "Bagaimana cara melakukan pemesanan?", answer: "Sampaikan jenis material, jumlah, dan lokasi pengiriman kepada tim kami melalui formulir atau kontak yang tersedia." },
  { question: "Apakah tersedia konsultasi?", answer: "Silakan hubungi tim kami untuk mendiskusikan pilihan material yang sesuai dengan kebutuhan proyek Anda." },
];

export default function KontakPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("produk");
    if (product) setProductName(product);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Halo PT. Mandala Putra Persada, saya ingin berkonsultasi.",
      "",
      `Nama: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Telepon: ${formData.get("phone")}`,
      `Kebutuhan: ${formData.get("subject")}`,
      `Pesan: ${formData.get("message")}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/6281218327779?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormStatus("success");
  };

  return (
    <main className="page-shell">
      <section className="px-5 pb-12 pt-16 md:px-8 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Hubungi kami</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Mari bicarakan
              <span className="accent-text"> proyek Anda.</span>
            </h1>
            <p className="text-muted mt-5 max-w-2xl leading-7">
              Sampaikan kebutuhan material Anda. Tim kami siap membantu menjawab pertanyaan dan mendiskusikan langkah selanjutnya.
            </p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="surface-card group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6"
              >
                <span className="accent-text flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-lg">{item.icon}</span>
                <p className="text-muted mt-5 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                <p className="mt-2 break-words text-sm font-semibold leading-6 group-hover:text-[var(--accent-dark)]">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-section px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface-card rounded-[1.75rem] p-6 sm:p-9">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Kirim pertanyaan</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Ceritakan kebutuhan Anda.</h2>
            <p className="text-muted mt-2 text-sm leading-6">Formulir ini akan menyiapkan pesan untuk dikirim melalui WhatsApp.</p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">Nama lengkap</label>
                  <input id="name" name="name" type="text" autoComplete="name" required placeholder="Nama Anda" className="w-full rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm transition placeholder:text-muted focus:border-[var(--accent)] focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required placeholder="nama@email.com" className="w-full rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm transition placeholder:text-muted focus:border-[var(--accent)] focus:outline-none" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">Nomor telepon</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="08xx xxxx xxxx" className="w-full rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm transition placeholder:text-muted focus:border-[var(--accent)] focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">Kebutuhan material</label>
                  <input id="subject" name="subject" type="text" required value={productName} onChange={(event) => setProductName(event.target.value)} placeholder="Contoh: batu split" className="w-full rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm transition placeholder:text-muted focus:border-[var(--accent)] focus:outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">Pesan</label>
                <textarea id="message" name="message" required rows={4} placeholder="Ceritakan kebutuhan atau pertanyaan Anda..." className="w-full resize-y rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm transition placeholder:text-muted focus:border-[var(--accent)] focus:outline-none" />
              </div>

              {formStatus === "success" && (
                <p role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                  Draf pesan siap. Tinjau dan kirim melalui WhatsApp; jika tab baru tidak terbuka, gunakan tautan chat langsung di samping.
                </p>
              )}
              <button type="submit" className="accent-button inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 sm:w-auto">
                Lanjutkan ke WhatsApp <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-5">
            <div className="surface-card relative min-h-[300px] flex-1 overflow-hidden rounded-[1.75rem]">
              <iframe
                title="Lokasi PT. Mandala Putra Persada di Google Maps"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.25]"
                src="https://maps.google.com/maps?q=Jl.%20Soekarno%20Hatta%20By%20Pass%20No.%206%20F%2C%20Kaduagung%20Tengah%2C%20Lebak%2C%20Banten&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-[1.75rem] bg-[#263b32] p-6 text-white sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e39860]">Jam operasional</p>
                  <h2 className="mt-2 text-xl font-semibold">Kami siap membantu.</h2>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75">Waktu Indonesia</span>
              </div>
              <div className="mt-6 space-y-3 text-sm text-white/75">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><span>Senin – Jumat</span><span>08.00 – 17.00</span></div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><span>Sabtu</span><span>08.00 – 14.00</span></div>
                <div className="flex justify-between gap-4"><span>Minggu & hari libur</span><span>Tutup</span></div>
              </div>
              <a href="https://wa.me/6281218327779" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#efb17f] transition hover:gap-3">
                Chat langsung di WhatsApp <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.22em]">Bantuan</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Pertanyaan yang sering diajukan.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="surface-card group rounded-2xl p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold sm:text-base">
                  {faq.question}
                  <span className="accent-text text-xl transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="text-muted mt-4 max-w-3xl border-t border-[var(--line)] pt-4 text-sm leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="text-muted mt-8 text-sm">
            Masih ada pertanyaan? <Link href="/produk" className="accent-text font-semibold hover:underline">Lihat katalog produk</Link> atau hubungi tim kami.
          </p>
        </div>
      </section>
    </main>
  );
}
