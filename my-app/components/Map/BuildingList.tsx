import { FaBuilding } from "react-icons/fa";
import { buildings } from "@/data/buildings";

export default function BuildingList() {

   return (

      <div className="mt-8">

         <h3
            className="
               mb-4
               text-xs
               uppercase
               tracking-widest
               text-gray-400
            "
         >

            Buildings

         </h3>

         <div className="space-y-2">

            {buildings.map((building) => (

               <button
                  key={building.id}
                  className="
                     flex
                     w-full
                     items-center
                     gap-3
                     rounded-xl
                     px-3
                     py-3
                     transition
                     hover:bg-green-50
                  "
               >

                  <div
                     className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-green-100
                        text-green-700
                     "
                  >

                     <FaBuilding />

                  </div>

                  <div className="text-left">

                     <h4 className="font-semibold">

                        {building.name}

                     </h4>

                     <p
                        className="
                           text-xs
                           text-gray-500
                        "
                     >

                        {building.category}

                     </p>

                  </div>

               </button>

            ))}

         </div>

      </div>

   );

}