import type { Metadata } from "next";
import { Unbounded, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";
import FooterDesktop from "@/components/FooterDesktop";

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400'],    
  display: 'swap',
  variable: '--font-unbounded',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hopet - Сайт помощи приютам и поиска домов для животных",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${unbounded.className} min-h-screen bg-gray-50`}>
        {/*Шапка*/}
        <Header />
        {/* Основное содержимое*/}
        <main className="mx-auto w-full mb-22 sm:mb-0 max-w-7xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
          {children}          
        </main>
        {/* Подвал */}
        <FooterDesktop />
        <MobileBottomNav />
      </body>
    </html>
  );
}
