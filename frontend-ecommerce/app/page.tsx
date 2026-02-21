import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/featured-products"; // <-- 1. Importa el componente

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts /> {/* <-- 2. Añádelo aquí */}
      
      <div className="flex flex-col items-center justify-center p-24">
        {/* El resto de tu contenido */}
      </div>
    </main>
  );
}