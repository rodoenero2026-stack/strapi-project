/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetCategories } from "@/api/getProducts"; 
import Link from "next/link";
import { ResponseType } from "@/types/response";

const ChooseCategory = () => {
    const { result, loading }: ResponseType = useGetCategories();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl font-bold sm:pb-8 text-center sm:text-left">
                Elige tu categoría favorita
            </h3>

            <div className="grid gap-5 sm:grid-cols-3">
                {!loading && result !== undefined && (
                    result.map((category: any) => (
                        <Link 
                            key={category.id} 
                            href={`/category/${category.slug}`} 
                            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg group"
                        >
                            {/* CORRECCIÓN: Usamos 'meinimage' que es como aparece en tu Strapi */}
                            {category.meinimage?.url ? (
                                <img 
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.meinimage.url}`} 
                                    alt={category.categoryName} 
                                    className="max-w-[270px] transition duration-300 ease-in-out hover:scale-110 rounded-lg" 
                                />
                            ) : (
                                <div className="w-[270px] h-[200px] bg-gray-800 flex items-center justify-center rounded-lg border border-dashed border-gray-600">
                                    <span className="text-gray-400 text-xs">Sin imagen (revisa 'meinimage')</span>
                                </div>
                            )}
                            
                            {/* Nombre de la categoría (opcional, se ve Pro) */}
                            <p className="absolute bottom-2 left-2 text-white font-bold bg-black/50 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                {category.categoryName}
                            </p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default ChooseCategory;