import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Modak } from 'next/font/google';
import './globals.css';
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";
// import MobileBottomNav from "@/components/MobileBottomNav";

const modak = Modak({
  subsets: ['latin'],
  weight: ['400'],    
  display: 'swap',
  variable: '--font-modak',
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
      <body className={`${geistSans.className} min-h-screen bg-gray-50`}>
        {/*Шапка*/}
        <Header />
        {/* Основное содержимое*/}
        <main className="mx-auto w-full mb-22 sm:mb-0 max-w-7xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
          {children}          
        </main>
        {/* Подвал */}
        <footer className="mx-auto mb-3 mt-8 w-full max-w-7xl px-3 hidden sm:block sm:px-6 lg:px-8">
          <div className="rounded-xl bg-gray-800 px-4 py-6 text-center text-white sm:px-6">
            <p>Сайт помощи приютам и поиска домов для животных</p>
            <p className="mt-2 text-gray-400">Сайт разработан студентами НовГУ</p>
            <p className="mt-2">{new Date().getFullYear()} Hopet</p>
          </div>
        </footer>
        <MobileBottomNav />
      </body>
    </html>
  );
}
