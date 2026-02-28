"use client"

import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { ProductType } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import ProductTasteOrigin from "@/components/shared/product-taste-origin"; 
import ProductImageMiniature from "@/components/shared/product-image-miniature";

interface LovedItemProductProps {
    product: ProductType;
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props;
    const { removeLovedItem } = useLovedProducts();
    const { addItem } = useCart();

    const onAddToCart = () => {
        addItem(product);
    };

    return (
        <li className="flex py-6 border-b">
            
            {/* 1. MINIATURA REFACTORIZADA (Controla la imagen y el link al producto) */}
            <ProductImageMiniature product={product} />
            
            {/* CONTENIDO Y BOTONES */}
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

                    {/* BOTÓN DE CARRITO */}
                    <div className="mt-4">
                        <Button onClick={onAddToCart} className="flex items-center gap-2 rounded-full">
                            <ShoppingCart size={16} />
                            Añadir al carrito
                        </Button>
                    </div>
                </div>

                {/* BOTÓN X PARA ELIMINAR DE FAVORITOS */}
                <div>
                    <button 
                        onClick={() => removeLovedItem(product.id)}
                        className="flex items-center justify-center p-1 transition bg-white border rounded-full shadow-md hover:scale-110"
                    >
                        <X size={20} className="text-gray-600" />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default LovedItemProduct;