import {
   FaLocationArrow,
   FaPlus,
   FaMinus,
   FaCompass,
} from "react-icons/fa";

import { buildings } from "@/data/buildings";
import { Building } from "@/types/building";

import BuildingMarker from "./BuildingMarker";

interface CampusMapsProps {
   selectedBuilding: Building | null;
   setSelectedBuilding: (building: Building) => void;
}

export default function CampusMaps({
   selectedBuilding,
   setSelectedBuilding,
}: CampusMapsProps) {
   return (
      <section
         className="
            relative
            flex-1
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-md
         "
      >
         {/* Grid */}

         <div
            className="absolute inset-0"
            style={{
               backgroundImage: `
                  linear-gradient(#F1F5F9 1px, transparent 1px),
                  linear-gradient(90deg,#F1F5F9 1px,transparent 1px)
               `,
               backgroundSize: "50px 50px",
            }}
         />

         {/* Background */}

         <div
            className="
               absolute
               inset-0
               bg-gradient-to-br
               from-green-50
               via-white
               to-slate-100
            "
         />

         {/* Center Title */}

         <div
            className="
               absolute
               inset-0
               flex
               items-center
               justify-center
               pointer-events-none
            "
         >
            <div className="text-center">

               <div
                  className="
                     mx-auto
                     mb-6
                     flex
                     h-28
                     w-28
                     items-center
                     justify-center
                     rounded-full
                     bg-green-100
                  "
               >
                  <FaCompass
                     className="text-5xl text-green-600"
                  />
               </div>

               <h2
                  className="
                     text-4xl
                     font-bold
                     text-slate-800
                  "
               >
                  Green Valley Campus
               </h2>

               <p className="mt-3 text-gray-500">
                  Interactive campus navigation system
               </p>

            </div>
         </div>

         {/* Building Markers */}

         {buildings.map((building) => (
            <BuildingMarker
               key={building.id}
               building={building}
               selected={
                  selectedBuilding?.id === building.id
               }
               onClick={() =>
                  setSelectedBuilding(building)
               }
            />
         ))}

         {/* Controls */}

         <div
            className="
               absolute
               right-6
               top-1/2
               -translate-y-1/2
               flex
               flex-col
               gap-4
            "
         >

            <ControlButton>

               <FaPlus />

            </ControlButton>

            <ControlButton>

               <FaMinus />

            </ControlButton>

            <ControlButton active>

               <FaLocationArrow />

            </ControlButton>

         </div>

         {/* Compass */}

         <div
            className="
               absolute
               bottom-6
               left-6
               flex
               h-14
               w-14
               items-center
               justify-center
               rounded-full
               bg-white
               shadow-lg
               border
            "
         >

            <FaCompass
               className="text-xl text-gray-700"
            />

         </div>

      </section>
   );
}

interface ControlButtonProps {
   children: React.ReactNode;
   active?: boolean;
}

function ControlButton({
   children,
   active = false,
}: ControlButtonProps) {
   return (
      <button
         className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            shadow-lg
            transition

            ${
               active
                  ? "bg-green-600 text-white"
                  : "bg-white hover:bg-gray-100"
            }
         `}
      >
         {children}
      </button>
   );
}