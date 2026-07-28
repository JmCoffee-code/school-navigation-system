import {
   Compass,
   LocateFixed,
   Minus,
   Plus,
   RotateCcw,
} from "lucide-react";

interface MapControlsProps {

   onZoomIn?: () => void;

   onZoomOut?: () => void;

   onLocate?: () => void;

   onReset?: () => void;

}

export default function MapControls({

   onZoomIn,

   onZoomOut,

   onLocate,

   onReset,

}: MapControlsProps) {

   return (

      <div
         className="
            absolute
            right-6
            top-1/2
            z-30
            -translate-y-1/2
         "
      >

         <div
            className="
               flex
               flex-col
               gap-3
               rounded-3xl
               border
               border-slate-200/80
               bg-white/90
               p-3
               shadow-xl
               backdrop-blur-xl
            "
         >

            <ControlButton
               tooltip="Zoom In"
               onClick={onZoomIn}
            >

               <Plus size={20} />

            </ControlButton>

            <ControlButton
               tooltip="Zoom Out"
               onClick={onZoomOut}
            >

               <Minus size={20} />

            </ControlButton>

            <div className="h-px bg-slate-200" />

            <ControlButton
               tooltip="Current Location"
               onClick={onLocate}
            >

               <LocateFixed size={20} />

            </ControlButton>

            <ControlButton
               tooltip="Reset View"
               onClick={onReset}
            >

               <RotateCcw size={20} />

            </ControlButton>

            <ControlButton tooltip="Compass">

               <Compass size={20} />

            </ControlButton>

         </div>

      </div>

   );

}

interface ControlButtonProps {

   children: React.ReactNode;

   tooltip: string;

   onClick?: () => void;

}

function ControlButton({

   children,

   tooltip,

   onClick,

}: ControlButtonProps) {

   return (

      <button

         title={tooltip}

         onClick={onClick}

         className="
            group
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            text-slate-600
            transition-all
            duration-200

            hover:scale-105
            hover:bg-green-600
            hover:text-white
            hover:shadow-lg

            active:scale-95
         "

      >

         {children}

      </button>

   );

}