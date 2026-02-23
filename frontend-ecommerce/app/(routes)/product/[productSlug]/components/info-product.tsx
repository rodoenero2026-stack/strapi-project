import { ProductType } from "@/types/product"; 
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"; 
import { Heart } from "lucide-react"; 

interface InfoProductProps {
    product: ProductType;
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props;

    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                {/* Título y Badges */}
                <h1 className="text-2xl font-bold">{product.productName}</h1>

                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                        {product.teste}
                    </p>
                    <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                        {product.origin}
                    </p>
                </div>
            </div>

            <Separator className="my-4" />

            <p className="text-gray-700 leading-relaxed">
                {product.description}
            </p>

            <Separator className="my-4" />

            {/* Precio */}
            <p className="my-4 text-2xl text-black dark:text-white">
                ${product.price}.00 MXN
            </p>
            
            {/* CONTENEDOR FLEX: Botón + Corazón */}
            <div className="flex items-center gap-5 mt-6">
                <Button 
                    className="w-full bg-black text-white rounded-full dark:bg-white dark:text-black"
                    onClick={() => console.log("Añadir al carrito")}
                >
                     Comprar
                </Button>
                
                <Heart 
                    width={30} 
                    strokeWidth={1} 
                    className="transition duration-300 cursor-pointer hover:fill-black dark:hover:fill-white shrink-0" 
                    onClick={() => console.log("Añadir a favoritos")}
                />
            </div>
        </div>
    );
};

export default InfoProduct;