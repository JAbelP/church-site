import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Text from "../textComponents/text";
import LanguageSelector from "../flagComponents/flagSelector";
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

function Eventos({ eventName, eventTime, eventLocation, eventImage }) {
  debugger;
  return (
    <div className="flex flex-row">
      <LanguageSelector />
      <div className="w-[502px] h-[224px] relative">
        <Image src={eventImage} alt="Example" fill={true} />
      </div>
      <div className="ml-8">
        <div className={CopperplateBold.className}>
          <div className="text-2xl tracking-widest mb-4 w-[424px]">
{eventName}
          </div>
        </div>
        <div className="text-xl tracking-tight mb-4 w-[424px]">
          {eventTime}
        </div>
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
