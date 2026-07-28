import getBuildingIcon from "@/lib/getBuildingIcon";
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

   const Icon = getBuildingIcon(building.icon);

   return (

      <button

         onClick={onClick}

         style={{
            left: `${building.x}%`,
            top: `${building.y}%`,
         }}

         className={`
            group
            absolute
            -translate-x-1/2
            -translate-y-1/2
            transition-all
            duration-300

            ${
               selected
                  ? "z-30"
                  : "z-10 hover:z-20"
            }
         `}

      >

         {/* ========================= */}
         {/* Floating Label */}
         {/* ========================= */}

         <div

            className={`
               absolute
               -top-14
               left-1/2
               -translate-x-1/2
               whitespace-nowrap
               rounded-full
               px-4
               py-2
               text-sm
               font-semibold
               shadow-lg
               transition-all
               duration-300

               ${
                  selected
                     ? "bg-green-600 text-white opacity-100 scale-100"
                     : "bg-white text-slate-700 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
               }
            `}

         >

            {building.name}

         </div>

         {/* ========================= */}
         {/* Pulse Ring */}
         {/* ========================= */}

         {selected && (

            <span
               className="
                  absolute
                  inset-0
                  rounded-full
                  bg-green-400
                  opacity-30
                  animate-ping
               "
            />

         )}

         {/* ========================= */}
         {/* Outer Ring */}
         {/* ========================= */}

         <div
            className={`
               absolute
               inset-0
               rounded-full
               transition-all
               duration-300

               ${
                  selected
                     ? "scale-150 border-2 border-green-400"
                     : "scale-100"
               }
            `}
         />

         {/* ========================= */}
         {/* Marker */}
         {/* ========================= */}

         <div

            className={`
               relative
               flex
               h-14
               w-14
               items-center
               justify-center
               rounded-full
               border-4
               transition-all
               duration-300

               ${
                  selected

                     ? "scale-110 border-green-700 bg-green-600 text-white shadow-2xl"

                     : "border-white bg-white text-green-700 shadow-lg group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-2xl"
               }
            `}

         >

            <Icon size={24} />

         </div>

      </button>

   );

}