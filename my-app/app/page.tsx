"use client";

import { useState } from "react";

import NavigationBar from "@/components/Layout/NavigationBar";
import MapToolbars from "@/components/Map/MapToolbars";
import CampusMaps from "@/components/Map/CampusMaps";
import BuildingInfos from "@/components/Map/BuildingInfos";

import { Building } from "@/types/building";

export default function Home() {

   const [selectedBuilding, setSelectedBuilding] =
      useState<Building | null>(null);

   return (
      <div className="h-screen flex flex-col bg-gray-100">

         <NavigationBar />

         <main className="flex flex-1 gap-5 p-5 overflow-hidden">

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