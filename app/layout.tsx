import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export const metadata = {
  title: "PT. Mandala Putra Persada",
  description: "Company Profile PT. Mandala Putra Persada",
  icons: {
    icon: "/mpp.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-white text-gray-900`}>
        <Header />
        <main className="pt-4 pb-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
