"use client";

import { useCart } from "@/hooks/use-cart";
import { ProductType } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import { X } from "lucide-react";

import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import ProductImageMiniature from "@/components/shared/product-image-miniature";

interface CartItemProps {
    product: ProductType;
}

const CartItem = ({ product }: CartItemProps) => {
    const { removeItem } = useCart();

    return (
        <li className="flex py-6 border-b">
            {/* 1. IMAGEN REFACTORIZADA (Ya incluye el click al slug) */}
            <ProductImageMiniature product={product} />
            
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold dark:text-white">
                        {product.productName}
                    </h2>
                    
                    <p className="font-bold dark:text-white mb-2">
                        {formatPrice(product.price)}
                    </p>
                    
                    {/* 2. ETIQUETAS REFACTORIZADAS */}
                    <ProductTasteOrigin 
                        taste={product.category?.categoryName || ""} 
                        origin={product.origin || ""} 
                    />
                </div>
                
                {/* BOTÓN ELIMINAR */}
                <div>
                    <button 
                        onClick={() => removeItem(product.id)}
                        className="flex items-center justify-center p-1 transition bg-white border rounded-full shadow-md hover:scale-110"
                    >
                        <X size={20} className="text-gray-600" />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;