import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumérgete en una experiencia única</p>
                <h4 className="mt-2 text-5xl font-extrabold upperce">Café Exquisito</h4>
                <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[400px] lg:h-[800px] bg-[url('/cafe.png')] bg-center bg-no-repeat bg-contain mt-5 w-full" />
        </>
    );
}

export default BannerProduct;