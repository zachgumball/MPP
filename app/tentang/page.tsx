// app/tentang/page.tsx

export default function TentangPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center">
        Tentang Perusahaan
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Sejarah Perusahaan</h2>
        <p className="text-gray-700">
          PT. Mandala Putra Persada didirikan sebagai respons terhadap tingginya
          permintaan material konstruksi seperti pasir, batu, tanah urug, dan paving block,
          khususnya di wilayah Jakarta, Tangerang, dan Banten. Berawal dari peluang untuk
          menyediakan suplai material berkualitas dan distribusi yang tepat waktu,
          perusahaan terus berkembang seiring meningkatnya pembangunan infrastruktur nasional.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Visi</h2>
        <p className="text-gray-700 italic">
          “Menjadi perusahaan konstruksi dan pertambangan material terbaik di Indonesia
          yang terpercaya, unggul dalam kualitas, inovatif, serta berwawasan lingkungan
          demi mendukung pembangunan nasional yang berkelanjutan.”
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Misi</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
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
      </section>
    </main>
  );
}
