import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amara Villa — A quieter presence. A lasting impression.",
  description:
    "Amara Villa adalah private luxury estate di Ubud, Bali. Ruang untuk berhenti sejenak dengan konsep tropical modern, minimalis, dan eksklusif.",
  keywords:
    "amara villa, luxury villa ubud, bali private villa, tropical modern, private estate bali, exclusive retreat",
  openGraph: {
    title: "Amara Villa — Ruang untuk berhenti sejenak.",
    description:
      "A quieter presence. A lasting impression. Satu villa, sepenuhnya untuk Anda di Ubud, Bali.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#FAF8F5] text-[#141413] font-sans antialiased selection:bg-[#141413] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
