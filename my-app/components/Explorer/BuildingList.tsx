import {
   FaChevronRight,
   FaHeart,
   FaRegHeart,
} from "react-icons/fa";

import getBuildingIcon from "@/lib/getBuildingIcon";
import { Building } from "@/types/building";

interface BuildingListProps {
   buildings: Building[];
   selectedBuilding: Building | null;
   onSelectBuilding: (building: Building) => void;
   favorites: number[];
   toggleFavorite: (id: number) => void;
}

export default function BuildingList({
   buildings,
   selectedBuilding,
   onSelectBuilding,
   favorites,
   toggleFavorite,
}: BuildingListProps) {

   if (buildings.length === 0) {

      return (

         <div className="py-16 text-center">

            <h3 className="text-lg font-semibold text-slate-700">
               No Buildings Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
               Try another search or category.
            </p>

         </div>

      );

   }

   return (

      <div className="space-y-3">

         {buildings.map((building) => {

            const selected =
               selectedBuilding?.id === building.id;

            const favorite =
               favorites.includes(building.id);

            const Icon =
               getBuildingIcon(building.icon);

            return (

               <div

                  key={building.id}

                  role="button"

                  tabIndex={0}

                  onClick={() =>
                     onSelectBuilding(building)
                  }

                  onKeyDown={(e) => {

                     if (
                        e.key === "Enter" ||
                        e.key === " "
                     ) {

                        e.preventDefault();

                        onSelectBuilding(building);

                     }

                  }}

                  className={`
                     group
                     cursor-pointer
                     rounded-2xl
                     border
                     p-4
                     transition-all
                     duration-200

                     ${
                        selected
                           ? "border-green-600 bg-green-50 shadow-md"
                           : "border-slate-200 bg-white hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                     }
                  `}
               >

                  {/* ========================= */}
                  {/* Header */}
                  {/* ========================= */}

                  <div className="flex items-start justify-between">

                     <div className="flex gap-4">

                        <div
                           className={`
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-xl

                              ${
                                 selected
                                    ? "bg-green-600 text-white"
                                    : "bg-green-100 text-green-700"
                              }
                           `}
                        >

                           <Icon size={22} />

                        </div>

                        <div>

                           <h3 className="text-lg font-semibold text-slate-800">

                              {building.name}

                           </h3>

                           <div className="mt-1 flex items-center gap-2">

                              <span
                                 className={`
                                    rounded-full
                                    px-2
                                    py-1
                                    text-xs
                                    font-semibold

                                    ${
                                       building.status === "Open"
                                          ? "bg-green-100 text-green-700"
                                          : "bg-red-100 text-red-700"
                                    }
                                 `}
                              >

                                 {building.status}

                              </span>

                              <span className="text-sm text-slate-500">

                                 {building.category}

                              </span>

                           </div>

                        </div>

                     </div>

                     {/* Favorite */}

                     <button

                        type="button"

                        onClick={(e) => {

                           e.stopPropagation();

                           toggleFavorite(building.id);

                        }}

                        className="
                           rounded-full
                           p-2
                           transition
                           hover:bg-slate-100
                        "

                     >

                        {favorite ? (

                           <FaHeart className="text-red-500" />

                        ) : (

                           <FaRegHeart className="text-slate-400" />

                        )}

                     </button>

                  </div>

                  {/* ========================= */}
                  {/* Info */}
                  {/* ========================= */}

                  <div className="mt-5 flex flex-wrap gap-2">

                     <span
                        className="
                           rounded-full
                           bg-slate-100
                           px-3
                           py-1
                           text-xs
                           font-medium
                           text-slate-600
                        "
                     >

                        🏢 {building.floors} Floors

                     </span>

                     <span
                        className="
                           rounded-full
                           bg-slate-100
                           px-3
                           py-1
                           text-xs
                           font-medium
                           text-slate-600
                        "
                     >

                        🚪 {building.rooms} Rooms

                     </span>

                     <span
                        className="
                           rounded-full
                           bg-slate-100
                           px-3
                           py-1
                           text-xs
                           font-medium
                           text-slate-600
                        "
                     >

                        👥 {building.capacity}

                     </span>

                  </div>

                  {/* ========================= */}
                  {/* Footer */}
                  {/* ========================= */}

                  <div className="mt-5 flex items-center justify-between">

                     <span
                        className="
                           text-sm
                           font-medium
                           text-green-700
                        "
                     >

                        Click to explore

                     </span>

                     <FaChevronRight
                        className="
                           transition-transform
                           duration-200
                           group-hover:translate-x-1
                        "
                     />

                  </div>

               </div>

            );

         })}

      </div>

   );

}