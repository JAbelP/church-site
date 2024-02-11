"use client";
import { useLanguageContext } from "./LanguageContext";
import Image from "next/image";
import BrazilImage from "../../../public/Language Icons/brazil.png";
import EnglishImage from "../../../public/Language Icons/usa.png";
import SpanishImage from "../../../public/Language Icons/spain.png";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { usePathname, useRouter } from "../../../navigation";

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className=" bg-blue-500 z-20 p-3 rounded-lg flex flex-col fixed lg:right-2 lg:top-8 top-10 gap-x-6">
      <button
        onClick={() => {
          router.replace(pathname, { locale: "BR" });

          // handleLanguageChange("pt");
        }}
      >
        <Image src={BrazilImage} />
      </button>
      <button
        onClick={() => {
          // handleLanguageChange("es");
          router.replace(pathname, { locale: "ES" });
        }}
      >
        <Image src={SpanishImage} />
      </button>
      <button
        onClick={() => {
          // handleLanguageChange("en");
          router.replace(pathname, { locale: "EU" });
        }}
      >
        <Image src={EnglishImage} />
      </button>
    </div>
  );
};

export default LanguageSelector;
