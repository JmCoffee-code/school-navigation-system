import { create } from "zustand";

import { Building } from "@/types/building";

interface CampusStore {

   // =========================
   // Building
   // =========================

   selectedBuilding: Building | null;

   setSelectedBuilding: (
      building: Building | null
   ) => void;

   // =========================
   // Search
   // =========================

   searchQuery: string;

   setSearchQuery: (
      query: string
   ) => void;

   // =========================
   // Category
   // =========================

   selectedCategory: string;

   setSelectedCategory: (
      category: string
   ) => void;

   // =========================
   // Favorites
   // =========================

   favorites: number[];

   toggleFavorite: (
      id: number
   ) => void;

   clearFavorites: () => void;

}

export const useCampusStore =
create<CampusStore>((set) => ({

   // =========================
   // Initial State
   // =========================

   selectedBuilding: null,

   searchQuery: "",

   selectedCategory: "All",

   favorites: [],

   // =========================
   // Actions
   // =========================

   setSelectedBuilding: (building) =>

      set({

         selectedBuilding: building,

      }),

   setSearchQuery: (query) =>

      set({

         searchQuery: query,

      }),

   setSelectedCategory: (category) =>

      set({

         selectedCategory: category,

      }),

   toggleFavorite: (id) =>

      set((state) => ({

         favorites: state.favorites.includes(id)

            ? state.favorites.filter(
                 (favorite) =>
                    favorite !== id
              )

            : [...state.favorites, id],

      })),

   clearFavorites: () =>

      set({

         favorites: [],

      }),

}));