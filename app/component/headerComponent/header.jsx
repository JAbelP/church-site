"use client";
import React from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import { Hamburger } from "../icons/hamburger";
import Text from "../textComponents/text";
// Load the font and assign it to a constant in the module scope
const TrajanProFont = localFont({ src: "../../../font/TrajanProR.ttf" });

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const headerTitles = [
    { Name: "Quienes Somos", Link: "/QuienesSomos" },
    { Name: "Liderazgo", Link: "/Liderazgo" },
    { Name: "Ministerios", Link: "/Ministerios" },
    { Name: "Eventos", Link: "/Eventos" },
    { Name: "Sermones", Link: "/Sermones" },
    { Name: "Ofrenda", Link: "/Ofrenda" },
  ];

  return (
    <div>
      {/* Full Sized Header */}
      <div className="hidden lg:block mx-auto">
        <div className="flex justify-center my-8">
          <div className="gap-9 flex flex-row">
            {headerTitles.map((item, index) => (
              <Link key={index} href={item.Link}>
                <div className={TrajanProFont.className}>
                  <p
                    className={`text-black text-3xl font-bold font-[Trajan Pro] underline capitalize tracking-widest`}
                  >
                    <Text aText={item.Name} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Full Sized Header */}
      <div
        className="absolute top-[3.5rem] visible lg:invisible z-30"
        style={{ right: "1.5rem", top: "38px" }}
      >
        <button onClick={handleMenuClick}>
          <Hamburger />
        </button>
      </div>
      {/* Tray */}
      <div
        className={`fixed w-2/3 h-full bg-blue-500 right-0 top-0 duration-300 z-20 transition-transform transform ${
          menuOpen ? "-translate-x-0" : "translate-x-full"
        } text-center text-5xl pt-36`}
      >
        <ul>
          <li className="pb-10">
            <Link href={"/"}>
              <div onClick={handleMenuClick}>
                <Text aText={"Casa"} />
              </div>
            </Link>
          </li>

          <li className="pb-10">
            <Link href={"/QuienesSomos"}>
              <div onClick={handleMenuClick}>
                <Text aText={"Quienes Somos"} />
              </div>
            </Link>
          </li>

          <li className="pb-10">
            <Link href={"/Liderazgo"}>
              <div onClick={handleMenuClick}>
                <Text aText={"Liderazgo"} />
              </div>
            </Link>
          </li>

          <li className="pb-10">
            <Link href={"/Ministerios"}>
              <div onClick={handleMenuClick}>
                <Text aText={"Ministerios"} />
              </div>
            </Link>
          </li>

          <li className="pb-10">
            <Link href={"/Sermones"}>
              <div onClick={handleMenuClick}>
                <Text aText={"Sermones"} />
              </div>
            </Link>
          </li>

          <li className="pb-10">
            <Link href={"/Ofrenda"}>
              <div onClick={handleMenuClick}>
                <Text aText={"Ofrenda"} />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div
        onClick={handleMenuClick}
        className={`fixed w-1/3 h-full bg-blue-950 opacity-75 left-0 top-0 duration-300 z-20 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } text-center text-5xl pt-36`}
      ></div>
      {/* tray */}
    </div>
  );
}

export default Header;
