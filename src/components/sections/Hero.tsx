import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AbstractShape from '../canvas/AbstractShape';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-[#10091C] px-6 relative">
      <div className="absolute inset-0 z-0">
        <AbstractShape />
      </div>
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">{t('heroTitle')}</h1>
        <h2 className="text-2xl md:text-4xl text-[#F0ABFC] mb-4">{t('heroSubtitle')}</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">{t('heroSpecialty')}</p>
        <p className="text-xl md:text-2xl text-white italic mb-12">«{t('heroSlogan')}»</p>
        <div className="flex gap-4 justify-center">
            <button className="bg-[#A855F7] text-white px-8 py-3 rounded-full hover:bg-[#F0ABFC] transition-colors">EXPLORAR PROYECTOS</button>
            <button className="border border-[#A855F7] text-white px-8 py-3 rounded-full hover:bg-[#A855F7]/20 transition-colors">CONOCER MI PERFIL</button>
        </div>
      </div>
    </section>
  );
}
