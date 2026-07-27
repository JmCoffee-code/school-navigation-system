import {
   FaCompass,
   FaLocationArrow,
   FaRoute,
   FaBuilding,
   FaParking,
   FaStar,
   FaCog,
} from "react-icons/fa";

export default function MapToolbars() {

   return (

      <aside
         className="
            w-72
            bg-white
            rounded-2xl
            border
            border-gray-200
            shadow-md
            overflow-hidden
         "
      >

         <div className="p-6 border-b">

            <h2
               className="
                  text-xl
                  font-bold
                  text-green-700
               "
            >

               Navigation

            </h2>

            <p className="text-sm text-gray-500">

               Campus Explorer

            </p>

         </div>

         <div className="p-4 space-y-8">

            <section>

               <h3
                  className="
                     mb-3
                     text-xs
                     uppercase
                     tracking-wider
                     text-gray-400
                  "
               >

                  Navigation

               </h3>

               <ToolbarButton
                  icon={<FaLocationArrow />}
                  text="Current Location"
               />

               <ToolbarButton
                  icon={<FaRoute />}
                  text="Directions"
               />

               <ToolbarButton
                  icon={<FaCompass />}
                  text="Compass"
               />

            </section>

            <section>

               <h3
                  className="
                     mb-3
                     text-xs
                     uppercase
                     tracking-wider
                     text-gray-400
                  "
               >

                  Explore

               </h3>

               <ToolbarButton
                  icon={<FaBuilding />}
                  text="Buildings"
               />

               <ToolbarButton
                  icon={<FaParking />}
                  text="Parking"
               />

               <ToolbarButton
                  icon={<FaStar />}
                  text="Favorites"
               />

            </section>

            <section>

               <h3
                  className="
                     mb-3
                     text-xs
                     uppercase
                     tracking-wider
                     text-gray-400
                  "
               >

                  Settings

               </h3>

               <ToolbarButton
                  icon={<FaCog />}
                  text="Preferences"
               />

            </section>

         </div>

      </aside>

   );
}

interface ToolbarButtonProps {
   icon: React.ReactNode;
   text: string;
}

function ToolbarButton({
   icon,
   text,
}: ToolbarButtonProps) {

   return (

      <button
         className="
            mb-2
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-gray-700
            transition
            hover:bg-green-50
            hover:text-green-700
         "
      >

         <span className="text-lg">

            {icon}

         </span>

         <span className="font-medium">

            {text}

         </span>

      </button>

   );
}