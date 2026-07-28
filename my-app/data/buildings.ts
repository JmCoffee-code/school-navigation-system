import { Building } from "@/types/building";

export const buildings: Building[] = [
   {
   id: 1,

   name: "Library",

   category: "Academic",

   icon: "library",

   status: "Open",

   location: "North Wing",

   floors: 2,

   rooms: 14,

   capacity: 120,

   facilities: [
      "Wi-Fi",
      "Air Conditioning",
      "Study Area"
   ],

   description:
      "The central library provides books, research resources, and quiet study spaces for students.",

   x: 42,

   y: 36,
}
];