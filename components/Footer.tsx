// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/tentang" },
    { label: "Produk", href: "/produk" },
    { label: "Kontak", href: "/kontak" },
  ];

  const contactInfo = [
    { label: "Telepon", value: "0812-1832-7779" },
    { label: "Email", value: "mandalaputrapersada01@gmail.com" },
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">PT. Mandala Putra Persada</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Penyedia material konstruksi berkualitas tinggi untuk mendukung pembangunan infrastruktur nasional yang berkelanjutan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <p className="text-gray-500">{info.label}</p>
                  <a
                    href={info.label === "Telepon" ? `tel:${info.value.replace(/-/g, "")}` : `mailto:${info.value}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                  >
                    {info.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} PT. Mandala Putra Persada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
