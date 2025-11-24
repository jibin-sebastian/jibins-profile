import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon, MenuIcon, XIcon, HomeIcon, Cpu, Brain, Cloud, Gauge, LineChart, ServerCog, Code2, Newspaper, BrainCircuitIcon } from 'lucide-react';
type TabType = 'about' | 'skills' | 'projects' | 'certifications' | 'ai-services' | 'contact';
interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}
const tabs: {
  id: TabType;
  label: string;
  icon?: React.ReactNode;
}[] = [{
  id: 'about',
  label: 'Home',
  icon: <HomeIcon size={18} />
}, {
  id: 'skills',
  label: 'Skills'
}, {
  id: 'projects',
  label: 'Projects'
}, {
  id: 'certifications',
  label: 'Certifications & Awards'
}, {
  id: 'ai-services',
  label: 'AI Services',
  icon: <BrainCircuitIcon size={18} />
}, {
  id: 'contact',
  label: 'Contact'
}];
const stackItems = [{
  label: 'Data Journalist',
  Icon: Newspaper
}, {
  label: 'Machine Learning',
  Icon: Cpu
}, {
  label: 'Deep Learning',
  Icon: Brain
}, {
  label: 'MLOps',
  Icon: ServerCog
}, {
  label: 'Predictive Maintenance Modeling',
  Icon: Gauge
}, {
  label: 'Predictive Analytics Modeling',
  Icon: LineChart
}, {
  label: 'Python',
  Icon: Code2
}, {
  label: 'Azure',
  Icon: Cloud
}];
export function Sidebar({
  activeTab,
  onTabChange
}: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleTabChange = (tab: TabType) => {
    onTabChange(tab);
    setIsMobileMenuOpen(false);
  };
  return <>
    {/* Mobile Header */}
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/image.png" alt="Jibin Sebastian" className="w-10 h-10 rounded-full object-cover border-2 border-slate-700" />
          <div>
            <h1 className="text-sm font-bold text-white">Jibin Sebastian</h1>
            <p className="text-xs text-slate-400">Data Scientist</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <motion.button onClick={() => handleTabChange('about')} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-2 text-slate-400 hover:text-blue-400 transition-colors" aria-label="Home">
            <HomeIcon size={20} />
          </motion.button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-400 hover:text-white transition-colors">
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-16" onClick={() => setIsMobileMenuOpen(false)}>
        <motion.div initial={{
          y: -20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} exit={{
          y: -20,
          opacity: 0
        }} className="p-6" onClick={e => e.stopPropagation()}>
          <nav className="space-y-2 mb-8">
            {tabs.map(tab => <button key={tab.id} onClick={() => handleTabChange(tab.id)} className="relative w-full text-left px-4 py-3 rounded-lg transition-colors">
              {activeTab === tab.id && <motion.div layoutId="activeMobileTab" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }} />}
              <span className={`relative z-10 font-medium flex items-center gap-2 ${activeTab === tab.id ? 'text-white' : 'text-slate-400'}`}>
                {tab.icon}
                {tab.label}
              </span>
            </button>)}
          </nav>

          <div className="flex justify-center gap-4">
            {[{
              Icon: SendIcon,
              href: '#',
              label: 'Telegram'
            }, {
              Icon: MailIcon,
              href: '#',
              label: 'Email'
            }, {
              Icon: LinkedinIcon,
              href: '#',
              label: 'LinkedIn'
            }, {
              Icon: GithubIcon,
              href: '#',
              label: 'GitHub'
            }].map(({
              Icon,
              href,
              label
            }) => <a key={label} href={href} className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors" aria-label={label}>
                <Icon size={18} />
              </a>)}
          </div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>

    {/* Desktop Sidebar */}
    <aside className="hidden lg:flex w-64 xl:w-80 bg-slate-950/50 backdrop-blur-xl border-r border-slate-800/50 flex-col p-6 xl:p-8">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="flex flex-col items-center mb-8">
        <motion.div whileHover={{
          scale: 1.05
        }} transition={{
          type: 'spring',
          stiffness: 300
        }} className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-50" />
          <img src="/image.png" alt="Jibin Sebastian" className="relative w-32 xl:w-40 h-32 xl:h-40 rounded-full object-cover border-4 border-slate-800" />
        </motion.div>

        <h1 className="text-xl xl:text-2xl font-bold text-white mb-2 text-center">
          Hi, I'm Jibin Sebastian
        </h1>

      </motion.div>

      <nav className="flex-1 space-y-2 mb-8">
        {tabs.map((tab, index) => <motion.button key={tab.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.1
        }} onClick={() => onTabChange(tab.id)} className="relative w-full text-left px-4 py-3 rounded-lg transition-colors group">
          {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} />}
          <span className={`relative z-10 font-medium transition-colors text-sm xl:text-base flex items-center gap-2 ${activeTab === tab.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
            {tab.icon}
            {tab.label}
          </span>
        </motion.button>)}
      </nav>

      <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="flex justify-center gap-3 xl:gap-4">
        {[{
          Icon: SendIcon,
          href: '#',
          label: 'Telegram'
        }, {
          Icon: MailIcon,
          href: '#',
          label: 'Email'
        }, {
          Icon: LinkedinIcon,
          href: '#',
          label: 'LinkedIn'
        }, {
          Icon: GithubIcon,
          href: '#',
          label: 'GitHub'
        }].map(({
          Icon,
          href,
          label
        }) => <motion.a key={label} href={href} whileHover={{
          scale: 1.1,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors" aria-label={label}>
            <Icon size={18} />
          </motion.a>)}
      </motion.div>
    </aside>

    {/* Mobile spacing */}
    <div className="lg:hidden h-16" />
  </>;
}
