'use client';

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({})

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const translate = (key) =>{

        const translations = {

            en: {
                Liderazgo: 'Leadership',
                pastores: "Pastors",
                Decons:'Decons',
                'pastores Asociados': 'Associate Pastors',
                // Ministeros
                Ministerios:'Minsistries',
                Evangelismo:'Evenglism',
                'ADORACIÓN Y ALABANZAS' : 'WORSHIP AND PRAISE',
                "Soy Nuevo": 'Join Us Today',
                'CÉLULAS GRUPOS PEQUEÑOS SALUDABLES (GPS)':'Small Health Groups',
                'EDUCACIÓN CRISTIANA':'CHRISTIAN EDUCATION',
                'MISIONES':'MISSIONS',
                'ORACIÓN':'PRAYER',
                'CONSEJERÍA PASTORAL':'PASTORAL COUNSELING',
                'MINISTERIO DE PAREJAS':'COUPLES MINISTRY',
                'MINISTERIO DE HOMBRES':'MEN\'S MINISTRY',
                'MINISTERIO DE MUJERES':'WOMEN\'S MINISTRY',
                'MINISTERIO DE JÓVENES':'TEENS\'S MINISTRY',
                'MINISTERIO DE NIÑOS':'CHILDREN\'S MINISTRY',
                // Ministeros
                
            },
            es: {
                Liderazgo: 'Liderazgo',
                pastores: "Pastores",
                Decons:'Diáconos',
                'pastores Asociados': 'Associate Pastores',
                Ministerios:'Ministerios',
                Evangelismo:'Evangelismo',
                'ADORACIÓN Y ALABANZAS' : 'ADORACIÓN Y ALABANZAS',
                "Soy Nuevo": 'Soy Nuevo',
                'CÉLULAS GRUPOS PEQUEÑOS SALUDABLES' : 'CÉLULAS GRUPOS PEQUEÑOS SALUDABLES',
                'EDUCACIÓN CRISTIANA':'EDUCACIÓN CRISTIANA',
                'MISIONES':'MISIONES',
                'ORACIÓN':'ORACIÓN',
                'CONSEJERÍA PASTORAL':'CONSEJERÍA PASTORAL',
                'MINISTERIO DE PAREJAS':'MINISTERIO DE PAREJAS',
                'MINISTERIO DE HOMBRES':'MINISTERIO DE HOMBRES',
                'MINISTERIO DE MUJERES':'MINISTERIO DE MUJERES',
                'MINISTERIO DE JÓVENES':'MINISTERIO DE JÓVENES',
                'MINISTERIO DE NIÑOS':'MINISTERIO DE JÓVENES',
                
                
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