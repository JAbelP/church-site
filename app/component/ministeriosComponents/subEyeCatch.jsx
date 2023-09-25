import React from "react";
import Image from "next/image";

function SubEyeCatch({ names, imageLocation, altText }) {
  return (
    <div className="text-black">
      <div>
        <Image src={imageLocation} alt={altText} />
      </div>
      <div className="w-[295px] text-center text-3xl tracking-widest">
        <p>{names}</p>
      </div>
    </div>
  );
}

export default SubEyeCatch;
