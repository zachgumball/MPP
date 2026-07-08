import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "PT. Mandala Putra Persada - Material Konstruksi Berkualitas",
  description: "Penyedia material konstruksi berkualitas tinggi: batu belah, split, pasir, dan tanah urug untuk proyek infrastruktur nasional.",
  keywords: "material konstruksi, batu belah, pasir, split, tanah urug, paving block",
  icons: {
    icon: "/mpp.png",
  },
  openGraph: {
    title: "PT. Mandala Putra Persada",
    description: "Penyedia material konstruksi berkualitas tinggi",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${poppins.className} bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
