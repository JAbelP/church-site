import React from "react";
import Link from "next/link";
import  localFont  from 'next/font/local';


// Load the font and assign it to a constant in the module scope
const TrajanProFont = localFont( { src: '../../../font/TrajanProR.ttf'});

function Header() {
  const headerTitles = [
    { Name: "Quienes Somos", Link: "/QuienesSomos" },
    { Name: "Liderazgo", Link: "/Liderazgo" },
    { Name: "Ministerios", Link: "/Ministerios" },
    { Name: "Eventos", Link: "/Eventos" },
    { Name: "Sermones", Link: "/Sermones" },
    { Name: "Ofrenda", Link: "/Ofrenda" },
  ];

  return (
    <div className="flex justify-center my-8">
      <div className="gap-9 flex flex-row">
        {headerTitles.map((item, index) => (
          <Link key={index} href={item.Link}>
          <div className={TrajanProFont.className}>
            <p className={`text-black text-3xl font-bold font-[Trajan Pro] underline capitalize tracking-widest`}>
              {item.Name}
            </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
