"use client";

import { useMemo } from "react";

import CampusExplorer from "../components/Explorer/CampusExplorer";
import CampusMaps from "@/components/Map/CampusMaps";
import BuildingDetails from "@/components/Sidebar/BuildingDetails";

import { Building } from "@/types/building";

import { useCampusStore } from "@/store/useCampusStore";
import useBuildings from "../hooks/useBuildings";
import NavigationBar from "@/components/layout/NavigationBar";

export default function Home() {

   // ============================================
   // Buildings Hook
   // ============================================

   const {

      buildings,

      loading,

      error,

   } = useBuildings();

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

      buildings,

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
   // Loading State
   // ============================================

   if (loading) {

      return (

         <div
            className="
               flex
               h-screen
               items-center
               justify-center
               bg-slate-100
            "
         >

            <div className="text-center">

               <h2
                  className="
                     text-2xl
                     font-bold
                     text-green-700
                  "
               >

                  Loading Buildings...

               </h2>

               <p className="mt-2 text-slate-500">

                  Please wait.

               </p>

            </div>

         </div>

      );

   }

   // ============================================
   // Error State
   // ============================================

   if (error) {

      return (

         <div
            className="
               flex
               h-screen
               items-center
               justify-center
               bg-slate-100
            "
         >

            <div className="text-center">

               <h2
                  className="
                     text-2xl
                     font-bold
                     text-red-600
                  "
               >

                  Failed to Load Buildings

               </h2>

               <p className="mt-2 text-slate-500">

                  {error}

               </p>

            </div>

         </div>

      );

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

            {/* Sidebar */}

            <BuildingDetails

               building={selectedBuilding}

               favorites={favorites}

               toggleFavorite={toggleFavorite}

            />

         </main>

      </div>

   );

}