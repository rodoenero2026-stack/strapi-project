"use client" // Importante para que funcione el router

import { useRouter } from "next/navigation"
import { ProductType } from "@/types/product"

interface ProductImageMiniatureProps {
    product: ProductType
}

const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
    const { product } = props
    const router = useRouter()

    return (
        <div 
            onClick={() => router.push(`/product/${product.slug}`)} 
            className="cursor-pointer group relative"
        >
            <img 
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images?.[0]?.url}`} 
                alt={product.productName} 
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover transition duration-300 group-hover:opacity-80 group-hover:scale-105" 
            />
            {/* Overlay sutil al pasar el mouse */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition rounded-md" />
        </div>
    )
}

export default ProductImageMiniature