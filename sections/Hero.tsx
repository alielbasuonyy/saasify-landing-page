'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Build better products{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                faster
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The all-in-one platform for modern teams. Ship features, track progress,
            and scale your business with confidence.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" className="min-w-[200px]">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Demo
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            No credit card required · Free 14-day trial
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
