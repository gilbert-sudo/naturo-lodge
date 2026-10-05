import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabaña La Martina | Lujo y Naturaleza en Sabanagrande",
  description:
    "Alquiler completo y privado. Una experiencia campestre de lujo en Sabanagrande, Atlántico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Public+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-base antialiased">
        {children}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
