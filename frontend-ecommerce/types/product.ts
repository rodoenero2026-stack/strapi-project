export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    price: number;
    origin: string;
    teste: string;      
    active: boolean;    
    isFeatured: boolean; 
    images: {
        id: number;
        url: string;
    }[];
    category?: {        
        slug: string;
        categoryName: string;
    };
};