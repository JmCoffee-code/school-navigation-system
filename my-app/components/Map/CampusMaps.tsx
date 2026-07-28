import { Compass } from "lucide-react";

import { Building } from "@/types/building";

import BuildingMarker from "./BuildingMarker";
import MapControls from "./MapControls";

interface CampusMapsProps {
   buildings: Building[];
   selectedBuilding: Building | null;
   setSelectedBuilding: (building: Building) => void;
}

export default function CampusMaps({
   buildings,
   selectedBuilding,
   setSelectedBuilding,
}: CampusMapsProps) {

   return (

      <section
         className="
            relative
            flex-1
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-lg
         "
      >

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

         {/* Grid */}

         <div
            className="absolute inset-0 opacity-60"
            style={{
               backgroundImage: `
                  linear-gradient(#E2E8F0 1px, transparent 1px),
                  linear-gradient(90deg,#E2E8F0 1px,transparent 1px)
               `,
               backgroundSize: "48px 48px",
            }}
         />

         {/* Hero */}

         {!selectedBuilding && (

            <div
               className="
                  pointer-events-none
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
               "
            >

               <div className="text-center">

                  <div
                     className="
                        mx-auto
                        mb-8
                        flex
                        h-28
                        w-28
                        items-center
                        justify-center
                        rounded-full
                        bg-green-100
                     "
                  >

                     <Compass
                        size={54}
                        className="text-green-600"
                     />

                  </div>

                  <h2 className="text-4xl font-bold text-slate-800">

                     Green Valley Campus

                  </h2>

                  <p className="mt-3 text-slate-500">

                     Select a building to begin exploring.

                  </p>

               </div>

            </div>

         )}

         {/* Markers */}

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

         <MapControls />

         {/* Footer */}

         <div
            className="
               absolute
               bottom-6
               left-6
               rounded-2xl
               border
               border-slate-200
               bg-white/90
               px-4
               py-3
               shadow-lg
               backdrop-blur
            "
         >

            <p className="font-semibold">

               Green Valley Navigator

            </p>

            <p className="text-sm text-slate-500">

               Interactive Campus Map

            </p>

         </div>

      </section>

   );

}