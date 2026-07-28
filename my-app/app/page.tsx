"use client";

import { useMemo, useState } from "react";

import NavigationBar from "@/components/Layout/NavigationBar";
import CampusExplorer from "@/components/Map/CampusExplorer";
import CampusMaps from "@/components/Map/CampusMaps";
import BuildingDetails from "@/components/Sidebar/BuildingDetails";

import { buildings } from "@/data/buildings";
import { Building } from "@/types/building";

export default function Home() {

   // ============================
   // Global Application State
   // ============================

   const [selectedBuilding, setSelectedBuilding] =
      useState<Building | null>(null);

   const [searchQuery, setSearchQuery] =
      useState("");

   const [selectedCategory, setSelectedCategory] =
      useState("All");

   const [favorites, setFavorites] =
      useState<number[]>([]);

   // ============================
   // Filtered Buildings
   // ============================

   const filteredBuildings = useMemo(() => {

      let results = buildings;

      // Category Filter

      if (selectedCategory !== "All") {

         results = results.filter(
            (building) =>
               building.category === selectedCategory
         );

      }

      // Search Filter

      if (searchQuery.trim() !== "") {

         results = results.filter((building) =>
            building.name
               .toLowerCase()
               .includes(searchQuery.toLowerCase())
         );

      }

      return results;

   }, [searchQuery, selectedCategory]);

   // ============================
   // Building Selection
   // ============================

   function handleSelectBuilding(building: Building) {

      setSelectedBuilding(building);

      setSearchQuery("");

   }

   // ============================
   // Favorites
   // ============================

   function toggleFavorite(id: number) {

      setFavorites((previous) =>

         previous.includes(id)
            ? previous.filter((favorite) => favorite !== id)
            : [...previous, id]

      );

   }

   return (

      <div className="flex h-screen flex-col bg-slate-100">

         {/* ================================= */}
         {/* Navigation Bar */}
         {/* ================================= */}

         <NavigationBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
         />

         {/* ================================= */}
         {/* Main Layout */}
         {/* ================================= */}

         <main className="flex flex-1 gap-6 overflow-hidden p-6">

            {/* Left */}

            <CampusExplorer
   buildings={filteredBuildings}
   selectedBuilding={selectedBuilding}
   onSelectBuilding={handleSelectBuilding}
   selectedCategory={selectedCategory}
   setSelectedCategory={setSelectedCategory}
   favorites={favorites}
   toggleFavorite={toggleFavorite}
   searchQuery={searchQuery}
   setSearchQuery={setSearchQuery}
/>

            {/* Center */}

            <CampusMaps

               selectedBuilding={selectedBuilding}

               setSelectedBuilding={handleSelectBuilding}

            />

            {/* Right */}

            <BuildingDetails

               building={selectedBuilding}

               favorites={favorites}

               toggleFavorite={toggleFavorite}

            />

         </main>

      </div>

   );

}