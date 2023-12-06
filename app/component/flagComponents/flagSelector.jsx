"use client";
import { useLanguageContext } from "./LanguageContext";

const LanguageSelector = () => {
  const { setLanguage } = useLanguageContext();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className=" bg-blue-500 z-20 p-3 rounded-lg flex flex-col fixed right-2 top-8 gap-x-6">
      <button
        onClick={() => {
          handleLanguageChange("pt");
        }}
      >
        🇧🇷
      </button>
      <button
        onClick={() => {
          handleLanguageChange("es");
        }}
      >
        🇪🇸
      </button>
      <button
        onClick={() => {
          handleLanguageChange("en");
        }}
      >
        🇺🇸
      </button>
    </div>
  );
};

export default LanguageSelector;
