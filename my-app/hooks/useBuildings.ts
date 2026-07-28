import { useEffect, useState } from "react";

import { Building } from "@/types/building";
import { buildings as mockBuildings } from "@/data/buildings";

import buildingService from "@/services/buildingService";

export default function useBuildings() {

   const [buildings, setBuildings] =
      useState<Building[]>([]);

   const [loading, setLoading] =
      useState(true);

   const [error, setError] =
      useState<string | null>(null);

   useEffect(() => {

      async function loadBuildings() {

         try {

            /**
             * ----------------------------------
             * TEMPORARY
             * ----------------------------------
             *
             * Replace this with:
             *
             * const data =
             * await buildingService.getBuildings();
             *
             * once the backend is finished.
             */

            setBuildings(mockBuildings);

            // const data =
            // await buildingService.getBuildings();
            //
            // setBuildings(data);

         }

         catch {

            setError(
               "Unable to load buildings."
            );

         }

         finally {

            setLoading(false);

         }

      }

      loadBuildings();

   }, []);

   return {

      buildings,

      loading,

      error,

   };

}