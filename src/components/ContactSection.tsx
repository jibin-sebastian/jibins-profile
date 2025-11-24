import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, MailIcon, MapPinIcon, PhoneIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M20 18.5c0 .83-.67 1.5-1.5 1.5h-2.5v-7.25l-4 3-4-3V20H5.5A1.5 1.5 0 0 1 4 18.5v-13c0-1.24 1.42-1.96 2.4-1.2L8 5.28 12 8.5l4-3.22 1.6-1.98c.98-.76 2.4-.04 2.4 1.2z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path
      fill="#0A66C2"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.38zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55z"
    />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path
      fill="#F1F5F9"
      d="M12 .5C5.73.5.7 5.52.7 11.78c0 4.97 3.24 9.18 7.72 10.67.56.1.77-.24.77-.54v-1.9c-3.14.68-3.8-1.52-3.8-1.52-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.07 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.7-1.45-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.24 1.15-3.03-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 5.68 0c2.17-1.46 3.12-1.16 3.12-1.16.6 1.54.23 2.68.12 2.96.72.79 1.15 1.8 1.15 3.03 0 4.33-2.63 5.27-5.14 5.55.39.33.74.98.74 1.97v2.92c0 .3.2.65.78.54A10.73 10.73 0 0 0 23.3 11.8C23.3 5.52 18.27.5 12 .5"
    />
  </svg>
);

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = 'service_3zl5dgb';
      const templateId = 'template_qta02gg';
      const publicKey = 'RpcnV0gqvnYrMp59r';
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Jibin Sebastian'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Surface EmailJS error details to help diagnose 4xx issues (invalid service/template/public key or params mismatch)
      const detail = (error as any)?.text || (error as any)?.message || 'Unknown error';
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please verify EmailJS Service ID, Template ID, Public Key, and template variables.');
      console.error('EmailJS Error:', detail);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <MailIcon size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <a href="mailto:jibinkallanickal@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    jibinkallanickal@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Phone</p>
                  <a href="tel:+4915735612873" className="text-white hover:text-purple-400 transition-colors">
                    +49 15735612873
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Location</p>
                  <p className="text-white">Stuttgart, Germany</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-3">
              {[
                { href: '#contact', label: 'Email', Icon: GmailIcon },
                { href: 'https://www.linkedin.com/in/jibinsebastian01/', label: 'LinkedIn', Icon: LinkedInIcon },
                { href: 'https://github.com/jibin-sebastian?tab=repositories', label: 'GitHub', Icon: GithubIcon }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center hover:bg-slate-600/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-600/20 border border-green-600/50 rounded-xl flex items-center gap-3"
              >
                <CheckCircleIcon size={20} className="text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-600/20 border border-red-600/50 rounded-xl flex items-center gap-3"
              >
                <AlertCircleIcon size={20} className="text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{errorMessage}</p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <SendIcon size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
