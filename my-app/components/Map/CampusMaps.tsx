export default function CampusMaps() {
   return (
      <section className="relative flex-1 min-h-0 bg-gray-100 rounded-xl overflow-hidden shadow-md">

         {/* Placeholder Map */}
         <div className="absolute inset-0 flex items-center justify-center bg-green-50">

            <div className="text-center">

               <h2 className="text-3xl font-bold text-green-700">
                  Green Valley Campus Map
               </h2>

               <p className="text-gray-500 mt-2">
                  map will appear here.
               </p>

            </div>

         </div>

         
         <div className="absolute bottom-6 right-6 flex flex-col gap-3">

            <button className="w-12 h-12 bg-white rounded-xl shadow hover:bg-gray-100">
               +
            </button>

            <button className="w-12 h-12 bg-white rounded-xl shadow hover:bg-gray-100">
               −
            </button>

            <button className="w-12 h-12 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">
               📍
            </button>

         </div>

      </section>
   );
}