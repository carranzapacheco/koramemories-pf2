// app/layout.tsx
import { Footer } from "@/components/Footer";
import "./globals.css"
import {Header} from "@/components/Header";

export const metadata = {
  title: "Segundo Amaro Carranza Contreras",
  description: "Perfil 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
