import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Skills() {
  const { t } = useLanguage();
  const skills = {
    IA: ['ChatGPT', 'Google AI Studio', 'Gemini'],
    Voz: ['ElevenLabs'],
    Creatividad: ['Canva', 'Leonardo AI']
  };

  return (
    <section id="skills" className="py-20 bg-[#10091C]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">{t('navSkills')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} className="bg-[#1e1333] p-6 rounded-xl border border-[#A855F7]/20" whileHover={{scale:1.05}}>
              <h3 className="text-2xl text-[#F0ABFC] mb-4">{category}</h3>
              <ul className="text-gray-300">
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
