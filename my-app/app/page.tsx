import NavigationBar from "@/components/layout/NavigationBar";
import MapToolbars from "@/components/Map/MapToolbars";
import CampusMaps from "@/components/Map/CampusMaps";
import BuildingInfos from "@/components/Map/BuildingInfos";

export default function Home() {
   return (
      <div className="h-screen flex flex-col">

         <NavigationBar />

         <main className="flex flex-1 overflow-hidden">

            <div className="flex flex-col flex-1">

               <MapToolbars />

               <CampusMaps />

            </div>

            <BuildingInfos />

         </main>

      </div>
   );
}