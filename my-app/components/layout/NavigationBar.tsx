import {
   FaBell,
   FaSchool,
   FaSearch,
   FaUserCircle,
   FaBuilding,
} from "react-icons/fa";

import { Building } from "@/types/building";

interface NavigationBarProps {

   searchQuery: string;

   setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

   searchResults: Building[];

   onSelectBuilding: (building: Building) => void;

}

export default function NavigationBar({

   searchQuery,

   setSearchQuery,

   searchResults,

   onSelectBuilding,

}: NavigationBarProps) {

   return (

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">

         <nav className="flex h-20 items-center justify-between px-8">

            {/* Logo */}

            <div className="flex items-center gap-4">

               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg">

                  <FaSchool size={24} />

               </div>

               <div>

                  <h1 className="text-2xl font-bold text-green-700">

                     School Navigation

                  </h1>

                  <p className="text-sm text-gray-500">

                     Green Valley Campus

                  </p>

               </div>

            </div>

            {/* Search */}

            <div className="mx-12 flex-1">

               <div className="relative mx-auto max-w-xl">

                  <FaSearch
                     className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                     value={searchQuery}
                     onChange={(e) =>
                        setSearchQuery(e.target.value)
                     }
                     placeholder="Search buildings..."
                     className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        bg-gray-50
                        py-3
                        pl-12
                        pr-10
                        outline-none
                        transition
                        focus:border-green-600
                        focus:bg-white
                     "
                  />

                  {searchQuery && (

                     <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                     >

                        ×

                     </button>

                  )}

                  {searchResults.length > 0 && (

                     <div
                        className="
                           absolute
                           mt-2
                           w-full
                           overflow-hidden
                           rounded-xl
                           border
                           border-gray-200
                           bg-white
                           shadow-xl
                        "
                     >

                        {searchResults.map((building) => (

                           <button

                              key={building.id}

                              onClick={() =>
                                 onSelectBuilding(building)
                              }

                              className="
                                 flex
                                 w-full
                                 items-center
                                 gap-4
                                 border-b
                                 border-gray-100
                                 px-5
                                 py-4
                                 text-left
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

                              <div>

                                 <h3 className="font-semibold">

                                    {building.name}

                                 </h3>

                                 <p className="text-xs text-gray-500">

                                    {building.category}

                                 </p>

                              </div>

                           </button>

                        ))}

                     </div>

                  )}

               </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-5">

               <button className="relative rounded-full p-2 hover:bg-gray-100">

                  <FaBell className="text-gray-600" />

                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"/>

               </button>

               <button className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2">

                  <FaUserCircle
                     size={36}
                     className="text-green-700"
                  />

                  <div>

                     <h2 className="font-semibold">

                        Student

                     </h2>

                     <p className="text-xs text-gray-500">

                        BSIT

                     </p>

                  </div>

               </button>

            </div>

         </nav>

      </header>

   );

}