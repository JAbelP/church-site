import React from "react";
import localFont from "next/font/local";
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

function Eventos({ eventName, eventTime, eventLocation }) {
  return (
    <div className="flex flex-row">
      <div className="w-[502px] h-[224px] bg-red-600"></div>
      <div className="ml-8">
        <div className={CopperplateBold.className}>
          <p className="text-2xl tracking-widest mb-4 w-[424px]">{eventName}</p>
        </div>
        <p className="text-xl tracking-tight mb-4 w-[424px]">{eventTime}</p>
        {eventLocation && (
          <p className="text-xl tracking-tight mb-4 w-[424px]">{eventLocation}</p>
        )}
      </div>
    </div>
  );
}

export default Eventos;
