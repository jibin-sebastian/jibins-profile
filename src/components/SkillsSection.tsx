import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DatabaseIcon, BrainCircuitIcon, ServerIcon, CodeIcon } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
interface SkillCardProps {
  title: string;
  skills: string[];
  delay: number;
  color: string;
  icon: React.ReactNode;
}
function SkillCard({
  title,
  skills,
  delay,
  color,
  icon
}: SkillCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay
  }} onHoverStart={() => setIsExpanded(true)} onHoverEnd={() => setIsExpanded(false)} className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300" style={{
      background: `linear-gradient(135deg, ${color}, transparent)`
    }} />

      <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 2xl:p-7 3xl:p-8 hover:border-slate-600/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{
          backgroundColor: `${color}20`
        }}>
            <div style={{
            color
          }}>
              {icon}
            </div>
          </div>
          <h3 className="text-lg sm:text-xl 2xl:text-2xl font-bold text-white">{title}</h3>
        </div>

        <motion.div initial={false} animate={{
        height: isExpanded ? 'auto' : 'auto'
      }} className="space-y-2">
          {skills.map((skill, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: -10
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.3,
          delay: delay + index * 0.05
        }} className="text-slate-300 text-xs sm:text-sm 2xl:text-base leading-relaxed">
              • {skill}
            </motion.div>)}
        </motion.div>
      </div>
    </motion.div>;
}
export function SkillsSection() {
  const { content } = useI18n();
  const categoryIcons = [<DatabaseIcon size={24} />, <BrainCircuitIcon size={24} />, <ServerIcon size={24} />, <CodeIcon size={24} />];
  const categoryColors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'];
  const skillCategories = content.skills.categories.map((cat, index) => ({
    title: cat.title,
    skills: cat.skills,
    icon: categoryIcons[index] ?? <CodeIcon size={24} />,
    color: categoryColors[index] ?? '#3b82f6'
  }));
  return <div>
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          {content.skills.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
        {skillCategories.map((category, index) => <SkillCard key={category.title} title={category.title} skills={category.skills} delay={0.1 + index * 0.1} color={category.color} icon={category.icon} />)}
      </div>
    </div>;
}