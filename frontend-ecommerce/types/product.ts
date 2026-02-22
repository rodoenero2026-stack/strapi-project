export type ProductType = {
    id: number;
    documentId?: string;
    productName: string;
    slug?: string;
    description?: string;
    active?: boolean;
    price: number;
    origin?: string;
    taste?: string;
    isFatured?: boolean;
    images?: any;
    category?: any;
};