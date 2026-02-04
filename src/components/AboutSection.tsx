import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GmailIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
  <path fill="#EA4335" d="M20 18.5c0 .83-.67 1.5-1.5 1.5h-2.5v-7.25l-4 3-4-3V20H5.5A1.5 1.5 0 0 1 4 18.5v-13c0-1.24 1.42-1.96 2.4-1.2L8 5.28 12 8.5l4-3.22 1.6-1.98c.98-.76 2.4-.04 2.4 1.2z" />
</svg>;

const LinkedInIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
  <path fill="#0A66C2" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.38zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55z" />
</svg>;

const GithubIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
  <path fill="#F1F5F9" d="M12 .5C5.73.5.7 5.52.7 11.78c0 4.97 3.24 9.18 7.72 10.67.56.1.77-.24.77-.54v-1.9c-3.14.68-3.8-1.52-3.8-1.52-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.07 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.7-1.45-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.24 1.15-3.03-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 5.68 0c2.17-1.46 3.12-1.16 3.12-1.16.6 1.54.23 2.68.12 2.96.72.79 1.15 1.8 1.15 3.03 0 4.33-2.63 5.27-5.14 5.55.39.33.74.98.74 1.97v2.92c0 .3.2.65.78.54A10.73 10.73 0 0 0 23.3 11.8C23.3 5.52 18.27.5 12 .5" />
</svg>;

const AIBackdrop = () => (
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          'repeating-linear-gradient(125deg, rgba(59,130,246,0.1) 0px, rgba(59,130,246,0.1) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-125deg, rgba(45,212,191,0.08) 0px, rgba(45,212,191,0.08) 1px, transparent 1px, transparent 24px)'
      }}
    />
    <div className="absolute -top-12 -right-10 h-56 w-56 bg-cyan-500/20 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-64 w-64 bg-purple-600/20 blur-3xl" />
    <div className="absolute top-10 left-1/3 w-16 h-16 border border-teal-300/40 rounded-full animate-pulse" />
    <div className="absolute bottom-12 right-1/4 w-24 h-24 border border-blue-400/40 rounded-3xl rotate-12" />
  </div>
);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const descriptionY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const buttonsY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 0.9, 0.6]);

  const experiences = [
    {
      role: 'Data Analytics & AI',
      company: 'SupplyOn AG',
      period: '2023 - Present',
      description: [
        'Data Analysis & preprocessing using Python libraries for instance Pandas, Numpy, Seaborn, and Matplotlib',
        'Supported designing and implementing analytics solutions using Power BI to enhance data-driven decision-making',
        'Developed ideas and prototypes to address customer requirements related to the Supply Chain Sustainability Act, CO2 emissions, and environmental & social standards',
        'Designed concepts and requirements for product features, dashboards, and big data applications based on user stories',
        'Created process sketches and mockups to visualize solutions and workflows',
        'Built prototypes using Power BI, SQL, and Python within the Microsoft Azure Cloud tech stack',
        'Collaborated with product teams, development departments, and the AI Centre of Competence to drive innovation in supply chain sustainability solutions'
      ]
    },
    {
      role: 'Data Scientist',
      company: 'SICK Sensor Intelligence',
      period: '2022 - 2023',
      description: [
        'Data Analysis & preprocessing using Python libraries for instance Pandas, Numpy, Seaborn, and Matplotlib',
        'Optimization of hyperparameters using Autosklearn and Optuna frameworks',
        'Model Building and Evaluation (Scikit-learn, TensorFlow, Keras)',
        'Improvement of code quality using pytest, mypy, and focus on clean code development',
        'Using MLOps tools: DVC, Git, GitLab and Linux platform for development',
        'Text Analysis (TF-IDF Clustering)',
        'Collecting and evaluating existing service reports for a large scale to generate suitable database',
        'Automation of data extraction from pdf files using python and Bash scripting',
        'Implementation of text analysis techniques using LLM and NLP to identify major events listed in service reports',
        'Performance of data preprocessing and data cleaning tasks'
      ]
    },
    {
      role: 'Working Student in Data Management',
      company: 'Creditshelf AG',
      period: '2021 - 2022',
      description: [
        'Data Preparation, Quality Control, and Evaluation using Python libraries',
        'Data Analysis using PostgreSQL',
        'Dockerizing Apps and deploying in Kubernetes clusters',
        'Implementing APIs for data flow management',
        'Document Classification using Machine Learning'
      ]
    },
    {
      role: 'Systems Engineer',
      company: 'Infosys Pvt Ltd',
      period: '2017 - 2020',
      description: [
        'Incident and Change Management - ITIL',
        'Application analysis and Monitoring',
        'Kubernetes for container orchestration',
        'Containerized Microservices',
        'Monitoring with Splunk, AppDynamics, and custom dashboards',
        'Unix and Windows Administration'
      ]
    }
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Enhanced Parallax */}
      <motion.div
        style={{ opacity }}
        className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center mb-12 sm:mb-16 lg:mb-24 overflow-hidden rounded-3xl"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-slate-900/40 backdrop-blur-sm" /> */}

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
              Human by design, AI by craft
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
            <p>
              I am an AI Software Engineer with a strong passion for solving complex, real-world challenges through
              innovative and scalable AI-driven solutions. I continuously stay up to date with the latest
              advancements in artificial intelligence, machine learning, and data-centric technologies, enabling me
              to design systems that are both technically robust and business-focused.
            </p>
            <p>
              Beyond building solutions, I am actively seeking interesting and impactful AI projects where
              technology can create measurable value. I enjoy collaborating with individuals, startups, and
              organizations to help them turn ideas into intelligent products, optimize processes, and unlock new
              opportunities using AI.
            </p>
            <p>
              I provide end-to-end support--from problem understanding and data strategy to model development,
              deployment, and optimization--helping businesses transition from traditional workflows to AI-driven
              decision-making and automation. My goal is to empower teams and initiatives to adopt AI responsibly
              and effectively, ensuring solutions are practical, scalable, and aligned with real business objectives.
            </p>
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
              aria-label="Download resume"
            >
              My CV
            </motion.a>
            <motion.a
              href="https://github.com/jibin-sebastian?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-3 py-2.5 sm:py-3 text-sm sm:text-base bg-slate-900/60 border border-slate-600 text-white font-semibold rounded-lg hover:border-blue-400/70 transition-all duration-300"
            >
              GitHub
            </motion.a>
            <motion.a
              href="#ai-services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-3 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              AI Services
            </motion.a>
          </motion.div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </motion.div >

      {/* Professional Profile Section */}
      < motion.div
        initial={{ opacity: 0, y: -20 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Professional Profile</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </motion.div >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12"
      >
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base 2xl:text-lg mb-4">
          Data Science enthusiast and Analyst with a passion for solving real-world business challenges. Always up to
          date on the latest data science trends, I seek to work in a progressive organization that can broaden my
          knowledge and provide opportunities to utilize my skills effectively.
        </p>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base 2xl:text-lg">
          With expertise spanning machine learning, deep learning, and MLOps, I bring a comprehensive approach to
          data-driven problem solving. My experience includes working with cutting-edge technologies and frameworks to
          deliver impactful solutions in predictive analytics and maintenance modeling.
        </p>
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
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Education</h3>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base 2xl:text-lg">
          My educational background includes an{' '}
          <span className="text-blue-400 font-semibold">MSc in Data Science</span>, where I worked on various projects
          such as flight fare prediction and customer market segmentation using machine learning techniques. Worked on
          a research paper on activity group classification using motion-capture data.
        </p>
      </motion.div>
    </div >
  );
}
