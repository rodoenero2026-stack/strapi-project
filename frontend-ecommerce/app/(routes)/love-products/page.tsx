"use client"
import { useLovedProducts } from "@/hooks/use-loved-products"
// Asegúrate de que esta ruta coincida con el nombre de tu archivo exacto
import LoveItemProduct from "./components/loved-item-product" 

export default function Page() {
    const { lovedItems } = useLovedProducts()

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Productos que te gustan</h1>
            
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div className="col-span-2">
                    {/* Mensaje si no hay nada guardado */}
                    {lovedItems.length === 0 && (
                        <p className="text-gray-500">No hay productos en la sección de Me gusta</p>
                    )}
                    
                    {/* Aquí mandamos llamar a tu componente visual por cada producto */}
                    <ul>
                        {lovedItems.map((item) => (
                            <LoveItemProduct key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}