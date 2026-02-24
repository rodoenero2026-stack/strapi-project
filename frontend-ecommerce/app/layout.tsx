import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provide"; 
import { Toaster } from 'sonner'; 

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