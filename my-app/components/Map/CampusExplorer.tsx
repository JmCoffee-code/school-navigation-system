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

         {/* ====================================== */}
         {/* Header */}
         {/* ====================================== */}

         <div className="border-b border-slate-200 p-6">

            <h2 className="text-2xl font-bold text-slate-800">

               Campus Explorer

            </h2>

            <p className="mt-1 text-sm text-slate-500">

               Discover every building around campus.

            </p>

         </div>

         {/* ====================================== */}
         {/* Search */}
         {/* ====================================== */}

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
                  type="text"
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
                     transition

                     focus:border-green-600
                     focus:bg-white
                     focus:ring-2
                     focus:ring-green-100
                  "
               />

            </div>

         </div>

         {/* ====================================== */}
         {/* Quick Actions */}
         {/* ====================================== */}

         <div className="border-b border-slate-200 p-5">

            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">

               Quick Actions

            </h3>

            <div className="space-y-2">

               <ActionButton
                  icon={<LocateFixed size={18} />}
                  label="Current Location"
               />

               <ActionButton
                  icon={<Route size={18} />}
                  label="Start Navigation"
               />

               <ActionButton
                  icon={<Heart size={18} />}
                  label="Favorite Buildings"
               />

            </div>

         </div>

         {/* ====================================== */}
         {/* Categories */}
         {/* ====================================== */}

         <div className="border-b border-slate-200 p-5">

            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">

               Categories

            </h3>

            <div className="flex flex-wrap gap-2">

               {categories.map((category) => (

                  <button
                     key={category.label}
                     onClick={() =>
                        setSelectedCategory(category.label)
                     }
                     className={`
                        flex
                        items-center
                        gap-2
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        transition

                        ${
                           selectedCategory === category.label

                              ? "bg-green-600 text-white"

                              : "bg-slate-100 text-slate-600 hover:bg-green-100"
                        }
                     `}
                  >

                     {category.icon}

                     {category.label}

                  </button>

               ))}

            </div>

         </div>

         {/* ====================================== */}
         {/* Buildings */}
         {/* ====================================== */}

         <div className="flex flex-1 flex-col overflow-hidden">

            <div
               className="
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
               "
            >

               <h3 className="font-semibold text-slate-700">

                  Buildings

               </h3>

               <span
                  className="
                     rounded-full
                     bg-green-100
                     px-3
                     py-1
                     text-xs
                     font-bold
                     text-green-700
                  "
               >

                  {buildings.length}

               </span>

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

         {/* ====================================== */}
         {/* Footer */}
         {/* ====================================== */}

         <div
            className="
               border-t
               border-slate-200
               bg-slate-50
               p-5
            "
         >

            <div className="grid grid-cols-2 gap-3">

               <StatCard
                  title="Buildings"
                  value={buildings.length}
               />

               <StatCard
                  title="Favorites"
                  value={favorites.length}
               />

            </div>

         </div>

      </aside>

   );

}

/* ===================================================== */

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
            flex
            w-full
            items-center
            gap-4
            rounded-2xl
            px-4
            py-3
            transition

            hover:bg-green-50
         "
      >

         <div className="text-green-600">

            {icon}

         </div>

         <span className="font-medium">

            {label}

         </span>

      </button>

   );

}

/* ===================================================== */

interface StatCardProps {
   title: string;
   value: number;
}

function StatCard({
   title,
   value,
}: StatCardProps) {

   return (

      <div
         className="
            rounded-2xl
            bg-white
            p-4
            text-center
            shadow-sm
         "
      >

         <h4
            className="
               text-2xl
               font-bold
               text-green-700
            "
         >

            {value}

         </h4>

         <p
            className="
               mt-1
               text-xs
               uppercase
               tracking-wider
               text-slate-500
            "
         >

            {title}

         </p>

      </div>

   );

}