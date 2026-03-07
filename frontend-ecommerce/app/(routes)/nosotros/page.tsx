import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export default function NosotrosPage() {
    return (
        <div className="max-w-5xl mx-auto p-6 md:p-12 mb-10">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Nuestra <span className="text-pink-600">Historia</span>
                </h1>
                <p className="text-gray-500 text-lg">Conoce el corazón y el taller detrás de LabialRod.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                <div className="bg-pink-50 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center shadow-sm">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Cómo nació LabialRod?</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                        Todo comenzó en nuestro pequeño taller, con la visión de crear productos de belleza que no solo resalten tu estilo, sino que también te hagan sentir imparable todos los días.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Cada labial, cada gloss y cada fórmula que sale de nuestras manos está hecha con pasión, dedicación y los más altos estándares. No somos solo una tienda, somos un equipo comprometido con tu belleza y confianza.
                    </p>
                </div>
                <div className="rounded-3xl overflow-hidden h-full min-h-[350px] bg-gray-200 relative shadow-md group">
                    {/* Imagen de fondo (puedes cambiar esta URL después por una foto real de tu taller o productos) */}
                    <img
                        src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop"
                        alt="Taller de LabialRod"
                        className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center mt-10">
                <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Pasión</h3>
                    <p className="text-gray-500">Amamos lo que hacemos y eso se refleja en cada detalle, color y textura de nuestros cosméticos.</p>
                </div>
                
                <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Sparkles className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Calidad</h3>
                    <p className="text-gray-500">Seleccionamos ingredientes de primera para cuidar tu piel y garantizarte el mejor acabado.</p>
                </div>

                <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Compromiso</h3>
                    <p className="text-gray-500">Diseñamos pensando en ti, con fórmulas responsables y dedicación absoluta al cliente.</p>
                </div>
            </div>
        </div>
    );
}