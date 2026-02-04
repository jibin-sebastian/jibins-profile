import { motion } from 'framer-motion';
import { GithubIcon } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
interface ProjectCardProps {
  title: string;
  description: string;
  delay: number;
  githubUrl?: string;
  githubButtonLabel: string;
}
function ProjectCard({
  title,
  description,
  delay,
  githubUrl,
  githubButtonLabel
}: ProjectCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay
  }} whileHover={{
    y: -5
  }} className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 2xl:p-7 3xl:p-8 hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-300" />

      <div className="relative">
        <h3 className="text-xl 2xl:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors whitespace-pre-line">
          {title}
        </h3>

        <p className="text-slate-300 text-sm 2xl:text-base leading-relaxed mb-6 whitespace-pre-line">
          {description}
        </p>

        {githubUrl && <motion.a href={githubUrl} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
            <GithubIcon size={18} />
            {githubButtonLabel}
          </motion.a>}
      </div>
    </motion.div>;
}
export function ProjectsSection() {
  const { content } = useI18n();
  const projects = content.projects.items;
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
        <h2 className="text-4xl font-bold text-white mb-2">{content.projects.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-8">
        {projects.map((project, index) => <ProjectCard key={project.title} title={project.title} description={project.description} delay={0.1 + index * 0.1} githubUrl={project.githubUrl} githubButtonLabel={content.projects.githubButton} />)}
      </div>
    </div>;
}