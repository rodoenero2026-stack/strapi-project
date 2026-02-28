"use client";
/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";

type ProductCardProps = {
    product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
    const { product } = props;

    return (
        <Link href={`/product/${product.slug}`} 
            className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md block w-full">
            
            {/* Etiquetas Superiores (Sabor y Origen) */}
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                {product.teste && (
                    <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                        {product.teste}
                    </p>
                )}
                {product.origin && (
                    <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                        {product.origin}
                    </p>
                )}
            </div>

            {/* Carrusel de Imágenes */}
            <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                    {product.images && product.images.map((image: any) => (
                        <CarouselItem key={image.id}>
                            
                            {/* CAJA AISLADA: Aquí aseguramos que el centrado sea perfecto */}
                            <div className="relative group w-full h-full">
                                <img 
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} 
                                    alt={product.productName} 
                                    className="rounded-xl w-full h-[200px] object-cover"
                                />
                            
                                
                                <div className="absolute inset-x-0 bottom-5 flex justify-center gap-x-6 px-4 transition duration-300 opacity-0 group-hover:opacity-100">
                                    
                                    {/* ESCUDO INVISIBLE: Atrapa el clic y evita el error de TypeScript */}
                                    <div onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                                        <IconButton 
                                            onClick={() => console.log("expand")} 
                                            icon={<Expand size={20} className="text-gray-600" />} 
                                        />
                                    </div>


                                    <div onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                                        <IconButton 
                                            onClick={() => console.log("cart")} 
                                            icon={<ShoppingCart size={20} className="text-gray-600" />} 
                                        />
                                    </div>

                                </div>
                            </div>

                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Información Inferior */}
            <div className="flex justify-between gap-4 mt-2 px-2">
                <h3 className="text-lg font-bold capitalize">{product.productName}</h3>
                <p className="font-bold text-black dark:text-white">
                    {formatPrice(product.price)}
                </p>
            </div>
        </Link>
    );
};

export default ProductCard;