import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-20 bg-[#10091C]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">{t('navProjects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <motion.div key={i} className="bg-[#1e1333] p-6 rounded-xl border border-[#A855F7]/20" whileHover={{y:-10}}>
              <h3 className="text-xl text-white mb-2">Proyecto {i}</h3>
              <p className="text-gray-400">Descripción provisional del proyecto {i}.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
