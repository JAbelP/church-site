"use client"
import React, { useState } from "react";
import Image from "next/image";

function MiddleEyeCatch({ title, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyles = {
    width: "400px",
    height: "376px",
    backgroundImage: "url('/middleEyeCatchPhoto/PeopleWorshiping.jpg')",
    backgroundSize: isHovered ? "750px 976px" : "450px 576px",
    backgroundPosition: isHovered ? "0px -330px" : "0px -130px",
    borderRadius: "3rem",
    marginLeft: "3px",
    transition: "background-size 0.3s, background-position 0.3s",
  };

  const overlayStyles = {
    width: "100%",
    borderRadius: "3rem",
    height: "100%",
    backgroundColor: "rgba(67, 56, 202, 0.5)",
  };

  const backGroundText = {
    backdropFilter: "blur(10px)", // Adjust the blur value as needed
    borderRadius: "1rem", // Adjust the radius as needed to control the roundness of the blur
    opacity: isHovered ? .5 : 0, // Make it visible when isHovered is true, otherwise set opacity to 0
  };

  return (
    <div
      className={`text-black`}
      style={containerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full rounded-3xl pt-5 pl-5 relative" style={overlayStyles}>
        <p className="text-4xl font-bold mb-5 opacity-100 text-white absolute" style={backGroundText}>{title}</p>
        <p className="text-4xl font-bold mb-5 opacity-100 text-white">{title}</p>
        <p className="font-medium text-3xl text-white">{desc}</p>
      </div>
    </div>
  );
}

export default MiddleEyeCatch;
