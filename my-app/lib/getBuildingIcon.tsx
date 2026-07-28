import {
   Building2,
   BookOpen,
   Monitor,
   Dumbbell,
   Utensils,
   Church,
   Hospital,
   Car,
   Briefcase,
   LucideIcon,
} from "lucide-react";

export default function getBuildingIcon(
   icon: string
): LucideIcon {

   switch (icon) {

      case "library":
         return BookOpen;

      case "computer":
         return Monitor;

      case "sports":
         return Dumbbell;

      case "food":
         return Utensils;

      case "chapel":
         return Church;

      case "hospital":
         return Hospital;

      case "parking":
         return Car;

      case "office":
         return Briefcase;

      case "building":
      default:
         return Building2;

   }

}