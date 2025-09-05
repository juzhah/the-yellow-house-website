import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Yellow House - Stay in Boquete, David, Bugaba",
  description:
    "Comfortable and affordable apartments in Boquete, Panama. Perfect for digital nomads, remote workers, and travelers. Book your stay today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* <Head /> */}
      <body>
        <main className="relative">
          {children}
          <WhatsAppBtn />
        </main>
        <Footer />
      </body>
    </html>
  );
}
