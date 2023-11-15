"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({});

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const translate = (key) => {
    const translations = {
      en: {
        Liderazgo: "Leadership",
        pastores: "Pastors",
        Decons: "Decons",
        "pastores Asociados": "Associate Pastors",
        // Ministeros
        Ministerios: "Minsistries",
        Evangelismo: "Evenglism",
        "ADORACIÓN Y ALABANZAS": "WORSHIP AND PRAISE",
        "Soy Nuevo": "Join Us Today",
        "CÉLULAS GRUPOS PEQUEÑOS SALUDABLES (GPS)": "Small Health Groups",
        "EDUCACIÓN CRISTIANA": "CHRISTIAN EDUCATION",
        MISIONES: "MISSIONS",
        ORACIÓN: "PRAYER",
        "CONSEJERÍA PASTORAL": "PASTORAL COUNSELING",
        "MINISTERIO DE PAREJAS": "COUPLES MINISTRY",
        "MINISTERIO DE HOMBRES": "MEN'S MINISTRY",
        "MINISTERIO DE MUJERES": "WOMEN'S MINISTRY",
        "MINISTERIO DE JÓVENES": "TEENS'S MINISTRY",
        "MINISTERIO DE NIÑOS": "CHILDREN'S MINISTRY",
        // QuienesSomos
        "Quienes Somos?": "Who Are we?",
        MISIÓN: "Our Mission",
        VISIÓN: "Our Vision",
        "Somos una Iglesia que Ama y Restaura":
          "We are a Church that Loves and Restores",
        "Evangelizar y Discipular a través del Sistema de Grupos Familiares la ciudad, mediante la formación de un Ministerio Hispano, haciendo de cada cristiano un discípulo.":
          "Evangelize and Disciple through the city's Family Group System, through the formation of a Hispanic Ministry, making each Christian a disciple.",
        // title bar
        "Quienes Somos": "About Us",
        Eventos: "Events",
        Sermones: "Sermons",
        Ofrenda: "Offerings",
        Casa: "Home",
        // Footer
        "Domingo 1:30 PM": "Sunday 1:30 PM",
        "Viernes 7:30 PM": "Friday 7:30 PM",
        "Horas": "Hours",
        "Visítanos": "Visit Us",
      },
      es: {
        Liderazgo: "Liderazgo",
        pastores: "Pastores",
        Decons: "Diáconos",
        "pastores Asociados": "Associate Pastores",
        // Ministeros

        Ministerios: "Ministerios",
        Evangelismo: "Evangelismo",
        "ADORACIÓN Y ALABANZAS": "ADORACIÓN Y ALABANZAS",
        "Soy Nuevo": "Soy Nuevo",
        "CÉLULAS GRUPOS PEQUEÑOS SALUDABLES":
          "CÉLULAS GRUPOS PEQUEÑOS SALUDABLES",
        "EDUCACIÓN CRISTIANA": "EDUCACIÓN CRISTIANA",
        MISIONES: "MISIONES",
        ORACIÓN: "ORACIÓN",
        "CONSEJERÍA PASTORAL": "CONSEJERÍA PASTORAL",
        "MINISTERIO DE PAREJAS": "MINISTERIO DE PAREJAS",
        "MINISTERIO DE HOMBRES": "MINISTERIO DE HOMBRES",
        "MINISTERIO DE MUJERES": "MINISTERIO DE MUJERES",
        "MINISTERIO DE JÓVENES": "MINISTERIO DE JÓVENES",
        "MINISTERIO DE NIÑOS": "MINISTERIO DE JÓVENES",
        // QuienesSomos
        "Quienes Somos?": "Who Are we?",
        MISIÓN: "MISIÓN",
        VISIÓN: "VISIÓN",
      },
    };
    console.log(translations[language][key]);
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
