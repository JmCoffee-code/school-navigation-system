import api from "./api";

class RouteService {

   async getShortestRoute(
      start: number,
      destination: number
   ) {

      return api.post(
         "/route",
         {
            start,
            destination,
         }
      );

   }

}

const routeService =
   new RouteService();

export default routeService;