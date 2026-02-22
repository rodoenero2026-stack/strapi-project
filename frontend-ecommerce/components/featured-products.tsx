"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious 
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import SkeletonSchema from "./skeletonSchema";
import { Expand, ShoppingCart } from "lucide-react";

const FeaturedProducts = () => {
    const { result, loading }: ResponseType = useGetFeaturedProducts();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8 font-bold">Productos destacados</h3>
            
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}

                    {result !== null && (
                        result.map((product: ProductType) => {
                            // Strapi v5 entrega los datos directos, sin la capa "attributes"
                            const id = product.id;
                            const imageUrl = product.images?.[0]?.url;

                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                {imageUrl ? (
                                                    <img 
                                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`} 
                                                        alt={product.productName || "Producto"}
                                                        className="rounded-lg object-contain h-[200px]" 
                                                    />
                                                ) : (
                                                    <div className="h-[200px] w-full bg-gray-100 flex items-center justify-center rounded-lg">
                                                        <p className="text-gray-400 text-xs text-center px-4">
                                                            Imagen no disponible o producto en Borrador
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Iconos de acción (Hover) */}
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                        <button className="p-2 bg-white rounded-full text-black shadow-md hover:scale-110 transition">
                                                            <Expand size={20} />
                                                        </button>
                                                        <button className="p-2 bg-white rounded-full text-black shadow-md hover:scale-110 transition">
                                                            <ShoppingCart size={20} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        
                                        <div className="mt-4 text-center">
                                            <p className="font-bold text-lg">{product.productName}</p>
                                            <p className="text-sm text-gray-500">${product.price}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;