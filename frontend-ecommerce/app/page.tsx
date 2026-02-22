import BannerDiscount from "@/components/banner-discoun"; 
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category"; // <-- 1. Importamos el nuevo componente
import FeaturedProducts from "@/components/featured-products"; 

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts /> 
      <BannerDiscount /> 
      
      <ChooseCategory /> {/* <-- 2. Lo añadimos aquí abajo */}
      
      <div className="flex flex-col items-center justify-center p-24">
        {/* El resto de tu contenido */}
      </div>
    </main>
  );
}