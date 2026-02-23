"use client"

import { useParams } from "next/navigation"
import { useGetProductBySlug } from "@/api/getProductBySlug"
import SkeletonProduct from "./components/skeleton-product"
import CarouselProduct from "./components/carousel-product"
import ProductInfo from "./components/info-product" 
export default function Page() {
    const params = useParams()
    const { productSlug } = params
    const { result, loading } = useGetProductBySlug(productSlug as string)

    if (loading) return <SkeletonProduct />

    if (result !== null && result.length === 0) {
        return <div className="text-center mt-20 text-xl">No encontramos este producto.</div>
    }

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result && result.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* COLUMNA IZQUIERDA: CARRUSEL */}
                    <div>
                        <CarouselProduct images={result[0].images} />
                    </div>

                    {/* COLUMNA DERECHA: INFO DEL PRODUCTO */}
                    <div>
                        <ProductInfo product={result[0]} />
                    </div>
                </div>
            )}
        </div>
    )
}