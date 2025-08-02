import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PT. Mandala Putra Persada",
  description: "Company Profile PT. Mandala Putra Persada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="pt-4 pb-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
