import Link from "next/link";

const links = [
  { href: "/tentang", label: "Tentang kami" },
  { href: "/produk", label: "Produk material" },
  { href: "/kontak", label: "Hubungi kami" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e2b24] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_0.8fr_1fr] md:px-8 md:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e39860]">PT. Mandala Putra Persada</p>
          <h2 className="mt-4 max-w-md text-2xl font-semibold leading-snug tracking-tight">
            Material yang tepat untuk membangun masa depan.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Penyedia material konstruksi untuk mendukung proyek Anda dengan pelayanan yang profesional.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Jelajahi</h3>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/65 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Mari terhubung</h3>
          <a href="tel:081218327779" className="mt-4 block text-sm text-white/65 transition hover:text-white">
            0812-1832-7779
          </a>
          <a href="mailto:mandalaputrapersada01@gmail.com" className="mt-2 block break-all text-sm text-white/65 transition hover:text-white">
            mandalaputrapersada01@gmail.com
          </a>
          <Link href="/kontak" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#e39860] transition hover:gap-3">
            Hubungi tim kami <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <span>© {new Date().getFullYear()} PT. Mandala Putra Persada</span>
          <span>Membangun dengan kualitas dan kepercayaan.</span>
        </div>
      </div>
    </footer>
  );
}
