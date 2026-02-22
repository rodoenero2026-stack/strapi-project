import { useEffect, useState } from "react";

export function useGetCategories() {
    // Apuntamos a la ruta de categorías en Strapi
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                // Le agregamos el "no-store" para ganarle a la memoria caché de Next.js
                const res = await fetch(url, { cache: "no-store" });
                const json = await res.json();
                setResult(json.data);
                setLoading(false);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [url]);

    return { loading, result, error };
}