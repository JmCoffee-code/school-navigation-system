export interface Building {

   id: number;

   name: string;

   category: string;

   icon: string;

   status: "Open" | "Closed";

   location: string;

   floors: number;

   rooms: number;

   capacity: number;

   facilities: string[];

   description: string;

   x: number;

   y: number;

}