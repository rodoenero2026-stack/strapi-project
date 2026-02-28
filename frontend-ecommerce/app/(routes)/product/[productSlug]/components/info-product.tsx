"use client"
import { useState, useEffect } from "react";
import { ProductType } from "@/types/product"; 
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"; 
import { Heart } from "lucide-react"; 
import { useLovedProducts } from "@/hooks/use-loved-products"; 

// 1. IMPORTAMOS TU COMPONENTE
import ProductTasteOrigin from "@/components/shared/product-taste-origin";

interface InfoProductProps {
    product: ProductType;
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props;
    const { addLoveItem, lovedItems, removeLovedItem } = useLovedProducts();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const isLoved = lovedItems.some(
        (item: ProductType) => String(item.id) === String(product.id)
    );

    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl font-bold">{product.productName}</h1>
                
                {/* 2. REEMPLAZAMOS EL CÓDIGO VIEJO POR TU COMPONENTE LIMPIO */}
                <ProductTasteOrigin 
                    taste={product.teste || ""} 
                    origin={product.origin || ""} 
                />
            </div>

            <Separator className="my-4" />
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
            <Separator className="my-4" />

            <p className="my-4 text-2xl text-black dark:text-white">
                ${product.price}.00 MXN
            </p>
            
            <div className="flex items-center gap-5 mt-6">
                <Button className="w-full bg-black text-white rounded-full">
                    Comprar
                </Button>
                
                <Heart 
                    width={30} 
                    strokeWidth={1} 
                    className={`transition duration-300 cursor-pointer shrink-0 active:scale-90
                        ${isLoved 
                            ? 'fill-black text-black dark:fill-white dark:text-white' 
                            : 'fill-none text-gray-500'
                        } 
                        hover:fill-black hover:text-black`} 
                    onClick={(e) => {
                        e.stopPropagation()
                        if (isLoved) {
                            removeLovedItem(product.id);
                        } else {
                            addLoveItem(product);
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default InfoProduct;