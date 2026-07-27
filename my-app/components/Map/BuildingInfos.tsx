import {
   FaBuilding,
   FaMapMarkerAlt,
   FaInfoCircle,
} from "react-icons/fa";

import { Building } from "@/types/building";

interface Props {
   building: Building | null;
}

export default function BuildingInfos({
   building,
}: Props) {

   if (!building) {
      return (
         <aside className="w-80 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col">

            <div className="p-5 border-b">

               <h2 className="text-xl font-bold text-gray-800">
                  Building Information
               </h2>

               <p className="text-sm text-gray-500">
                  Select a building on the map.
               </p>

            </div>

            <div className="flex-1 flex flex-col justify-center items-center text-center p-6">

               <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">

                  <FaBuilding className="text-4xl text-green-600" />

               </div>

               <h3 className="text-lg font-semibold">
                  No Building Selected
               </h3>

               <p className="mt-2 text-gray-500">
                  Click a building marker to view its information.
               </p>

            </div>

         </aside>
      );
   }

   return (
      <aside className="w-80 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col">

         <div className="p-5 border-b">

            <h2 className="text-xl font-bold text-green-700">
               {building.name}
            </h2>

            <p className="text-sm text-gray-500">
               Building Details
            </p>

         </div>

         <div className="p-5 space-y-6">

            <div>

               <h3 className="font-semibold flex items-center gap-2 mb-2">

                  <FaInfoCircle />

                  Description

               </h3>

               <p className="text-gray-600">
                  {building.description}
               </p>

            </div>

            <div>

               <h3 className="font-semibold flex items-center gap-2 mb-2">

                  <FaMapMarkerAlt />

                  Coordinates

               </h3>

               <p className="text-gray-600">
                  X: {building.x}
               </p>

               <p className="text-gray-600">
                  Y: {building.y}
               </p>

            </div>

         </div>

         <div className="mt-auto p-5 border-t">

            <button
               className="
                  w-full
                  rounded-xl
                  bg-green-600
                  py-3
                  font-semibold
                  text-white
                  hover:bg-green-700
                  transition
               "
            >
               Start Navigation
            </button>

         </div>

      </aside>
   );
}