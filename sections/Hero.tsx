'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48">
      <Container>
        {/* Animated gradient spotlight */}
        <motion.div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/20 blur-3xl" />
        </motion.div>

        {/* Secondary glow */}
        <div className="absolute left-1/4 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            {/* Trust badges */}
            <motion.div
              className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                <span>10,000+ teams</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Remote friendly</span>
              </div>
            </motion.div>

            {/* Main headline with glow effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <h1 className="relative text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                    Build better products
                  </span>
                  <span className="relative bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                    Build better products
                  </span>
                </span>
                <br />
                <span className="relative mt-2 inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  <span className="absolute inset-0 blur-xl opacity-50">
                    10x faster
                  </span>
                  <span className="relative">10x faster</span>
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The all-in-one platform for modern teams. Ship features, track progress,
              and scale your business with confidence.
            </motion.p>

            {/* CTA Buttons with glassmorphism */}
            <motion.div
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-blue-600/50 sm:px-10 sm:py-5 sm:text-lg">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  Get Started Free
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background/50 px-8 py-4 text-base font-semibold backdrop-blur-sm transition-all hover:border-border hover:bg-background/80 sm:px-10 sm:py-5 sm:text-lg">
                <span className="relative flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </span>
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ✓ No credit card required · ✓ 14-day free trial · ✓ Cancel anytime
            </motion.div>
          </div>

          {/* Product mockup with 3D tilt */}
          <motion.div
            className="relative mx-auto mt-20 max-w-5xl sm:mt-24 lg:mt-32"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Glow effect behind mockup */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-600/20 via-purple-600/20 to-transparent blur-3xl" />
              
              {/* Dashboard mockup */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/95 to-background/50 p-2 shadow-2xl backdrop-blur-sm sm:rounded-3xl lg:p-3">
                <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-muted/80 to-muted sm:rounded-2xl">
                  {/* Simulated dashboard interface */}
                  <div className="flex h-full w-full flex-col">
                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-border/30 px-4 py-3">
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-6 w-16 rounded bg-muted-foreground/10" />
                        <div className="h-6 w-16 rounded bg-muted-foreground/10" />
                      </div>
                    </div>
                    
                    {/* Content area */}
                    <div className="flex flex-1 gap-4 p-4">
                      {/* Sidebar */}
                      <div className="w-1/4 space-y-2">
                        <div className="h-8 rounded bg-muted-foreground/10" />
                        <div className="h-8 rounded bg-blue-600/20" />
                        <div className="h-8 rounded bg-muted-foreground/10" />
                        <div className="h-8 rounded bg-muted-foreground/10" />
                      </div>
                      
                      {/* Main content */}
                      <div className="flex-1 space-y-3">
                        <div className="h-10 w-2/3 rounded bg-muted-foreground/10" />
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-24 rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-600/10 p-3">
                            <div className="mb-2 h-3 w-16 rounded bg-blue-600/30" />
                            <div className="h-6 w-12 rounded bg-blue-600/40" />
                          </div>
                          <div className="h-24 rounded-lg bg-gradient-to-br from-purple-600/20 to-purple-600/10 p-3">
                            <div className="mb-2 h-3 w-16 rounded bg-purple-600/30" />
                            <div className="h-6 w-12 rounded bg-purple-600/40" />
                          </div>
                          <div className="h-24 rounded-lg bg-gradient-to-br from-pink-600/20 to-pink-600/10 p-3">
                            <div className="mb-2 h-3 w-16 rounded bg-pink-600/30" />
                            <div className="h-6 w-12 rounded bg-pink-600/40" />
                          </div>
                        </div>
                        <div className="h-32 rounded-lg bg-muted-foreground/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating particles */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {[
              { left: '15%', top: '20%', duration: 3, delay: 0 },
              { left: '85%', top: '30%', duration: 4, delay: 0.5 },
              { left: '45%', top: '15%', duration: 3.5, delay: 1 },
              { left: '75%', top: '60%', duration: 4.5, delay: 1.5 },
              { left: '25%', top: '70%', duration: 3.8, delay: 0.8 },
              { left: '60%', top: '80%', duration: 4.2, delay: 1.2 },
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
