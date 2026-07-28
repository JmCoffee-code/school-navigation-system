import { Building2 } from "lucide-react";

import { Building } from "@/types/building";

interface BuildingMarkerProps {

   building: Building;

   selected: boolean;

   onClick: () => void;

}

export default function BuildingMarker({

   building,

   selected,

   onClick,

}: BuildingMarkerProps) {

   return (

      <button

         onClick={onClick}

         style={{
            left: `${building.x}%`,
            top: `${building.y}%`,
         }}

         className="
            group
            absolute
            -translate-x-1/2
            -translate-y-1/2
            transition-all
            duration-300
         "

      >

         {/* =============================== */}
         {/* Label */}
         {/* =============================== */}

         <div

            className={`
               absolute
               -top-12
               left-1/2
               -translate-x-1/2
               whitespace-nowrap
               rounded-full
               px-3
               py-1
               text-xs
               font-semibold
               shadow-lg
               transition-all
               duration-300

               ${
                  selected

                     ? "scale-100 bg-green-600 text-white opacity-100"

                     : "scale-90 bg-white text-slate-700 opacity-0 group-hover:scale-100 group-hover:opacity-100"
               }
            `}

         >

            {building.name}

         </div>

         {/* =============================== */}
         {/* Pulse Ring */}
         {/* =============================== */}

         {selected && (

            <span
               className="
                  absolute
                  inset-0
                  animate-ping
                  rounded-full
                  bg-green-400
                  opacity-30
               "
            />

         )}

         {/* =============================== */}
         {/* Marker */}
         {/* =============================== */}

         <div

            className={`
               relative
               flex
               h-12
               w-12
               items-center
               justify-center
               rounded-full
               border-4
               transition-all
               duration-300

               ${
                  selected

                     ? "scale-110 border-green-700 bg-green-600 text-white shadow-2xl"

                     : "border-white bg-white text-green-700 shadow-lg group-hover:scale-110 group-hover:shadow-xl"
               }
            `}

         >

            <Building2 size={20} />

         </div>

      </button>

   );

}