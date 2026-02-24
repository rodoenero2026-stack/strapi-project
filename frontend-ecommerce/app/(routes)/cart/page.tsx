"use client"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { Button } from "@/components/ui/button"
import CartItem from "./components/cart-item"
export default function Page() {
    const { items } = useCart()
    const totalPrice = items.reduce((total, item) => total + item.price, 0)

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Carro de compras</h1>
            
            <div className="grid lg:grid-cols-12 lg:items-start gap-x-12">
                
                <div className="lg:col-span-7">
                    {items.length === 0 && (
                        <p className="text-gray-500">No hay productos en el carrito</p>
                    )}
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
                
                <div className="lg:col-span-5">
                    <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-900 shadow-sm border">
                        <p className="mb-3 text-lg font-semibold text-black dark:text-white">
                            Suma de la orden
                        </p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p className="text-gray-600 dark:text-gray-400 font-medium">Total de la orden</p>
                            <p className="font-bold text-black dark:text-white text-xl">
                                {formatPrice(totalPrice)}
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6">
                            <Button 
                                className="w-full py-6 text-lg font-bold" 
                                onClick={() => console.log("Comprando...")}
                            >
                                Comprar
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}