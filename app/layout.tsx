import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neil Louie C. Budol | Full-Stack Software Engineer",
  description:
    "Portfolio of Neil Louie C. Budol - Full-Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#F8FAFC] text-slate-800 dark:bg-[#0F172A] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}