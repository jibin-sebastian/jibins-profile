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
import { useI18n } from '../i18n/I18nContext'
export function AIServicesSection() {
    const { content } = useI18n()
    const iconList = [
        <WorkflowIcon size={28} />,
        <RocketIcon size={28} />,
        <BrainCircuitIcon size={28} />,
        <BarChart3Icon size={28} />,
        <ZapIcon size={28} />,
        <TargetIcon size={28} />,
    ]
    const services = content.aiServices.services.map((s, idx) => ({
        ...s,
        icon: iconList[idx] ?? <SparklesIcon size={28} />,
    }))
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
                            {content.aiServices.title}
                        </h1>
                        <p className="text-lg sm:text-xl text-cyan-400 font-medium">
                            {content.aiServices.subtitle}
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
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-6 sm:p-8 lg:p-12 2xl:p-14 3xl:p-16 mb-12 sm:mb-16 relative overflow-hidden"
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
                                {content.aiServices.introTitle}
                            </h2>
                            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                {content.aiServices.intro}
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
                    {content.aiServices.offerTitle}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 2xl:gap-8">
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
                        className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 2xl:p-7 3xl:p-8 hover:border-cyan-500/50 transition-all duration-300"
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

                            <h3 className="text-xl 2xl:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-300 text-sm 2xl:text-base leading-relaxed">
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
                    {content.aiServices.ctaTitle}
                </h3>
                <p className="text-slate-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                    {content.aiServices.ctaDescription}
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
                    {content.aiServices.ctaButton}
                </motion.a>
            </motion.div>
        </div>
    )
}
