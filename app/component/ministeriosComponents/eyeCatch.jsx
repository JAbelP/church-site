import React from "react";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });

function EyeCatch({ title, imageLocation, desc }) {
  return (
    <div className="text-black mb-8">
      <div className={ebG.className}>
        <div className="mb-2  text-black text-3xl font-medium tracking-[2.55px] capitalize">
          {title}
        </div>
      </div>
      <div className="w-[1026px] h-[240px] bg-red-600 border-8 border-black mb-2" />
      <div className="w-[1026px] text-xl font-medium leading-[31px] tracking-wider text-center">
        {desc}
      </div>
    </div>
  );
}

export default EyeCatch;
