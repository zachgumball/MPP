// app/kontak/page.tsx
"use client";
import { motion } from "framer-motion";

export default function KontakPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center">
        Hubungi Kami
      </h1>

      <section className="text-gray-700 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Alamat Kantor</h2>
          <p>
            Jl. Soekarno Hatta - By Pass No. 6 F,<br />
            Kaduagung Tengah, Kec. Cinangka,<br />
            Kab. Lebak, Prov. Banten
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Kontak</h2>
          <p>
            📞 <a href="tel:081218327779" className="text-blue-700 hover:underline">0812-1832-7779</a><br />
            📧 <a href="mailto:mandalaputrapersada01@gmail.com" className="text-blue-700 hover:underline">mandalaputrapersada01@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Website</h2>
          <a
            href="https://mandalapersada.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            mandalapersada.vercel.app
          </a>
        </div>
      </section>

      <section>
        <iframe
          title="Lokasi Kantor"
          className="w-full h-64 rounded-md border"
          src="https://www.google.com/maps?q=Jl.+Soekarno+Hatta+-+By+Pass+No.+6+F,+Kaduagung+Tengah,+Cinangka,+Kab.+Lebak,+Banten&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </motion.main>
  );
}
