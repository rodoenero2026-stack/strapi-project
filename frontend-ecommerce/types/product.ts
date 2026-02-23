export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    price: number;
    origin: string;
    teste: string;      // Agregado: para los filtros de sabor
    active: boolean;    // Agregado: para saber si hay stock
    isFeatured: boolean; // Agregado: para la home
    images: {
        id: number;
        url: string;
    }[];
    category?: {        // Agregado: por si necesitas mostrar la categoría
        slug: string;
        categoryName: string;
    };
};