"use client"
import { useLovedProducts } from "@/hooks/use-loved-products"

export default function Page() {
    const { lovedItems } = useLovedProducts()

    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">
                Productos que te gustan
            </h1>
            
            <div>
                <div>
                    {/* Condición corregida */}
                    {lovedItems.length === 0 && (
                        <p>No hay productos en la sección de Me gusta</p>
                    )}
                    
                    <ul>
                        {/* Map corregido y sin el .attributes */}
                        {lovedItems.map((item) => (
                            <p key={item.id}>{item.productName}</p>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}