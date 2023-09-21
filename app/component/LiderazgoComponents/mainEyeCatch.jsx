import React from "react";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });
function MainEyeCatch({ title, names, imageLocation, altText }) {
  return (
    <div className="text-center my-16 ">
      <div className={ebG.className}>
        <div className="text-black flex flex-col">
          <div>
            <p className="text-5xl font-medium tracking-widest ">{title}</p>
          </div>
          <div className="mx-auto">
            {/* Use mx-auto class to center the image */}
            <Image className=" my-4 border-cyan-400 border-4" src={imageLocation} alt={altText} />
          </div>
          <div className="text-4xl font-normal tracking-widest ">{names}</div>
        </div>
      </div>
    </div>
  );
}

export default MainEyeCatch;
