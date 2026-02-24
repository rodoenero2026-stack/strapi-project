import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from '@/types/product';
import { toast } from 'sonner'; 

interface CartStore {
    items: ProductType[];
    addItem: (data: ProductType) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
}

export const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (data: ProductType) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => String(item.id) === String(data.id));

                if (existingItem) {
                    return toast.error("El producto ya está en el carrito");
                }

                set({ items: [...get().items, data] });
                toast.success("Producto añadido al carrito ☕");
            },
            removeItem: (id: number) => {
                set({ items: get().items.filter((item) => String(item.id) !== String(id)) });
                toast.success("Producto eliminado");
            },
            removeAll: () => set({ items: [] }),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);