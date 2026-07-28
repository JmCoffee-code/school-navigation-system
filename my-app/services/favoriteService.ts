import api from "./api";

class FavoriteService {

   async getFavorites(): Promise<number[]> {

      return api.get<number[]>(
         "/favorites"
      );

   }

   async addFavorite(
      buildingId: number
   ) {

      return api.post(
         "/favorites",
         {
            buildingId,
         }
      );

   }

}

const favoriteService =
   new FavoriteService();

export default favoriteService;