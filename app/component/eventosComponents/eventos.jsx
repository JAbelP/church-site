import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

function Eventos({ eventName, eventTime, eventLocation, eventImage }) {

  debugger;
  return (
    <div className="flex flex-row">
      <div className="w-[502px] h-[224px] relative">
        <Image src={eventImage} alt="Example" fill={true} />
      </div>
      <div className="ml-8">
        <div className={CopperplateBold.className}>
          <p className="text-2xl tracking-widest mb-4 w-[424px]">{eventName}</p>
        </div>
        <p className="text-xl tracking-tight mb-4 w-[424px]">{eventTime}</p>
        {eventLocation && (
          <p className="text-xl tracking-tight mb-4 w-[424px]">
            {eventLocation}
          </p>
        )}
      </div>
    </div>
  );
}

export default Eventos;
