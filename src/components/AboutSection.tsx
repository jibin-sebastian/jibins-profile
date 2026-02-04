import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

const AIBackdrop = () => (
  <div className="pointer-events-none absolute inset-0 -z-10">
    {/* Light-blue AI gradient wash */}
    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-cyan-400/10 to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.18),transparent_60%)]" />

    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          'repeating-linear-gradient(125deg, rgba(59,130,246,0.1) 0px, rgba(59,130,246,0.1) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-125deg, rgba(45,212,191,0.08) 0px, rgba(45,212,191,0.08) 1px, transparent 1px, transparent 24px)'
      }}
    />
    <div className="absolute -top-12 -right-10 h-64 w-64 bg-sky-400/25 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-72 w-72 bg-cyan-400/18 blur-3xl" />
    <div className="absolute top-10 left-1/3 w-16 h-16 border border-teal-300/40 rounded-full animate-pulse" />
    <div className="absolute bottom-12 right-1/4 w-24 h-24 border border-blue-400/40 rounded-3xl rotate-12" />
  </div>
);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { content } = useI18n();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const descriptionY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const buttonsY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 0.9, 0.6]);

  const experiences = content.about.experiences;
  const [eduBefore, eduAfter] = content.about.education.description.split(content.about.education.highlight);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Enhanced Parallax */}
      <motion.div
        style={{ opacity }}
        className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center mb-12 sm:mb-16 lg:mb-24 overflow-hidden rounded-3xl border border-sky-400/15 bg-slate-950/20"
      >
        {/* Subtle glass layer to soften the pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-slate-900/30 backdrop-blur-[2px]" />

        {/* <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12"> */}
        {/* <div className="relative"> */}
        <AIBackdrop />

        {/* Content container (prevents overly wide layouts on ultrawide screens) */}
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:px-20">
          {/* Text Content with Layered Parallax */}
          <div className="space-y-6 lg:space-y-8 relative">
          {/* Name - Slowest movement (foreground) */}
          <motion.div
            style={{ y: nameY, opacity: textOpacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-6xl 3xl:text-7xl font-bold text-white text-center mt-6 sm:mt-4">
              {content.about.hero.headline}
            </h1>
          </motion.div>

          {/* Title - Medium-slow movement */}

          {/* Description - Medium movement */}
          <motion.div
            style={{ y: descriptionY, opacity: textOpacity, textAlign: 'justify' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 text-sm sm:text-base 2xl:text-lg text-slate-200 leading-relaxed max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto"
          >
            {content.about.hero.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
          </motion.div>

          {/* Buttons - Faster movement (background) */}
          <motion.div
            style={{ y: buttonsY, opacity: textOpacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-4 sm:mb-6"
          >
            <motion.a
              href="/Resume_jibinsebastian.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-3 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
              aria-label={content.about.hero.buttons.cvAriaLabel}
            >
              {content.about.hero.buttons.cv}
            </motion.a>
            <motion.a
              href="https://github.com/jibin-sebastian?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-3 py-2.5 sm:py-3 text-sm sm:text-base bg-slate-900/60 border border-slate-600 text-white font-semibold rounded-lg hover:border-blue-400/70 transition-all duration-300"
            >
              {content.about.hero.buttons.github}
            </motion.a>
            <motion.a
              href="#ai-services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-3 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {content.about.hero.buttons.aiServices}
            </motion.a>
          </motion.div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </motion.div >

      {/* Divider before Professional Profile */}
      <div className="my-10 sm:my-12 lg:my-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      </div>

      {/* Professional Profile Section */}
      < motion.div
        initial={{ opacity: 0, y: -20 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{content.about.professionalProfile.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </motion.div >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12"
      >
        {content.about.professionalProfile.paragraphs.map((p, idx) => <p key={idx} className={idx === 0 ? "text-slate-300 leading-relaxed text-sm sm:text-base 2xl:text-lg mb-4" : "text-slate-300 leading-relaxed text-sm sm:text-base 2xl:text-lg"}>
          {p}
        </p>)}
      </motion.div>

      {/* Experience Timeline */}
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm sm:text-base text-blue-400 font-medium">{exp.period}</span>
              </div>
              <p className="text-blue-400 font-medium text-sm sm:text-base">{exp.company}</p>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed flex">
                  <span className="text-blue-400 mr-2">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 sm:mt-12 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{content.about.education.title}</h3>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base 2xl:text-lg">
          {eduBefore}
          <span className="text-blue-400 font-semibold">{content.about.education.highlight}</span>
          {eduAfter ?? ''}
        </p>
      </motion.div>
    </div >
  );
}
