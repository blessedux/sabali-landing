import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sabali Moment",
  description: "Sabali Moment. Coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
