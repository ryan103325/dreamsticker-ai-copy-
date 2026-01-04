import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, LanguageCode } from './i18n';

type LanguageContextType = {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    t: (key: string) => string; // Allow string for flexibility, though strictly typed is better
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<LanguageCode>('zh');

    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = translations[language];
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
