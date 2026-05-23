import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Zhang · Jc",
  description: "个人网站 — 展示项目与文章",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Sidebar />
        <main className="md:ml-[200px] pt-[52px] md:pt-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
