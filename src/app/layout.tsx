import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maturlektüre Bewertung",
  description: "Bewertungs- und Kommentartool für kreative Maturlektüre-Lernprodukte"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
