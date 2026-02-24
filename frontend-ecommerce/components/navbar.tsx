"use client"

import { ShoppingCart, Heart, User, BaggageClaim } from "lucide-react"; 
import { useRouter } from "next/navigation";
import MenuList from "./Menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

const Navbar = () => {
    const router = useRouter();
    const cart = useCart();
    const {lovedItems} = useLovedProducts()

    return (
        <div className="flex items-center justify-between p-4 mx-auto border-b max-w-7xl">
            <h1 className="text-3xl cursor-pointer font-bold" onClick={() => router.push("/")}>
                LabialRod
            </h1>

            {/* MENÚ DESKTOP */}
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>

            {/* MENÚ MÓVIL */}
            <div className="flex sm:hidden">
                <ItemsMenuMobile/>
            </div>

            {/* ICONOS DERECHA: sm:gap-8 para que respiren en PC */}
            <div className="flex items-center justify-between gap-3 sm:gap-8">
                {cart.items.length === 0 ? (
                    <ShoppingCart 
                        strokeWidth="1"
                        className="cursor-pointer"
                        onClick={() => router.push("/cart")}
                    />
                ) : (
                    <div className="flex gap-1 cursor-pointer" onClick={() => router.push("/cart")}>
                        <BaggageClaim strokeWidth={1} />
                        <span className="font-bold">{cart.items.length}</span>
                    </div>
                )}


                
                <Heart 
    strokeWidth={1} 
    className={`cursor-pointer ${lovedItems.length > 0 ? 'fill-black dark:fill-white' : ''}`}
    onClick={() => router.push("/love-products")} 
/>
                <User strokeWidth={1} className="cursor-pointer hover:text-primary" />
                <ToggleTheme/>
            </div>
        </div>
    );
}

export default Navbar;