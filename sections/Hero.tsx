'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] text-white">
      {/* Radial spotlight glow behind heading */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] -z-10 h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,rgba(140,100,255,0.45),transparent_70%)]" />
      
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute right-[15%] bottom-[10%] -z-10 h-[400px] w-[400px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_70%)]" />

      <Container>
        <div className="grid min-h-[85vh] w-full items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT – Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Premium Badge */}
            <motion.div 
              className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
              </span>
              <span className="text-sm font-semibold text-violet-200">
                AI-Powered Platform
              </span>
            </motion.div>

            {/* Hero Headline - Extra Large & Bold */}
            <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
              Build your SaaS{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                in days,
              </span>{' '}
              not months
            </h1>

            {/* Subtitle - Larger & More Contrast */}
            <p className="max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl md:leading-relaxed">
              The all-in-one platform for modern SaaS teams. Ship faster with AI-powered 
              tools, collaborate seamlessly, and scale without limits.
            </p>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <button className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_50px_-15px_rgba(139,92,246,0.7)] transition-all hover:shadow-[0_25px_60px_-10px_rgba(139,92,246,0.85)] hover:-translate-y-0.5">
                Get started free
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0-5 5m5-5H6"
                  />
                </svg>
              </button>

              <button className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch demo
              </button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="space-y-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">No credit card</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-slate-600" />
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Free 14-day trial</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-slate-600" />
                <span className="font-medium">10,000+ teams</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT – Premium Dashboard Preview */}
          <motion.div
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow behind dashboard */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-violet-600/50 via-purple-600/40 to-indigo-600/50 opacity-80 blur-3xl" />

            {/* Glass Container */}
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-2 shadow-2xl backdrop-blur-3xl sm:p-3">
              {/* Dashboard Content */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 shadow-inner">
                <div className="flex h-full flex-col">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-slate-800/50 to-slate-900/50 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div className="hidden h-5 w-32 rounded-md bg-white/10 sm:block" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden h-8 w-24 rounded-lg bg-white/5 sm:block" />
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 ring-2 ring-violet-400/30" />
                    </div>
                  </div>

                  {/* Main Dashboard Area */}
                  <div className="flex flex-1 gap-4 p-4 sm:gap-5 sm:p-6">
                    {/* Sidebar */}
                    <div className="hidden w-20 space-y-3 sm:block">
                      <div className="h-9 rounded-xl bg-white/5 transition hover:bg-white/10" />
                      <div className="h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-500/50" />
                      <div className="h-9 rounded-xl bg-white/5 transition hover:bg-white/10" />
                      <div className="h-9 rounded-xl bg-white/5 transition hover:bg-white/10" />
                      <div className="mt-auto h-9 rounded-xl bg-white/5 transition hover:bg-white/10" />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2.5">
                          <div className="h-4 w-28 rounded-lg bg-white/20" />
                          <div className="h-3 w-40 rounded bg-white/10" />
                        </div>
                        <div className="hidden h-10 w-28 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg shadow-emerald-500/40 sm:block" />
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        {[
                          { gradient: 'from-violet-500/60 to-violet-600/40', glow: 'shadow-violet-500/30' },
                          { gradient: 'from-indigo-500/60 to-indigo-600/40', glow: 'shadow-indigo-500/30' },
                          { gradient: 'from-purple-500/60 to-purple-600/40', glow: 'shadow-purple-500/30' }
                        ].map((card, i) => (
                          <div
                            key={i}
                            className={`rounded-2xl bg-gradient-to-br ${card.gradient} p-4 shadow-xl ${card.glow} backdrop-blur-sm`}
                          >
                            <div className="mb-3 h-2.5 w-12 rounded-full bg-white/70" />
                            <div className="h-5 w-10 rounded-lg bg-white/90 font-bold" />
                          </div>
                        ))}
                      </div>

                      {/* Chart Area */}
                      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="h-4 w-20 rounded-lg bg-white/15" />
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-12 rounded bg-emerald-400/80" />
                            <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </div>
                        </div>
                        <div className="relative h-24 sm:h-28">
                          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgb(139,92,246)" />
                                <stop offset="50%" stopColor="rgb(168,85,247)" />
                                <stop offset="100%" stopColor="rgb(99,102,241)" />
                              </linearGradient>
                              <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(139,92,246,0.4)" />
                                <stop offset="100%" stopColor="rgba(139,92,246,0)" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0,85 L15,75 L30,65 L45,55 L60,45 L75,30 L90,20 L100,15"
                              fill="none"
                              stroke="url(#chartGradient)"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M0,85 L15,75 L30,65 L45,55 L60,45 L75,30 L90,20 L100,15 L100,100 L0,100 Z"
                              fill="url(#chartFill)"
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
      </Container>
    </section>
  );
}
