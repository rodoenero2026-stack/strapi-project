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
import IconButton from "./icon-button"; 
import { useRouter } from "next/navigation"; 

const FeaturedProducts = () => {
    const { result, loading }: ResponseType = useGetFeaturedProducts();
    const router = useRouter(); 

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
                            const id = product.id;
                            const imageUrl = product.images?.[0]?.url;
                            const slug = product.slug; 

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
                                                        <IconButton 
                                                            onClick={() => router.push(`product/${slug}`)} 
                                                            icon={<Expand size={20} />} 
                                                            className="text-gray-600"
                                                        />
                                                        <IconButton 
                                                            onClick={() => console.log("Agregar al carrito")} 
                                                            icon={<ShoppingCart size={20} />} 
                                                            className="text-gray-600"
                                                        />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            
                                            {/* Diseño de cápsulas (Badges) actualizado para Strapi v5 */}
                                            <div className="flex justify-between gap-4 px-8 pb-4">
                                                <h3 className="text-lg font-bold">{product.productName}</h3>
                                                <div className="flex items-center justify-between gap-3 text-sm">
                                                    
                                                    {/* Cápsula de Categoría (Negra) */}
                                                    {product.category && (
                                                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                                                            {product.category.categoryName}
                                                        </p>
                                                    )}
                                                    
                                                    {/* Cápsula de Origen (Café) */}
                                                    {product.origin && (
                                                        <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
                                                            {product.origin}
                                                        </p>
                                                    )}
                                                    
                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })
                    )}
                </CarouselContent>
                
                {/* ¡AQUÍ ESTÁ LA CORRECCIÓN DE LAS FLECHAS! */}
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
                
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;