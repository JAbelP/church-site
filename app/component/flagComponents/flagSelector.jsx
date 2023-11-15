"use client";
import { useLanguageContext } from "./LanguageContext";

const LanguageSelector = () => {
  const { setLanguage } = useLanguageContext();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className=" flex gap-x-6">
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
