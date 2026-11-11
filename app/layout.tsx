import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://mandalapersada.vercel.app"),
  title: "PT. Mandala Putra Persada | Material Konstruksi",
  description: "Penyedia material konstruksi: batu belah, split, pasir, abu batu, screening, dan tanah urug.",
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
        <meta name="theme-color" content="#f7f7f4" />
      </head>
      <body className={`${poppins.className} transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
