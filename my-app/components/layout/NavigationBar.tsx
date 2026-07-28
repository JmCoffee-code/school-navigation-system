import {
   Bell,
   Moon,
   GraduationCap,
   UserCircle2,
   Wifi,
} from "lucide-react";

export default function NavigationBar() {

   return (

      <header
         className="
            sticky
            top-0
            z-50
            border-b
            border-slate-200
            bg-white/90
            backdrop-blur-lg
         "
      >

         <nav
            className="
               flex
               h-20
               items-center
               justify-between
               px-8
            "
         >

            {/* ========================================= */}
            {/* Brand */}
            {/* ========================================= */}

            <div className="flex items-center gap-4">

               <div
                  className="
                     flex
                     h-14
                     w-14
                     items-center
                     justify-center
                     rounded-2xl
                     bg-green-600
                     text-white
                     shadow-md
                  "
               >

                  <GraduationCap size={28} />

               </div>

               <div>

                  <h1
                     className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-slate-800
                     "
                  >

                     Green Valley Navigator

                  </h1>

                  <div
                     className="
                        mt-1
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-500
                     "
                  >

                     <Wifi
                        size={14}
                        className="text-green-600"
                     />

                     <span>

                        Campus Navigation Platform

                     </span>

                  </div>

               </div>

            </div>

            {/* ========================================= */}
            {/* Right */}
            {/* ========================================= */}

            <div className="flex items-center gap-4">

               {/* Version */}

               <div
                  className="
                     hidden
                     rounded-full
                     bg-green-100
                     px-4
                     py-2
                     text-sm
                     font-semibold
                     text-green-700
                     lg:block
                  "
               >

                  Version 2.0

               </div>

               {/* Theme */}

               <button
                  className="
                     rounded-xl
                     border
                     border-slate-200
                     bg-white
                     p-3
                     transition

                     hover:bg-slate-100
                  "
               >

                  <Moon size={20} />

               </button>

               {/* Notifications */}

               <button
                  className="
                     relative
                     rounded-xl
                     border
                     border-slate-200
                     bg-white
                     p-3
                     transition

                     hover:bg-slate-100
                  "
               >

                  <Bell size={20} />

                  <span
                     className="
                        absolute
                        right-2
                        top-2
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-red-500
                     "
                  />

               </button>

               {/* Profile */}

               <button
                  className="
                     flex
                     items-center
                     gap-3
                     rounded-2xl
                     border
                     border-slate-200
                     bg-white
                     px-3
                     py-2
                     transition

                     hover:bg-slate-50
                  "
               >

                  <UserCircle2
                     size={42}
                     className="text-green-600"
                  />

                  <div className="text-left">

                     <h2
                        className="
                           text-sm
                           font-semibold
                           text-slate-800
                        "
                     >

                        Student

                     </h2>

                     <p
                        className="
                           text-xs
                           text-slate-500
                        "
                     >

                        BSIT Department

                     </p>

                  </div>

               </button>

            </div>

         </nav>

      </header>

   );

}