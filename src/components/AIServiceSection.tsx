import React from 'react'
import { motion } from 'framer-motion'
import {
    SparklesIcon,
    BrainCircuitIcon,
    WorkflowIcon,
    RocketIcon,
    BarChart3Icon,
    CodeIcon,
    ZapIcon,
    TargetIcon,
} from 'lucide-react'
export function AIServicesSection() {
    const services = [
        {
            icon: <WorkflowIcon size={28} />,
            title: 'AI Workflow Design',
            description:
                'Design practical AI workflows tailored to your business processes, ensuring seamless integration with existing systems and maximum operational efficiency.',
            color: '#06b6d4',
        },
        {
            icon: <RocketIcon size={28} />,
            title: 'Lightweight Prototypes',
            description:
                'Develop rapid, lightweight AI prototypes to validate concepts quickly, test hypotheses, and demonstrate value before full-scale implementation.',
            color: '#8b5cf6',
        },
        {
            icon: <BrainCircuitIcon size={28} />,
            title: 'Model Operationalization',
            description:
                'Operationalize machine learning models with MLOps best practices, ensuring reliable deployment, monitoring, and continuous improvement in production.',
            color: '#3b82f6',
        },
        {
            icon: <BarChart3Icon size={28} />,
            title: 'Data-Driven Tools',
            description:
                'Build custom data-driven tools and dashboards that transform raw data into actionable insights, empowering teams to make informed decisions.',
            color: '#10b981',
        },
        {
            icon: <ZapIcon size={28} />,
            title: 'Automation Solutions',
            description:
                'Implement intelligent automation systems that streamline repetitive tasks, reduce manual effort, and accelerate business operations.',
            color: '#f59e0b',
        },
        {
            icon: <TargetIcon size={28} />,
            title: 'Business Integration',
            description:
                'Ensure AI solutions align with real business needs, focusing on measurable outcomes and practical implementation strategies.',
            color: '#ec4899',
        },
    ]
    return (
        <div className="relative">
            {/* Subtle tech pattern background */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="relative mb-12 sm:mb-16 lg:mb-20"
            >
                <div className="flex items-center gap-4 mb-6">
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center"
                    >
                        <SparklesIcon size={32} className="text-white" />
                    </motion.div>
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                            AI Services
                        </h1>
                        <p className="text-lg sm:text-xl text-cyan-400 font-medium">
                            End-to-End AI & Automation Solutions
                        </p>
                    </div>
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full" />
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 relative overflow-hidden"
            >
                {/* Animated accent */}
                <motion.div
                    animate={{
                        x: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
                />

                <div className="relative z-10">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4,
                        }}
                        className="flex items-start gap-4 mb-6"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                            <CodeIcon size={24} className="text-cyan-400" />
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Comprehensive AI Support
                            </h2>
                            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                I provide end-to-end AI and automation support for businesses
                                looking to modernize operations, integrate intelligent systems,
                                and accelerate decision-making. My services focus on designing
                                practical AI workflows, developing lightweight prototypes,
                                operationalizing models, and building data-driven tools tailored
                                to real business needs.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: -20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                }}
                className="mb-8 sm:mb-12"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    What I Offer
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.1,
                        }}
                        whileHover={{
                            y: -5,
                        }}
                        className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                    >
                        {/* Hover glow effect */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300"
                            style={{
                                background: `linear-gradient(135deg, ${service.color}, transparent)`,
                            }}
                        />

                        <div className="relative z-10">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                style={{
                                    backgroundColor: `${service.color}20`,
                                }}
                            >
                                <div
                                    style={{
                                        color: service.color,
                                    }}
                                >
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-300 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.8,
                }}
                className="mt-12 sm:mt-16 bg-gradient-to-r from-cyan-600/20 to-teal-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 sm:p-8 lg:p-10 text-center"
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Business with AI?
                </h3>
                <p className="text-slate-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                    Let's discuss how AI and automation can drive innovation and
                    efficiency in your organization. From concept to deployment, I'll help
                    you navigate the AI landscape with practical, results-driven
                    solutions.
                </p>
                <motion.a
                    href="#contact"
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                    Get in Touch
                </motion.a>
            </motion.div>
        </div>
    )
}
