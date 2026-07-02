import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neil Louie C. Budol | Full-Stack Software Engineer",
  description: "Portfolio of Neil Louie C. Budol - Full-Stack Software Engineer specializing in backend systems, scalable web applications, and database architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-colors duration-300 bg-[#F8FAFC] text-slate-800 dark:bg-[#0F172A] dark:text-slate-100 min-h-screen overflow-x-hidden`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}