import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const dataFooter = [
    {
        id: 1,
        name: "Sobre nosotros",
        link: "#",
    },
    {
        id: 2,
        name: "Productos",
        link: "/categories/cafe-molido",
    },
    {
        id: 3,
        name: "Mi cuenta",
        link: "/profile",
    },
    {
        id: 4,
        name: "Política de privacidad",
        link: "#",
    },
];

const Footer = () => {
    return (
        <footer className="mt-4 border-t">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="mb-4 sm:mb-0">
                        <span className="font-bold">
                            Coffee
                        </span>
                        {" "}E-commerce
                    </p>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        {dataFooter.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link} className="hover:underline me-4 md:me-6">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <Separator className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                
                <span className="block text-sm text-gray-500 sm:text-center">
                    © 2026 Coffee Store. Todos los derechos.
                </span>
            </div>
        </footer>
    );
};

export default Footer;