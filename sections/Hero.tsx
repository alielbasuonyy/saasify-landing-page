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

          {/* Premium Dashboard Preview */}
          <motion.div
            className="relative mx-auto mt-20 max-w-5xl sm:mt-24 lg:mt-32"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Subtle animated particles behind dashboard */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {[
                { left: '10%', top: '15%', size: 'h-1 w-1' },
                { left: '90%', top: '25%', size: 'h-1.5 w-1.5' },
                { left: '20%', top: '80%', size: 'h-1 w-1' },
                { left: '85%', top: '70%', size: 'h-1 w-1' },
              ].map((particle, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${particle.size} rounded-full bg-purple-500/15`}
                  style={{ left: particle.left, top: particle.top }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="relative perspective-[2000px]">
              {/* Soft glow around preview */}
              <div className="absolute inset-0 -z-10 rounded-3xl shadow-[0_0_80px_-20px_rgba(120,80,255,0.4)]" />
              
              {/* Glass container with 3D tilt effect */}
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-white/10 p-3 backdrop-blur-xl transition-all duration-700 ease-out hover:scale-[1.03] sm:rounded-3xl lg:p-6 lg:hover:rotate-[0.8deg]"
                whileHover={{ y: -5 }}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                }}
              >
                {/* Gradient accent border overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/15 to-blue-500/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100 sm:rounded-3xl" />
                
                {/* Glass glare on top-left corner */}
                <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-30 blur-2xl" />
                
                {/* Subtle reflections on edges */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Dashboard preview */}
                <div className="relative overflow-hidden rounded-xl bg-background/80 shadow-2xl backdrop-blur-sm sm:rounded-2xl">
                  <div className="aspect-video overflow-hidden">
                    {/* Realistic dashboard interface */}
                    <div className="flex h-full w-full flex-col">
                      {/* Top navigation bar */}
                      <div className="flex items-center justify-between border-b border-border/30 bg-muted/30 px-4 py-3 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-500/80" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                            <div className="h-3 w-3 rounded-full bg-green-500/80" />
                          </div>
                          <div className="hidden h-6 w-48 rounded bg-muted-foreground/10 sm:block" />
                        </div>
                        <div className="flex gap-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                          <div className="hidden h-6 w-20 rounded bg-muted-foreground/10 sm:block" />
                        </div>
                      </div>
                      
                      {/* Main content area */}
                      <div className="flex flex-1 gap-3 p-3 sm:gap-4 sm:p-4">
                        {/* Sidebar */}
                        <div className="hidden w-1/5 space-y-2 sm:block">
                          <div className="h-7 rounded bg-muted-foreground/5" />
                          <div className="h-7 rounded bg-gradient-to-r from-purple-500/20 to-blue-500/20 shadow-sm" />
                          <div className="h-7 rounded bg-muted-foreground/5" />
                          <div className="h-7 rounded bg-muted-foreground/5" />
                          <div className="mt-4 h-7 rounded bg-muted-foreground/5" />
                        </div>
                        
                        {/* Main dashboard content */}
                        <div className="flex-1 space-y-3">
                          {/* Header with title */}
                          <div className="flex items-center justify-between">
                            <div className="h-8 w-1/2 rounded bg-muted-foreground/10" />
                            <div className="hidden h-8 w-24 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 sm:block" />
                          </div>
                          
                          {/* Analytics cards */}
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-600/5 p-3 shadow-sm transition-all hover:shadow-md">
                              <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-blue-500/10 blur-2xl" />
                              <div className="relative">
                                <div className="mb-2 h-3 w-16 rounded bg-blue-600/30" />
                                <div className="h-6 w-14 rounded bg-blue-600/50" />
                                <div className="mt-2 h-1 w-full rounded-full bg-blue-600/20">
                                  <div className="h-1 w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400" />
                                </div>
                              </div>
                            </div>
                            
                            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600/20 to-purple-600/5 p-3 shadow-sm transition-all hover:shadow-md">
                              <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-purple-500/10 blur-2xl" />
                              <div className="relative">
                                <div className="mb-2 h-3 w-16 rounded bg-purple-600/30" />
                                <div className="h-6 w-14 rounded bg-purple-600/50" />
                                <div className="mt-2 h-1 w-full rounded-full bg-purple-600/20">
                                  <div className="h-1 w-4/5 rounded-full bg-gradient-to-r from-purple-500 to-purple-400" />
                                </div>
                              </div>
                            </div>
                            
                            <div className="group relative col-span-2 overflow-hidden rounded-lg bg-gradient-to-br from-pink-600/20 to-pink-600/5 p-3 shadow-sm transition-all hover:shadow-md sm:col-span-1">
                              <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-pink-500/10 blur-2xl" />
                              <div className="relative">
                                <div className="mb-2 h-3 w-16 rounded bg-pink-600/30" />
                                <div className="h-6 w-14 rounded bg-pink-600/50" />
                                <div className="mt-2 h-1 w-full rounded-full bg-pink-600/20">
                                  <div className="h-1 w-1/2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Chart area with neon accent strokes */}
                          <div className="relative overflow-hidden rounded-lg bg-muted/30 p-4 backdrop-blur-sm">
                            <div className="mb-3 flex items-center justify-between">
                              <div className="h-4 w-24 rounded bg-muted-foreground/10" />
                              <div className="flex gap-2">
                                <div className="h-4 w-12 rounded-full bg-muted-foreground/10" />
                                <div className="h-4 w-12 rounded-full bg-muted-foreground/10" />
                              </div>
                            </div>
                            
                            {/* Minimal chart with grid */}
                            <div className="relative h-24 w-full">
                              {/* Grid lines */}
                              <div className="absolute inset-0 flex flex-col justify-between">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="h-px w-full bg-border/20" />
                                ))}
                              </div>
                              
                              {/* Chart line with neon glow */}
                              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
                                    <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.6" />
                                  </linearGradient>
                                  <filter id="glow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                    <feMerge>
                                      <feMergeNode in="coloredBlur"/>
                                      <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                  </filter>
                                </defs>
                                <polyline
                                  fill="none"
                                  stroke="url(#chartGradient)"
                                  strokeWidth="2"
                                  filter="url(#glow)"
                                  points="0,80 25,60 50,45 75,50 100,20"
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
