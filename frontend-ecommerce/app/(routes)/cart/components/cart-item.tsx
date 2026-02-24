"use client";

import { useCart } from "@/hooks/use-cart";
import { ProductType } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
    product: ProductType;
}

const CartItem = ({ product }: CartItemProps) => {
    const { removeItem } = useCart();
    const router = useRouter();

    return (
        <li className="flex py-6 border-b">
            <div 
                onClick={() => router.push(`/product/${product.slug}`)} 
                className="cursor-pointer"
            >
                <img 
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images?.[0]?.url}`} 
                    alt={product.productName} 
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                
                {/* 2A: TEXTOS Y BADGES */}
                <div>
                    <h2 className="text-lg font-bold dark:text-white">
                        {product.productName}
                    </h2>
                    <p className="font-bold dark:text-white">
                        {formatPrice(product.price)}
                    </p>
                    
                    <div className="flex items-center gap-3 mt-2">
                        {product.category && (
                            <p className="px-2 py-1 text-sm text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                                {product.category.categoryName}
                            </p>
                        )}
                        {product.origin && (
                            <p className="px-2 py-1 text-sm text-white bg-yellow-900 rounded-full w-fit">
                                {product.origin}
                            </p>
                        )}
                    </div>
                </div>
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