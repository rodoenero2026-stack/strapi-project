export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    price: number;
    origin: string;
    teste: string;
    images: {
        id: number;
        url: string;
    }[];
};