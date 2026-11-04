import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    heroTitle: 'PATRICIA SÁEZ',
    heroSubtitle: 'DIGITAL CREATOR',
    heroSpecialty: 'Inteligencia Artificial · Creatividad · Innovación Digital',
    heroSlogan: 'Transformando ideas en experiencias digitales.',
    navHome: 'Inicio',
    navAbout: 'Sobre mí',
    navSkills: 'Habilidades',
    navProjects: 'Proyectos',
    navEducation: 'Formación',
    navContact: 'Contacto',
    navCV: 'CV'
  },
  en: {
    heroTitle: 'PATRICIA SÁEZ',
    heroSubtitle: 'DIGITAL CREATOR',
    heroSpecialty: 'Artificial Intelligence · Creativity · Digital Innovation',
    heroSlogan: 'Transforming ideas into digital experiences.',
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navEducation: 'Education',
    navContact: 'Contact',
    navCV: 'CV'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('es');
  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
