"use client";
import { useLanguageContext } from "./LanguageContext";
import Image from "next/image";
import BrazilImage from "../../../public/Language Icons/brazil.png"
import EnglishImage from "../../../public/Language Icons/usa.png"
import SpanishImage from "../../../public/Language Icons/spain.png"

const LanguageSelector = () => {
  const { setLanguage } = useLanguageContext();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className=" bg-blue-500 z-20 p-3 rounded-lg flex flex-col fixed lg:right-2 lg:top-8 top-10 gap-x-6">
      <button
        onClick={() => {
          handleLanguageChange("pt");
        }}
      >
        <Image src={BrazilImage}/>
      </button>
      <button
        onClick={() => {
          handleLanguageChange("es");
        }}
      >
        <Image src={SpanishImage}/>
      </button>
      <button
        onClick={() => {
          handleLanguageChange("en");
        }}
      >
      <Image src={EnglishImage}/>
      </button>
    </div>
  );
};

export default LanguageSelector;
