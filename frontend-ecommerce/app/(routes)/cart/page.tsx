"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import CartItem from "./components/cart-item"
import { useRouter } from "next/navigation"

const Page = () => {
    // Extraemos los items y la función para vaciar el carrito
    const { items, removeAll } = useCart()
    const router = useRouter()
    
    // Cálculo del precio total
    const prices = items.map((product) => product.price)
    const totalPrice = prices.reduce((total, price) => total + price, 0)

    const onCheckoutWhatsApp = () => {
        // 1. Configura tu número de teléfono aquí
        const phoneNumber = "5219611234567" 

        // 2. Formatear la lista de productos para el mensaje
        const productList = items.map(item => `• *${item.productName}* - ${formatPrice(item.price)}`).join('\n')
        
        // 3. Crear el mensaje codificado
        const message = encodeURIComponent(
            `👋 *¡Hola! Me gustaría realizar un pedido:*\n\n` +
            `${productList}\n\n` +
            `━━━━━━━━━━━━━━━\n` +
            `💰 *TOTAL A PAGAR: ${formatPrice(totalPrice)}*\n` +
            `━━━━━━━━━━━━━━━\n\n` +
            `¿Podrían confirmarme los métodos de pago y el tiempo de entrega? 😊`
        )

        // 4. Abrir WhatsApp en pestaña nueva
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')

        // 5. LIMPIAR EL CARRITO (Para que no queden los productos ahí después de pedir)
        removeAll()

        // 6. REDIRECCIONAR A LA PÁGINA DE ÉXITO
        router.push("/success")
    }

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Carrito de Compras</h1>
            <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-12">
                
                {/* COLUMNA IZQUIERDA: PRODUCTOS */}
                <div className="lg:col-span-7">
                    {items.length === 0 && (
                        <div className="p-10 border-2 border-dashed rounded-xl text-center">
                            <p className="text-gray-500 font-medium">Tu carrito está vacío</p>
                        </div>
                    )}
                    <ul className="divide-y divide-gray-200">
                        {items.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>

                {/* COLUMNA DERECHA: RESUMEN Y BOTÓN */}
                <div className="p-6 rounded-xl bg-slate-50 lg:col-span-5 h-fit dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <p className="mb-4 text-xl font-bold">Resumen del Pedido</p>
                    <Separator />
                    
                    <div className="flex justify-between gap-5 my-6 text-lg">
                        <p className="text-slate-600 dark:text-slate-400">Total del Carrito</p>
                        <p className="font-extrabold text-2xl text-black dark:text-white">
                            {formatPrice(totalPrice)}
                        </p>
                    </div>
                    
                    <Button 
                        className="w-full py-7 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg border-none" 
                        onClick={onCheckoutWhatsApp}
                        disabled={items.length === 0}
                    >
                        {/* ICONO SVG DE WHATSAPP */}
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Comprar por WhatsApp
                    </Button>

                    <p className="mt-4 text-[10px] text-center text-slate-400 uppercase tracking-widest">
                        Pago 100% seguro vía chat
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page