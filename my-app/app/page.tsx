"use client";

import { useMemo } from "react";

import NavigationBar from "@/components/Layout/NavigationBar";
import CampusExplorer from "@/components/Explorer/CampusExplorer";
import CampusMaps from "@/components/Map/CampusMaps";
import BuildingDetails from "@/components/Sidebar/BuildingDetails";

import { buildings } from "@/data/buildings";
import { Building } from "@/types/building";

import { useCampusStore } from "@/store/useCampusStore";

export default function Home() {

   // ============================================
   // Global Store
   // ============================================

   const {

      selectedBuilding,

      setSelectedBuilding,

      searchQuery,

      setSearchQuery,

      selectedCategory,

      setSelectedCategory,

      favorites,

      toggleFavorite,

   } = useCampusStore();

   // ============================================
   // Filter Buildings
   // ============================================

   const filteredBuildings = useMemo(() => {

      let results = buildings;

      if (selectedCategory !== "All") {

         results = results.filter(

            (building) =>

               building.category === selectedCategory

         );

      }

      if (searchQuery.trim() !== "") {

         results = results.filter(

            (building) =>

               building.name
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())

         );

      }

      return results;

   }, [

      searchQuery,

      selectedCategory,

   ]);

   // ============================================
   // Event Handlers
   // ============================================

   function handleSelectBuilding(
      building: Building
   ) {

      setSelectedBuilding(building);

   }

   // ============================================
   // Render
   // ============================================

   return (

      <div className="flex h-screen flex-col bg-slate-100">

         {/* Navigation */}

         <NavigationBar

            searchQuery={searchQuery}

            setSearchQuery={setSearchQuery}

         />

         {/* Main */}

         <main
            className="
               flex
               flex-1
               gap-6
               overflow-hidden
               p-6
            "
         >

            {/* Explorer */}

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

            {/* Map */}

            <CampusMaps

               buildings={filteredBuildings}

               selectedBuilding={selectedBuilding}

               setSelectedBuilding={handleSelectBuilding}

            />

            {/* Details */}

            <BuildingDetails

               building={selectedBuilding}

               favorites={favorites}

               toggleFavorite={toggleFavorite}

            />

         </main>

      </div>

   );

}