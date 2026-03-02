"use client"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const SuccessPage = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <CheckCircle size={80} className="text-green-500 mb-6" />
            <h1 className="text-3xl font-bold mb-2">¡Pedido enviado con éxito!</h1>
            <p className="text-slate-500 mb-8 max-w-md">
                Tu mensaje ha sido generado. Por favor, asegúrate de enviarlo en WhatsApp para que podamos procesar tu pago y envío.
            </p>
            <Button 
                onClick={() => router.push("/")}
                className="rounded-full px-8 py-6 text-lg"
            >
                Volver a la tienda
            </Button>
        </div>
    )
}

export default SuccessPage