import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-4 p-4">
                <Link href="#" className="block hover:text-pink-600 transition">Conócenos</Link>
                <Link href="#" className="block hover:text-pink-600 transition">Categorías</Link>
                <Link href="/blog" className="block hover:text-pink-600 transition">Blog</Link>
                <Link href="/faq" className="block hover:text-pink-600 transition">FAQ</Link>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;