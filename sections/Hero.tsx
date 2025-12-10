'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20 md:pb-28">
      {/* Radial spotlight background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,80,255,0.35),_transparent_65%)]" />
      
      {/* Animated gradient spotlight */}
      <motion.div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-[900px] w-[900px] rounded-full bg-gradient-to-r from-violet-600/30 via-purple-600/25 to-indigo-600/20 blur-3xl" />
      </motion.div>

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            {/* Main headline */}
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build better products{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                10x faster
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 max-w-xl text-base text-slate-300 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              The all-in-one platform for modern teams. Ship features, track progress,
              and scale your business with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-violet-500/50 hover:shadow-xl">
                Get Started Free
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                <span>10,000+ teams</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Remote friendly</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Soft glow behind dashboard */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-violet-500/40 to-indigo-500/40 blur-3xl" />
            
            {/* Glass container */}
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-4 shadow-[0_0_80px_-30px_rgba(120,80,255,0.6)] backdrop-blur-xl sm:p-6">
              {/* Dashboard preview content */}
              <div className="overflow-hidden rounded-2xl bg-slate-950/80 shadow-2xl backdrop-blur-sm">
                <div className="aspect-video">
                  {/* Dashboard UI */}
                  <div className="flex h-full flex-col">
                    {/* Top nav */}
                    <div className="flex items-center justify-between border-b border-white/5 bg-slate-900/50 px-4 py-3 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-red-500/80" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="hidden h-5 w-40 rounded bg-white/5 sm:block" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-500/30 to-indigo-500/30" />
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="flex flex-1 gap-3 p-3 sm:gap-4 sm:p-4">
                      {/* Sidebar */}
                      <div className="hidden w-16 space-y-2 sm:block">
                        <div className="h-6 rounded bg-white/5" />
                        <div className="h-6 rounded bg-gradient-to-r from-violet-500/30 to-indigo-500/30" />
                        <div className="h-6 rounded bg-white/5" />
                        <div className="h-6 rounded bg-white/5" />
                      </div>
                      
                      {/* Content area */}
                      <div className="flex-1 space-y-3">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="h-6 w-32 rounded bg-white/10" />
                          <div className="hidden h-6 w-20 rounded-lg bg-gradient-to-r from-violet-500/30 to-indigo-500/30 sm:block" />
                        </div>
                        
                        {/* Stats cards */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          {['from-violet-500/20', 'from-indigo-500/20', 'from-purple-500/20'].map((gradient, i) => (
                            <div key={i} className={`rounded-lg bg-gradient-to-br ${gradient} to-transparent p-3`}>
                              <div className="mb-2 h-2 w-12 rounded bg-white/20" />
                              <div className="h-4 w-10 rounded bg-white/30" />
                            </div>
                          ))}
                        </div>
                        
                        {/* Chart area */}
                        <div className="rounded-lg bg-white/5 p-3">
                          <div className="mb-2 h-3 w-16 rounded bg-white/10" />
                          <div className="relative h-20">
                            <svg className="h-full w-full" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="chartLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                                  <stop offset="100%" stopColor="rgb(99, 102, 241)" />
                                </linearGradient>
                              </defs>
                              <polyline
                                fill="none"
                                stroke="url(#chartLine)"
                                strokeWidth="2"
                                points="0,60 25,45 50,30 75,35 100,10"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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
                className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
      </Container>
    </section>
  );
}
