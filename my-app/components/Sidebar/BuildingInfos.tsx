import {
   FaBuilding,
   FaLayerGroup,
   FaDoorOpen,
   FaCircleInfo,
   FaRoute,
   FaLocationDot,
} from "react-icons/fa6";

import { Building } from "@/types/building";

interface BuildingInfosProps {
   building: Building | null;
}

export default function BuildingInfos({
   building,
}: BuildingInfosProps) {

   return (

      <aside
         className="
            w-80
            rounded-2xl
            bg-white
            border
            border-gray-200
            shadow-md
            overflow-hidden
         "
      >

         {/* Header */}

         <div className="border-b p-6">

            <h2 className="text-2xl font-bold text-green-700">
               Building Details
            </h2>

            <p className="text-sm text-gray-500">
               Campus Information
            </p>

         </div>

         {!building ? (

            <div className="flex h-full flex-col items-center justify-center p-8 text-center">

               <div
                  className="
                     mb-6
                     flex
                     h-24
                     w-24
                     items-center
                     justify-center
                     rounded-full
                     bg-green-100
                  "
               >

                  <FaBuilding
                     className="text-5xl text-green-600"
                  />

               </div>

               <h3 className="text-xl font-semibold">

                  No Building Selected

               </h3>

               <p className="mt-3 text-gray-500">

                  Select a building marker
                  from the campus map.

               </p>

            </div>

         ) : (

            <div className="flex h-full flex-col">

               <div className="p-6">

                  <div className="mb-6">

                     <span
                        className="
                           rounded-full
                           bg-green-100
                           px-3
                           py-1
                           text-xs
                           font-semibold
                           text-green-700
                        "
                     >
                        {building.category}
                     </span>

                     <h2
                        className="
                           mt-4
                           text-3xl
                           font-bold
                           text-slate-800
                        "
                     >
                        {building.name}
                     </h2>

                  </div>

                  <div className="space-y-5">

                     <InfoRow
                        icon={<FaLayerGroup />}
                        label="Floors"
                        value={building.floors}
                     />

                     <InfoRow
                        icon={<FaDoorOpen />}
                        label="Rooms"
                        value={building.rooms}
                     />

                     <InfoRow
                        icon={<FaLocationDot />}
                        label="Location"
                        value={`${building.x}, ${building.y}`}
                     />

                  </div>

                  <div className="mt-8">

                     <h3
                        className="
                           mb-3
                           flex
                           items-center
                           gap-2
                           font-semibold
                        "
                     >

                        <FaCircleInfo />

                        Description

                     </h3>

                     <p className="leading-7 text-gray-600">

                        {building.description}

                     </p>

                  </div>

               </div>

               <div className="mt-auto border-t p-6">

                  <button
                     className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-green-600
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-green-700
                     "
                  >

                     <FaRoute />

                     Start Navigation

                  </button>

               </div>

            </div>

         )}

      </aside>

   );
}

interface InfoRowProps {

   icon: React.ReactNode;

   label: string;

   value: string | number;

}

function InfoRow({
   icon,
   label,
   value,
}: InfoRowProps) {

   return (

      <div className="flex items-center gap-4">

         <div
            className="
               flex
               h-11
               w-11
               items-center
               justify-center
               rounded-xl
               bg-green-100
               text-green-700
            "
         >

            {icon}

         </div>

         <div>

            <p className="text-sm text-gray-500">

               {label}

            </p>

            <p className="font-semibold">

               {value}

            </p>

         </div>

      </div>

   );

}