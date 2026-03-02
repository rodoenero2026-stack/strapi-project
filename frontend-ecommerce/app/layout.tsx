import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provide"; 
import { Toaster } from 'sonner'; 
import { LoaderProvider } from "@/components/loader-provider"; 
import { Suspense } from "react"; // 1. Importamos Suspense

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlossDior - Ecommerce",
  description: "Mi tienda creada con Strapi y Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={urbanist.className}>
        {/* 2. Envolvemos el LoaderProvider en Suspense */}
        {/* Esto evita el error de "useSearchParams() should be wrapped in a suspense boundary" al desplegar */}
        <Suspense fallback={null}>
          <LoaderProvider /> 
        </Suspense>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster richColors position="top-right" closeButton /> 
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}