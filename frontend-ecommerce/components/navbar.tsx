"use client"

import { ShoppingCart, Heart, User, Menu } from "lucide-react"; // Agregamos el icono Menu
import { useRouter } from "next/navigation";
import MenuList from "./Menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="flex items-center justify-between p-4 mx-auto border-b">
            <h1 className="text-3xl cursor-pointer font-bold" onClick={() => router.push("/")}>
                Coffee
            </h1>

            {/* MENÚ DESKTOP: Se esconde en móvil (hidden) y se ve en PC (sm:flex) */}
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>

            {/* MENÚ MÓVIL: Se ve en móvil (flex) y se esconde en PC (sm:hidden) */}
            <div className="flex sm:hidden">
                <ItemsMenuMobile/>
                {/* Opcional: Puedes poner un icono aquí: <Menu /> */}
            </div>

            {/* ICONOS DERECHA: Siempre visibles */}
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart 
                    strokeWidth={1} 
                    className="cursor-pointer hover:text-primary" 
                    onClick={() => router.push("/cart")} 
                />
                <Heart strokeWidth={1} className="cursor-pointer hover:text-primary" />
                <User strokeWidth={1} className="cursor-pointer hover:text-primary" />
                <ToggleTheme/>
            </div>
        </div>
    );
}

export default Navbar;