import type { Metadata } from "next";
import { Jost, Manrope } from "next/font/google";
import "./globals.css";
import { casaColomboData } from "@/data/casa-colombo";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const headingFont = Jost({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: casaColomboData.seo.title,
  description: casaColomboData.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${headingFont.variable} ${manrope.variable} antialiased`}
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

