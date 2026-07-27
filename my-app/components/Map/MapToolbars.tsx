import {
   FaSearch,
   FaLocationArrow,
   FaRoute,
   FaRedo,
   FaBuilding,
   FaParking,
   FaStar,
   FaQuestionCircle,
   FaCalendarAlt,
   FaExclamationTriangle
} from "react-icons/fa";

export default function MapToolbars() {
   return (
      <aside className="w-72 bg-white rounded-2xl shadow-md p-5">

         {/* Search */}

         <div className="relative mb-6">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

            <input
               type="text"
               placeholder="Search building..."
               className="w-full rounded-xl border px-11 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

         </div>

         {/* Navigation */}

         <ToolbarSection title="Navigation">

            <ToolbarButton icon={<FaLocationArrow />} text="Current Location"/>

            <ToolbarButton icon={<FaRoute />} text="Get Directions"/>

            <ToolbarButton icon={<FaRedo />} text="Reset View"/>

         </ToolbarSection>

         {/* Explore */}

         <ToolbarSection title="Explore">

            <ToolbarButton icon={<FaBuilding />} text="Buildings"/>

            <ToolbarButton icon={<FaParking />} text="Parking"/>

            <ToolbarButton icon={<FaStar />} text="Favorites"/>

         </ToolbarSection>

         {/* Quick */}

         <ToolbarSection title="Quick Actions">

            <ToolbarButton icon={<FaCalendarAlt />} text="Class Schedule"/>

            <ToolbarButton icon={<FaExclamationTriangle />} text="Emergency"/>

            <ToolbarButton icon={<FaQuestionCircle />} text="Help"/>

         </ToolbarSection>

      </aside>
   );
}

function ToolbarSection({
   title,
   children,
}: {
   title: string;
   children: React.ReactNode;
}) {
   return (
      <div className="mb-6">

         <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
            {title}
         </h3>

         <div className="space-y-1">
            {children}
         </div>

      </div>
   );
}

function ToolbarButton({
   icon,
   text,
}: {
   icon: React.ReactNode;
   text: string;
}) {
   return (
      <button
         className="
            w-full
            flex
            items-center
            gap-3
            rounded-lg
            px-3
            py-3
            hover:bg-green-50
            hover:text-green-700
            transition
         "
      >
         <span>{icon}</span>
         <span>{text}</span>
      </button>
   );
}