import { Building } from "@/types/building";

export const buildings: Building[] = [
   {
      id: 1,
      name: "Main Building",
      category: "Academic",
      floors: 3,
      rooms: 28,
      description: "Administration offices and classrooms.",
      x: "42%",
      y: "38%",
   },

   {
      id: 2,
      name: "Library",
      category: "Academic",
      floors: 2,
      rooms: 14,
      description: "Books, study areas, and computer resources.",
      x: "62%",
      y: "28%",
   },

   {
      id: 3,
      name: "Gymnasium",
      category: "Sports",
      floors: 1,
      rooms: 4,
      description: "Indoor sports and university events.",
      x: "25%",
      y: "72%",
   },

   {
      id: 4,
      name: "Cafeteria",
      category: "Facility",
      floors: 1,
      rooms: 2,
      description: "Food court for students and staff.",
      x: "67%",
      y: "60%",
   },

   {
      id: 5,
      name: "Computer Laboratory",
      category: "Academic",
      floors: 2,
      rooms: 8,
      description: "Programming and networking laboratory.",
      x: "53%",
      y: "52%",
   },
];