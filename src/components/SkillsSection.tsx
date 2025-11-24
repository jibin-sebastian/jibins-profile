import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DatabaseIcon, BarChart3Icon, BrainCircuitIcon, CpuIcon, NetworkIcon, SparklesIcon, ServerIcon, CloudIcon, ContainerIcon, CodeIcon, GitBranchIcon, TerminalIcon } from 'lucide-react';
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

      <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:border-slate-600/50 transition-all duration-300">
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
          <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
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
        }} className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              • {skill}
            </motion.div>)}
        </motion.div>
      </div>
    </motion.div>;
}
export function SkillsSection() {
  const skillCategories = [{
    title: 'Data Science Toolkit',
    color: '#3b82f6',
    icon: <DatabaseIcon size={24} />,
    skills: ['Python (Scikit-learn, Pandas, Numpy, Keras)', 'Visualizations (Seaborn, Tableau)', 'Exploratory Data Analysis (EDA)', 'Extract-Transform-Load Pipelines (ETL)', 'Feature Engineering', 'Text Analysis: NLP, LLM (Mistral)']
  }, {
    title: 'Machine Learning Algorithms',
    color: '#8b5cf6',
    icon: <BrainCircuitIcon size={24} />,
    skills: ['Scikit-Learn, Random Forest', 'Naive Bayes, Support Vector Machine', 'Clustering', 'Linear and Logistic Regression, XGBOOST (Gradient Boosting)', 'Neural Networks (Tensorflow, CNN, ANN)']
  }, {
    title: 'Data Engineering Toolkit',
    color: '#06b6d4',
    icon: <ServerIcon size={24} />,
    skills: ['REST API with Flask', 'FAST API', 'Docker, Kubernetes', 'MLOps', 'PostgreSQL (basic)']
  }, {
    title: 'General',
    color: '#10b981',
    icon: <CodeIcon size={24} />,
    skills: ['Agile Scrum Methodology', 'GIT and DVC (Data Version Control)', 'Visual Studio Code IDE', 'Windows & Linux, Jupyter Notebooks, Unix', 'React JS (Basics)']
  }];
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
          Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => <SkillCard key={category.title} title={category.title} skills={category.skills} delay={0.1 + index * 0.1} color={category.color} icon={category.icon} />)}
      </div>
    </div>;
}