"use client"

import { useState } from "react" // Importamos useState para manejar el filtro
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { ProductType } from "@/types/product"

import FiltersControlsCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/skeletonSchema"
import ProductCard from "./components/product-cart"

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug as string)
    
    // Estado para el filtro de origen (como en el tutorial)
    const [filterOrigin, setFilterOrigin] = useState("")

    // Lógica para filtrar los productos según el origen seleccionado
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
                
              
                <aside className="w-full md:w-64 shrink-0">
                   
                    <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
                </aside>
                
                
                <main className="flex-1 w-full">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {loading && (
                            <SkeletonSchema grid={3} />
                        )}
                        
                        {filteredProducts && filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))}

                        {/* Si después de filtrar no hay nada, avisamos al usuario */}
                        {filteredProducts && filteredProducts.length === 0 && (
                            <p className="col-span-full text-center text-gray-500 mt-10">
                                No hay productos con el origen: {filterOrigin}
                            </p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}