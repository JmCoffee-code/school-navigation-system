import { Building } from "@/types/building";

interface Props {
   building: Building;
   selected: boolean;
   onClick: () => void;
}

export default function BuildingMarker({
   building,
   selected,
   onClick,
}: Props) {
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
         <div
            className={`
               w-5
               h-5
               rounded-full
               border-4
               border-white
               shadow-lg
               transition-all
               duration-200

               ${
                  selected
                     ? "bg-green-600 scale-125"
                     : "bg-red-600 hover:scale-110"
               }
            `}
         />

         <span
            className="
               absolute
               top-7
               left-1/2
               -translate-x-1/2
               whitespace-nowrap
               rounded-md
               bg-white
               px-2
               py-1
               text-xs
               shadow
               opacity-0
               group-hover:opacity-100
               transition
            "
         >
            {building.name}
         </span>
      </button>
   );
}