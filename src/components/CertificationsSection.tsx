import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const certifications = ["/cert1.png", "/cert2.png", "/cert3.png", "/cert3.png", "/cert4.png", "/cert5.png", "/cert6.png", "/cert7.png"];
export function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex(prev => (prev + 1) % certifications.length);
  };
  const previous = () => {
    setCurrentIndex(prev => (prev - 1 + certifications.length) % certifications.length);
  };
  return <div>
    <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="mb-12">
      <h2 className="text-4xl font-bold text-white mb-2">
        Certifications & Awards
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
    </motion.div>

    <div className="relative max-w-4xl mx-auto">
      <div className="relative aspect-[4/3] bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img key={currentIndex} src={certifications[currentIndex]} alt={`Certification ${currentIndex + 1}`} initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.95
          }} transition={{
            duration: 0.3
          }} className="w-full h-full object-contain p-8" />
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-8">
        <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }} onClick={previous} className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center text-white border border-slate-700/50 hover:border-blue-500/50 transition-all">
          <ChevronLeftIcon size={24} />
        </motion.button>

        <div className="flex gap-2">
          {certifications.map((_, index) => <motion.button key={index} whileHover={{
            scale: 1.2
          }} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-blue-500 w-8' : 'bg-slate-600 hover:bg-slate-500'}`} />)}
        </div>

        <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }} onClick={next} className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center text-white border border-slate-700/50 hover:border-blue-500/50 transition-all">
          <ChevronRightIcon size={24} />
        </motion.button>
      </div>
    </div>
  </div>;
}