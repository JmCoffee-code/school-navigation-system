import {
   Heart,
   Layers3,
   MapPin,
   Route,
   DoorOpen,
   Users,
   Wifi,
   CircleCheck,
} from "lucide-react";

import getBuildingIcon from "@/lib/getBuildingIcon";
import { Building } from "@/types/building";

interface BuildingDetailsProps {
   building: Building | null;
   favorites: number[];
   toggleFavorite: (id: number) => void;
}

export default function BuildingDetails({
   building,
   favorites,
   toggleFavorite,
}: BuildingDetailsProps) {

   if (!building) {

      return (

         <aside
            className="
               flex
               w-96
               flex-col
               rounded-3xl
               border
               border-slate-200
               bg-white
               shadow-lg
            "
         >

            <div className="flex flex-1 flex-col items-center justify-center p-8">

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

                  <MapPin
                     size={46}
                     className="text-green-600"
                  />

               </div>

               <h2 className="text-2xl font-bold text-slate-800">

                  Select a Building

               </h2>

               <p className="mt-3 text-center leading-7 text-slate-500">

                  Click a building from the explorer
                  or the map to view detailed
                  information.

               </p>

            </div>

         </aside>

      );

   }

   const Icon = getBuildingIcon(building.icon);

   const favorite =
      favorites.includes(building.id);

   return (

      <aside
         className="
            flex
            w-96
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-lg
         "
      >

         {/* Hero */}

         <div
            className="
               bg-gradient-to-br
               from-green-700
               via-green-600
               to-emerald-500
               p-8
               text-white
            "
         >

            <div className="flex items-start justify-between">

               <div
                  className="
                     flex
                     h-20
                     w-20
                     items-center
                     justify-center
                     rounded-3xl
                     bg-white/20
                  "
               >

                  <Icon size={42} />

               </div>

               <button

                  onClick={() =>
                     toggleFavorite(building.id)
                  }

                  className="
                     rounded-2xl
                     bg-white/20
                     p-3
                     transition
                     hover:bg-white/30
                  "

               >

                  <Heart
                     size={22}
                     fill={
                        favorite
                           ? "currentColor"
                           : "none"
                     }
                  />

               </button>

            </div>

            <div className="mt-8">

               <span
                  className="
                     rounded-full
                     bg-white/20
                     px-3
                     py-1
                     text-sm
                  "
               >

                  {building.category}

               </span>

               <h2 className="mt-4 text-4xl font-bold">

                  {building.name}

               </h2>

               <div className="mt-4 flex items-center gap-2">

                  <span
                     className={`
                        h-3
                        w-3
                        rounded-full

                        ${
                           building.status === "Open"
                              ? "bg-lime-300"
                              : "bg-red-400"
                        }
                     `}
                  />

                  <span>

                     {building.status}

                  </span>

               </div>

            </div>

         </div>

         {/* Body */}

         <div className="flex-1 overflow-y-auto p-6">

            <div className="grid grid-cols-2 gap-4">

               <InfoCard
                  icon={<Layers3 size={18} />}
                  label="Floors"
                  value={building.floors}
               />

               <InfoCard
                  icon={<DoorOpen size={18} />}
                  label="Rooms"
                  value={building.rooms}
               />

               <InfoCard
                  icon={<Users size={18} />}
                  label="Capacity"
                  value={building.capacity}
               />

               <InfoCard
                  icon={<MapPin size={18} />}
                  label="Location"
                  value={building.location}
               />

            </div>

            <section className="mt-8">

               <h3 className="text-lg font-bold">

                  Facilities

               </h3>

               <div className="mt-4 flex flex-wrap gap-2">

                  {building.facilities.map((facility) => (

                     <div

                        key={facility}

                        className="
                           flex
                           items-center
                           gap-2
                           rounded-full
                           bg-green-100
                           px-3
                           py-2
                           text-sm
                           text-green-700
                        "

                     >

                        <Wifi size={14} />

                        {facility}

                     </div>

                  ))}

               </div>

            </section>

            <section className="mt-8">

               <h3 className="text-lg font-bold">

                  Description

               </h3>

               <p className="mt-3 leading-8 text-slate-600">

                  {building.description}

               </p>

            </section>

         </div>

         {/* Footer */}

         <div
            className="
               border-t
               border-slate-200
               p-6
            "
         >

            <button
               className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-green-600
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-700
               "
            >

               <Route size={20} />

               Start Navigation

            </button>

         </div>

      </aside>

   );

}

interface InfoCardProps {
   icon: React.ReactNode;
   label: string;
   value: string | number;
}

function InfoCard({
   icon,
   label,
   value,
}: InfoCardProps) {

   return (

      <div
         className="
            rounded-2xl
            border
            border-slate-200
            p-4
         "
      >

         <div className="text-green-600">

            {icon}

         </div>

         <p
            className="
               mt-3
               text-xs
               uppercase
               tracking-wider
               text-slate-400
            "
         >

            {label}

         </p>

         <h4
            className="
               mt-1
               text-xl
               font-bold
            "
         >

            {value}

         </h4>

      </div>

   );

}