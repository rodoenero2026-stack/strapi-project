import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from '@/types/product';

interface UseLovedProductsType {
    lovedItems: ProductType[];
    addLovedItem: (data: ProductType) => void;
    removeLovedItem: (id: number | string) => void;
}

export const useLovedProducts = create<UseLovedProductsType>()(
    persist(
        (set, get) => ({
            lovedItems: [],
            
            addLovedItem: (data: ProductType) => {
                const currentItems = get().lovedItems;
                const existingItem = currentItems.find(
                    (item: ProductType) => String(item.id) === String(data.id)
                );

                if (existingItem) return;

                set({ lovedItems: [...currentItems, data] });
            },

            removeLovedItem: (id: number | string) => {
                set({
                    lovedItems: get().lovedItems.filter(
                        (item: ProductType) => String(item.id) !== String(id)
                    )
                });
            },
        }),
        {
            name: 'loved-products-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);