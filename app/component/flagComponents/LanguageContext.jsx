'use client';

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({})

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const translate = (key) =>{

        const translations = {

            en: {
                Liderazgo: 'Leadership',
                pastores: "Pastors",
                Decons:'Decons',
                'pastores Asociados': 'Associate Pastors'
            },
            es: {
                Liderazgo: 'Liderazgo',
                pastores: "Pastores",
                Decons:'Diáconos',
                'pastores Asociados': 'Associate Pastores'
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