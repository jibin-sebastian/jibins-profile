import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { AIServicesSection } from './components/AIServiceSection';
type TabType = 'about' | 'skills' | 'projects' | 'certifications' | 'ai-services' | 'contact';
export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  useEffect(() => {
    const validTabs: TabType[] = ['about', 'skills', 'projects', 'certifications', 'ai-services', 'contact'];
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '') as TabType;
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'certifications':
        return <CertificationsSection />;
      case 'ai-services':
        return <AIServicesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };
  return <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }} className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 3xl:p-24 4xl:p-28 max-w-[1600px] 2xl:max-w-[1760px] 3xl:max-w-[2000px] 4xl:max-w-[2240px] mx-auto">
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>;
}
