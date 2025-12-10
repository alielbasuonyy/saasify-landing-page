'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Card from '@/components/Card';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built for speed and performance. Experience instant loading and seamless interactions.',
    icon: '⚡',
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption and regular security audits.',
    icon: '🔒',
  },
  {
    title: 'Easy Integration',
    description: 'Connect with your favorite tools in minutes. No complex setup required.',
    icon: '🔌',
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team in real-time from anywhere.',
    icon: '👥',
  },
  {
    title: 'Analytics & Insights',
    description: 'Make data-driven decisions with powerful analytics and reporting tools.',
    icon: '📊',
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated support team is always here to help you succeed.',
    icon: '💬',
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
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
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
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <div className="flex h-full flex-col">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
