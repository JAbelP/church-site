import React from "react";
import Image from "next/image";

function SubEyeCatch({ names, imageLocation, altText }) {
  return (
    <div className="text-black relative">
      <div>
        <div className="h-[500px] lg:w-[500px] w-auto border-4 border-black relative">
          <Image src={imageLocation} alt={altText} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="w-64 text-center text-3xl tracking-widest mx-auto mt-4">
        <p>{names}</p>
      </div>
    </div>
  );
}

export default SubEyeCatch;
