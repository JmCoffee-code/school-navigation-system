import {
   Search,
   LocateFixed,
   Route,
   Heart,
   Building2,
   GraduationCap,
   Trophy,
   Car,
} from "lucide-react";

import BuildingList from "./BuildingList";
import { Building } from "@/types/building";

interface CampusExplorerProps {
   buildings: Building[];
   selectedBuilding: Building | null;
   onSelectBuilding: (building: Building) => void;
   selectedCategory: string;
   setSelectedCategory: (category: string) => void;
   favorites: number[];
   toggleFavorite: (id: number) => void;
   searchQuery: string;
   setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function CampusExplorer({
   buildings,
   selectedBuilding,
   onSelectBuilding,
   selectedCategory,
   setSelectedCategory,
   favorites,
   toggleFavorite,
   searchQuery,
   setSearchQuery,
}: CampusExplorerProps) {

   const categoryCounts = {
      All: buildings.length,
      Academic: buildings.filter(
         (b) => b.category === "Academic"
      ).length,
      Facilities: buildings.filter(
         (b) => b.category === "Facilities"
      ).length,
      Sports: buildings.filter(
         (b) => b.category === "Sports"
      ).length,
      Parking: buildings.filter(
         (b) => b.category === "Parking"
      ).length,
   };

   const categories = [
      {
         label: "All",
         icon: <Building2 size={16} />,
      },
      {
         label: "Academic",
         icon: <GraduationCap size={16} />,
      },
      {
         label: "Facilities",
         icon: <Building2 size={16} />,
      },
      {
         label: "Sports",
         icon: <Trophy size={16} />,
      },
      {
         label: "Parking",
         icon: <Car size={16} />,
      },
   ];

   return (

      <aside
         className="
            flex
            w-80
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-lg
         "
      >

         {/* Header */}

         <div className="border-b border-slate-200 p-6">

            <h2 className="text-2xl font-bold">

               Campus Explorer

            </h2>

            <p className="mt-1 text-sm text-slate-500">

               Discover every building.

            </p>

         </div>

         {/* Search */}

         <div className="border-b border-slate-200 p-5">

            <div className="relative">

               <Search
                  size={18}
                  className="
                     absolute
                     left-4
                     top-1/2
                     -translate-y-1/2
                     text-slate-400
                  "
               />

               <input
                  value={searchQuery}
                  onChange={(e) =>
                     setSearchQuery(e.target.value)
                  }
                  placeholder="Search buildings..."
                  className="
                     w-full
                     rounded-2xl
                     border
                     border-slate-300
                     bg-slate-50
                     py-3
                     pl-11
                     pr-4
                     outline-none
                     focus:border-green-600
                  "
               />

            </div>

         </div>

         {/* Quick Actions */}

         <div className="border-b border-slate-200 p-5">

            <ActionButton
               icon={<LocateFixed size={18} />}
               label="Current Location"
            />

            <ActionButton
               icon={<Route size={18} />}
               label="Navigate"
            />

            <ActionButton
               icon={<Heart size={18} />}
               label="Favorites"
            />

         </div>

         {/* Categories */}

         <div className="border-b border-slate-200 p-5">

            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">

               Categories

            </h3>

            <div className="space-y-2">

               {categories.map((category) => (

                  <button

                     key={category.label}

                     onClick={() =>
                        setSelectedCategory(category.label)
                     }

                     className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        transition

                        ${
                           selectedCategory === category.label
                              ? "bg-green-600 text-white"
                              : "hover:bg-slate-100"
                        }
                     `}

                  >

                     <div className="flex items-center gap-3">

                        {category.icon}

                        {category.label}

                     </div>

                     <span
                        className="
                           rounded-full
                           bg-white/20
                           px-2
                           py-1
                           text-xs
                           font-bold
                        "
                     >

                        {
                           categoryCounts[
                              category.label as keyof typeof categoryCounts
                           ]
                        }

                     </span>

                  </button>

               ))}

            </div>

         </div>

         {/* Buildings */}

         <div className="flex flex-1 flex-col overflow-hidden">

            <div className="px-5 py-4">

               <h3 className="font-semibold">

                  Buildings

               </h3>

            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-4">

               <BuildingList
                  buildings={buildings}
                  selectedBuilding={selectedBuilding}
                  onSelectBuilding={onSelectBuilding}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
               />

            </div>

         </div>

      </aside>

   );

}

interface ActionButtonProps {
   icon: React.ReactNode;
   label: string;
}

function ActionButton({
   icon,
   label,
}: ActionButtonProps) {

   return (

      <button
         className="
            mb-2
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            transition
            hover:bg-green-50
         "
      >

         {icon}

         {label}

      </button>

   );

}