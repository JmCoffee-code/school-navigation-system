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
         className="absolute group"
         style={{
            left: building.x,
            top: building.y,
            transform: "translate(-50%, -50%)",
         }}
      >
         {/* Pulse Ring */}

         {selected && (
            <div
               className="
                  absolute
                  left-1/2
                  top-1/2
                  h-10
                  w-10
                  -translate-x-1/2
                  -translate-y-1/2
                  animate-ping
                  rounded-full
                  bg-green-400
                  opacity-30
               "
            />
         )}

         {/* Marker */}

         <div
            className={`
               relative
               flex
               h-6
               w-6
               items-center
               justify-center
               rounded-full
               border-4
               border-white
               shadow-xl
               transition-all
               duration-300

               ${
                  selected
                     ? "scale-125 bg-green-600"
                     : "bg-red-500 hover:scale-110"
               }
            `}
         />

         {/* Label */}

         <div
            className="
               absolute
               left-1/2
               top-9
               -translate-x-1/2
               rounded-lg
               bg-white
               px-3
               py-2
               text-xs
               font-semibold
               shadow-lg
               opacity-0
               transition
               group-hover:opacity-100
               whitespace-nowrap
            "
         >
            {building.name}
         </div>

      </button>
   );
}