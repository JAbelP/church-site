import React from "react";
import Image from "next/image";

function MiddleEyeCatch({ title, desc }) {
  return (
    <div className="text-black w-[400px] h-[376px] rounded-3xl ml-3" style={{ backgroundImage: "url('/middleEyeCatchPhoto/PeopleWorshiping.jpg')", backgroundSize: "450px 676px" }} >
      <div className="w-full h-full rounded-3xl pt-5 pl-5" style={{ backgroundColor: 'rgba(67, 56, 202, 0.5)' }}>
        <p className="text-4xl font-bold mb-5 opacity-100 text-white">{title}</p>
        <p className="font-medium text-3xl text-white">{desc}</p>
      </div>
    </div>
  );
}

export default MiddleEyeCatch;
