import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAYIN EXPRESS - Entregas 24/7 en Zaragoza",
  description: "Servicio de entregas a domicilio 24/7 en Zaragoza, Puebla y municipios cercanos. Tu mejor aliado para recibir lo que necesites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
