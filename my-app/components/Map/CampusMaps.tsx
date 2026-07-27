import {
   FaPlus,
   FaMinus,
   FaLocationArrow,
   FaCompass,
} from "react-icons/fa";

import BuildingMarker from "./BuildingMarker";
import { buildings } from "@/data/buildings";
import { Building } from "@/types/building";

interface Props {
   selectedBuilding: Building | null;
   setSelectedBuilding: (building: Building) => void;
}

export default function CampusMaps({
   selectedBuilding,
   setSelectedBuilding,
}: Props) {
   return (
      <section className="relative flex-1 bg-[#F8FAFC] rounded-2xl shadow-md overflow-hidden border border-gray-200">

         

         <div
            className="absolute inset-0 opacity-40"
            style={{
               backgroundImage: `
                  linear-gradient(#E5E7EB 1px, transparent 1px),
                  linear-gradient(90deg, #E5E7EB 1px, transparent 1px)
               `,
               backgroundSize: "40px 40px",
            }}
         />

         

         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <div className="text-center">

               <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">

                  <FaCompass className="text-4xl text-green-600" />

               </div>

               <h2 className="text-3xl font-bold text-gray-800">
                  Campus Map
               </h2>

               <p className="mt-2 text-gray-500">
                  Building markers are ready.
               </p>

            </div>

         </div>

         {/* Building Markers */}

         {buildings.map((building) => (
            <BuildingMarker
               key={building.id}
               building={building}
               selected={selectedBuilding?.id === building.id}
               onClick={() => setSelectedBuilding(building)}
            />
         ))}

         {/* Controls */}

         <div className="absolute bottom-5 right-5 flex flex-col gap-3">

            <button className="w-12 h-12 rounded-xl bg-white shadow hover:bg-gray-100 transition">
               <FaPlus className="mx-auto" />
            </button>

            <button className="w-12 h-12 rounded-xl bg-white shadow hover:bg-gray-100 transition">
               <FaMinus className="mx-auto" />
            </button>

            <button className="w-12 h-12 rounded-xl bg-green-600 text-white shadow hover:bg-green-700 transition">
               <FaLocationArrow className="mx-auto" />
            </button>

         </div>

      </section>
   );
}