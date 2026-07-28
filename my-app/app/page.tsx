import NavigationBar from "@/components/layout/NavigationBar";
import MapToolbars from "@/components/Map/MapToolbars";
import CampusMaps from "@/components/Map/CampusMaps";
import BuildingInfos from "@/components/Map/BuildingInfos";

export default function Home() {
  return (
    <>
      <NavigationBar />

      <main className="flex">
        <div className="flex-1">
          <MapToolbars />
          <CampusMaps />
        </div>

        <BuildingInfos />
      </main>
    </>
  );
}