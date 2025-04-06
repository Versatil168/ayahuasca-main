// LanguageContext.tsx

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'pt';

interface Translation {
  navbar: {
    home: string;
    about: string;
    gallery: string;
    services: string;
    contact: string;
    book: string;
  };
  // Otros campos de traducción aquí
}

interface TranslationContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translation['navbar']) => string;
}

const translations: Record<Language, Translation> = {
  es: {
    navbar: {
      home: 'Inicio',
      about: 'Sobre nosotros',
      gallery: 'Galería',
      services: 'Servicios',
      contact: 'Contacto',
      book: 'Reservar',
    },
  },
  en: {
    navbar: {
      home: 'Home',
      about: 'About us',
      gallery: 'Gallery',
      services: 'Services',
      contact: 'Contact',
      book: 'Book',
    },
  },
  pt: {
    navbar: {
      home: 'Início',
      about: 'Sobre nós',
      gallery: 'Galeria',
      services: 'Serviços',
      contact: 'Contato',
      book: 'Reservar',
    },
  },
};

const LanguageContext = createContext<TranslationContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode; // Aquí definimos el tipo `children`
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('es');

  const t = (key: keyof Translation['navbar']) => {
    return translations[currentLang].navbar[key];
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage: setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
