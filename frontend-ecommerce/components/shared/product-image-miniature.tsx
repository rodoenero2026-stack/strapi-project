import { ProductType } from "@/types/product";

interface ProductImageMiniatureProps {
    product: ProductType;
}

const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
    const { product } = props;

    return (
        <div className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32">
            <img 
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images?.[0]?.url}`} 
                alt={product.productName} 
                className="object-cover w-full h-full"
            />
        </div>
    );
}

export default ProductImageMiniature;