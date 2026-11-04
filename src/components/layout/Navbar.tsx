import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#10091C]/80 backdrop-blur-md border-b border-[#A855F7]/20 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-wider">PATRICIA SÁEZ</div>
        <div className="flex gap-6 text-gray-300">
          {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#A855F7] transition-colors">{t(`nav${item}`)}</a>
          ))}
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="text-white font-bold">
            {lang.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
}
