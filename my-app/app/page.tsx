"use client";

import { useMemo, useState } from "react";

import NavigationBar from "@/components/layout/NavigationBar";
import MapToolbars from "@/components/Map/MapToolbars";
import CampusMaps from "@/components/Map/CampusMaps";
import BuildingInfos from "@/components/Sidebar/BuildingInfos";

import { Building } from "@/types/building";
import { buildings } from "@/data/buildings";

export default function Home() {

   const [selectedBuilding, setSelectedBuilding] =
      useState<Building | null>(null);

   const [searchQuery, setSearchQuery] =
      useState("");

   const filteredBuildings = useMemo(() => {

      if (!searchQuery.trim()) return [];

      return buildings.filter((building) =>
         building.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );

   }, [searchQuery]);

   function handleSelectBuilding(building: Building) {

      setSelectedBuilding(building);

      setSearchQuery("");

   }

   return (

      <div className="flex h-screen flex-col bg-slate-100">

         <NavigationBar

            searchQuery={searchQuery}

            setSearchQuery={setSearchQuery}

            searchResults={filteredBuildings}

            onSelectBuilding={handleSelectBuilding}

         />

         <main className="flex flex-1 gap-6 overflow-hidden p-6">

            <MapToolbars />

            <CampusMaps
               selectedBuilding={selectedBuilding}
               setSelectedBuilding={setSelectedBuilding}
            />

            <BuildingInfos
               building={selectedBuilding}
            />

         </main>

      </div>

   );

}