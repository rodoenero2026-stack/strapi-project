export default function FAQPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-12 mb-10">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-extrabold mb-4">Preguntas <span className="text-pink-600">Frecuentes</span></h1>
                <p className="text-gray-500">Todo lo que necesitas saber sobre LabialRod y tus envíos.</p>
            </header>

            <div className="space-y-6">
                {/* Pregunta 1 */}
                <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
                    <h3 className="text-xl font-bold text-gray-800">💄 ¿Hacen envíos a todo México?</h3>
                    <p className="text-gray-600 mt-2">
                        ¡Sí! Enviamos a toda la República Mexicana. Nuestros envíos estándar tardan entre 3 a 5 días hábiles en llegar a la puerta de tu casa.
                    </p>
                </div>

                {/* Pregunta 2 */}
                <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
                    <h3 className="text-xl font-bold text-gray-800">🐰 ¿Sus productos son libres de crueldad animal?</h3>
                    <p className="text-gray-600 mt-2">
                        Por supuesto. En LabialRod amamos a los animales, por lo que garantizamos que todos nuestros productos son 100% cruelty-free.
                    </p>
                </div>

                {/* Pregunta 3 */}
                <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
                    <h3 className="text-xl font-bold text-gray-800">📦 ¿Aceptan devoluciones?</h3>
                    <p className="text-gray-600 mt-2">
                        Tienes hasta 15 días después de recibir tu paquete para solicitar una devolución. Por higiene, el producto debe estar completamente sellado y en su empaque original.
                    </p>
                </div>

                {/* Pregunta 4 */}
                <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
                    <h3 className="text-xl font-bold text-gray-800">💳 ¿Qué métodos de pago aceptan?</h3>
                    <p className="text-gray-600 mt-2">
                        Aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo a través de tiendas de conveniencia.
                    </p>
                </div>
            </div>
        </div>
    );
}