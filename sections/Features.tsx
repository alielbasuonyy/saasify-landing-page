'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Card from '@/components/Card';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built for speed and performance. Experience instant loading and seamless interactions.',
    icon: '⚡',
    gradient: 'from-blue-600 to-cyan-600',
    glowColor: 'blue-600',
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption and regular security audits.',
    icon: '🔒',
    gradient: 'from-purple-600 to-pink-600',
    glowColor: 'purple-600',
  },
  {
    title: 'Easy Integration',
    description: 'Connect with your favorite tools in minutes. No complex setup required.',
    icon: '🔌',
    gradient: 'from-cyan-600 to-blue-600',
    glowColor: 'cyan-600',
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team in real-time from anywhere.',
    icon: '👥',
    gradient: 'from-violet-600 to-purple-600',
    glowColor: 'violet-600',
  },
  {
    title: 'Analytics & Insights',
    description: 'Make data-driven decisions with powerful analytics and reporting tools.',
    icon: '📊',
    gradient: 'from-blue-600 to-indigo-600',
    glowColor: 'blue-600',
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated support team is always here to help you succeed.',
    icon: '💬',
    gradient: 'from-pink-600 to-rose-600',
    glowColor: 'pink-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center space-y-3">
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Everything you need to succeed
          </motion.h2>
          <motion.p
            className="text-base text-slate-300 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Powerful features to help you build, ship, and scale your product.
          </motion.p>
        </div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-violet-500/10">
                {/* Icon with gradient circle */}
                <div className="mb-6 inline-flex">
                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <span className="text-2xl">{feature.icon}</span>
                    {/* Subtle glow on hover */}
                    <div className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50`} />
                  </div>
                </div>
                
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
