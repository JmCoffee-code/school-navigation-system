import {
   FaSchool, 
   FaBell,
   FaUserCircle,
   FaSearch,
   FaMapMarkerAlt
} from "react-icons/fa";

export default function NavigationBar() {
   return (
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">

         <nav className="flex items-center justify-between px-8 py-4">

            {/* Left */}
            <div className="flex items-center gap-4">

               <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white">
                  <FaSchool size={24}/>
               </div>

               <div>
                  <h1 className="text-2xl font-bold text-green-700">
                     School Maps
                  </h1>

                  <p className="text-sm text-gray-500">
                     Green Valley Campus
                  </p>
               </div>

            </div>

            {/* Center */}
            <div className="hidden lg:flex w-full max-w-xl relative mx-8">

               <FaSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
               />

               <input
                  type="text"
                  placeholder="Search building, room..."
                  className="w-full rounded-xl border pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
               />

            </div>

            {/* Right */}
            <div className="flex items-center gap-5">

               <button className="hover:text-green-600 transition">
                  <FaMapMarkerAlt size={20}/>
               </button>

               <button className="hover:text-green-600 transition">
                  <FaBell size={20}/>
               </button>

               <button className="flex items-center gap-3 border rounded-xl px-3 py-2 hover:bg-gray-100 transition">

                  <FaUserCircle
                     size={34}
                     className="text-green-700"
                  />

                  <div className="hidden md:block text-left">

                     <p className="font-semibold">
                        Student
                     </p>

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