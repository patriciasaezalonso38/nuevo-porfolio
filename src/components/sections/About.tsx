import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-[#10091C]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-4xl font-bold text-white mb-8" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}}>
          {t('navAbout')}
        </motion.h2>
        <p className="text-gray-300 max-w-2xl text-lg">
          [ESPACIO EDITABLE: Presentación personal, historia profesional, intereses, objetivos, motivación por la IA, visión de futuro.]
        </p>
      </div>
    </section>
  );
}
