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
    <section id="features" className="py-16 sm:py-28 bg-muted/30">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Everything you need to succeed
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Powerful features to help you build, ship, and scale your product.
          </motion.p>
        </div>

        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 p-[1px] transition-all duration-300 hover:scale-105">
                {/* Gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="absolute inset-[1px] rounded-2xl bg-card" />
                
                {/* Content */}
                <div className="relative flex h-full flex-col p-8">
                  {/* Icon with glow */}
                  <div className="mb-6 inline-flex">
                    <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-${feature.glowColor}/50`}>
                      <div className="text-3xl">{feature.icon}</div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60`} />
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:${feature.gradient} group-hover:bg-clip-text group-hover:text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
