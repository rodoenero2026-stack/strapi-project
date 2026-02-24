import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/cafe-molido" className="block">GlossDior</Link>
                <Link href="/categories/cafe-grano" className="block">GlossCr</Link>
                <Link href="/categories/cafe-capsula" className="block">Glossdod</Link>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;