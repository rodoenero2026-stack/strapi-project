import { Star, Quote } from "lucide-react";

export default function TestimoniosPage() {
    // Array con datos de prueba (Aquí después pondrás los reales)
    const testimonios = [
        {
            id: 1,
            name: "Mariana R.",
            product: "Gloss Cherry Oil",
            review: "¡Estoy enamorada! La textura no es nada pegajosa y deja un brillo espectacular. Además, el pedido me llegó súper rápido a Monterrey. Definitivamente vuelvo a comprar.",
            rating: 5
        },
        {
            id: 2,
            name: "Sofía T.",
            product: "Kit Bridal Exclusivo",
            review: "Lo compré para mi boda y el maquillaje me duró intacto toda la noche. Los tonos de los labiales son hermosos y muy elegantes. Excelente calidad.",
            rating: 5
        },
        {
            id: 3,
            name: "Valeria G.",
            product: "Base Alta Cobertura",
            review: "Tengo piel sensible y esta base me ha caído de maravilla. Cubre súper bien las imperfecciones pero se siente súper ligera, como si no trajera nada.",
            rating: 5
        },
        {
            id: 4,
            name: "Ana P.",
            product: "Labial Matte Premium",
            review: "No reseca los labios para nada, que era mi mayor miedo con los labiales matte. El color es exacto al de la foto. 10/10 a la atención al cliente.",
            rating: 5
        },
        {
            id: 5,
            name: "Karla M.",
            product: "Cremas Skincare",
            review: "Llevo dos semanas usando la crema hidratante y mi piel dio un cambio radical. Súper suavecita y glowy. El empaque además está precioso.",
            rating: 5
        },
        {
            id: 6,
            name: "Daniela C.",
            product: "Kit Influencer",
            review: "Me encantó todo lo que trae el kit. Súper completo y pigmenta padrísimo. Ya se lo recomendé a todas mis amigas. ¡Gracias LabialRod!",
            rating: 5
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 md:p-12 mb-10">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                    Lo que dicen <span className="text-pink-600">Nuestras Clientas</span>
                </h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Tu satisfacción es nuestro mayor logro. Descubre por qué cientos de chicas ya confían en la magia de LabialRod para su día a día.
                </p>
            </header>

            {/* Grid de testimonios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonios.map((item) => (
                    <div key={item.id} className="bg-white border border-pink-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
                        
                        {/* Icono de comillas decorativo */}
                        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote size={40} className="text-pink-600" />
                        </div>

                        {/* Estrellitas */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(item.rating)].map((_, i) => (
                                <Star key={i} size={18} className="fill-pink-500 text-pink-500" />
                            ))}
                        </div>

                        {/* Texto de la reseña */}
                        <p className="text-gray-600 leading-relaxed mb-6 relative z-10 italic">
                            "{item.review}"
                        </p>

                        {/* Información del cliente */}
                        <div className="border-t border-gray-100 pt-4 mt-auto">
                            <p className="font-bold text-gray-900">{item.name}</p>
                            <p className="text-sm text-pink-500 font-medium">Compró: {item.product}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to action (Invitación a comprar) */}
            <div className="mt-20 bg-pink-50 rounded-3xl p-10 text-center border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Lista para ser tu mejor versión?</h3>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    Prueba nuestros productos y cuéntanos tu experiencia. ¡Nos encantaría que tu testimonio sea el próximo en aparecer aquí!
                </p>
            </div>
        </div>
    );
}