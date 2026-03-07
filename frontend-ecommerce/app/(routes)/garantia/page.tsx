import { ShieldCheck, Truck, RefreshCcw, CheckCircle } from "lucide-react";

export default function GarantiaPage() {
    return (
        <div className="max-w-5xl mx-auto p-6 md:p-12 mb-10">
            <header className="text-center mb-12">
                <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10 text-pink-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Nuestra <span className="text-pink-600">Garantía</span>
                </h1>
                <p className="text-gray-500 text-lg">Tu tranquilidad y satisfacción son lo más importante para nosotros.</p>
            </header>

            <div className="space-y-8">
                {/* Punto 1 */}
                <div className="flex gap-6 items-start bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <CheckCircle className="w-8 h-8 text-pink-500 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Garantía de Calidad 100%</h3>
                        <p className="text-gray-600">Todos nuestros productos pasan por un riguroso control de calidad. Si recibes un producto dañado de fábrica o en mal estado, te lo reponemos sin costo adicional o te devolvemos tu dinero.</p>
                    </div>
                </div>

                {/* Punto 2 */}
                <div className="flex gap-6 items-start bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <RefreshCcw className="w-8 h-8 text-pink-500 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Devoluciones Fáciles</h3>
                        <p className="text-gray-600">Tienes hasta 15 días naturales desde que recibes tu paquete para solicitar una devolución. El producto debe estar sellado, sin uso y en su empaque original por cuestiones de higiene.</p>
                    </div>
                </div>

                {/* Punto 3 */}
                <div className="flex gap-6 items-start bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <Truck className="w-8 h-8 text-pink-500 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Envíos Seguros</h3>
                        <p className="text-gray-600">Trabajamos con las mejores paqueterías. Si tu paquete se extravía durante el trayecto, nosotros nos hacemos responsables y te enviamos uno nuevo inmediatamente.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}