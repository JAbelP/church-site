'use client';

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({})

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const translate = (key) =>{

        const translations = {

            en: {
                Liderazgo: 'Leadership',
                pastores: "Pastors"
            },
            es: {
                Liderazgo: 'Liderazgo',
                pastores: "pastores"
            }
        };
        console.log(translations[language][key])
        return translations[language][key] || key;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    )
};

export const useLanguageContext = () => useContext(LanguageContext);