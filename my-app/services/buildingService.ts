import api from "./api";
import { Building } from "@/types/building";

class BuildingService {

   async getBuildings(): Promise<Building[]> {

      return api.get<Building[]>("/buildings");

   }

   async getBuilding(
      id: number
   ): Promise<Building> {

      return api.get<Building>(
         `/buildings/${id}`
      );

   }

}

const buildingService =
   new BuildingService();

export default buildingService;