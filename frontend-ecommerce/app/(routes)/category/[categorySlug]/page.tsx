"use client"

import { useState } from "react"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { ProductType } from "@/types/product"

// Componentes
import FiltersControlsCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/skeletonSchema"
import ProductCard from "./components/product-cart"

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug as string)
    
    // Estado para el filtro de origen
    const [filterOrigin, setFilterOrigin] = useState("")

    // Lógica para filtrar los productos
    const filteredProducts = result !== null && !loading && (
        filterOrigin === "" 
            ? result 
            : result.filter((product: ProductType) => product.origin === filterOrigin)
    )

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium capitalize">
                    Café {result[0].category.categoryName}
                </h1>
            )}
            <Separator className="my-4" />

            <div className="flex flex-col md:flex-row gap-8 mt-8">
                
                {/* Barra lateral de filtros */}
                <aside className="w-full md:w-64 shrink-0">
                    <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
                </aside>
                
                {/* Cuadrícula de productos */}
                <main className="flex-1 w-full">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {loading && (
                            <SkeletonSchema grid={3} />
                        )}
                        
                        {filteredProducts && filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))}

                        {/* Mensaje de filtro vacío (Estilo igual al tutorial) */}
                        {filteredProducts && filteredProducts.length === 0 && !loading && (
                            <div className="col-span-full mt-10 text-center">
                                <p className="text-lg text-gray-500">No hay productos con este filtro.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}