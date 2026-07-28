import {
   FaBuilding,
   FaChevronRight,
   FaHeart,
   FaRegHeart,
} from "react-icons/fa";

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

            <FaBuilding
               className="
                  mx-auto
                  mb-4
                  text-4xl
                  text-gray-300
               "
            />

            <h3 className="font-semibold">

               No buildings found

            </h3>

            <p className="mt-2 text-sm text-gray-500">

               Try another category.

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

            return (

               <button

                  key={building.id}

                  onClick={() =>
                     onSelectBuilding(building)
                  }

                  className={`
                     group
                     w-full
                     rounded-2xl
                     border
                     p-4
                     text-left
                     transition-all
                     duration-200

                     ${
                        selected

                           ? "border-green-600 bg-green-50 shadow-md"

                           : "border-gray-200 bg-white hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                     }
                  `}
               >

                  {/* Header */}

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

                           <FaBuilding />

                        </div>

                        <div>

                           <h3
                              className="
                                 text-lg
                                 font-semibold
                              "
                           >

                              {building.name}

                           </h3>

                           <p
                              className="
                                 text-sm
                                 text-gray-500
                              "
                           >

                              {building.category}

                           </p>

                        </div>

                     </div>

                     <button

                        onClick={(e) => {

                           e.stopPropagation();

                           toggleFavorite(building.id);

                        }}

                        className="
                           rounded-full
                           p-2
                           transition
                           hover:bg-gray-100
                        "
                     >

                        {favorite ? (

                           <FaHeart
                              className="
                                 text-red-500
                              "
                           />

                        ) : (

                           <FaRegHeart
                              className="
                                 text-gray-400
                              "
                           />

                        )}

                     </button>

                  </div>

                  {/* Information */}

                  <div
                     className="
                        mt-5
                        flex
                        items-center
                        gap-4
                        text-sm
                        text-gray-500
                     "
                  >

                     <span>

                        🏢 {building.floors} Floors

                     </span>

                     <span>

                        🚪 {building.rooms} Rooms

                     </span>

                  </div>

                  {/* Footer */}

                  <div
                     className="
                        mt-5
                        flex
                        items-center
                        justify-between
                     "
                  >

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
                           group-hover:translate-x-1
                        "
                     />

                  </div>

               </button>

            );

         })}

      </div>

   );

}