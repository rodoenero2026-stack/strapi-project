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
                <Link href="/categories" className="block">GlossDior</Link>
                <Link href="/categories" className="block">GlossCr</Link>
                <Link href="/categories" className="block">Glossdod</Link>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;