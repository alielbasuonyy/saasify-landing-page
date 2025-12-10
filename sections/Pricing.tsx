'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';

const pricingPlans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for trying out our platform',
    features: [
      'Up to 3 projects',
      'Basic analytics',
      'Community support',
      '5GB storage',
      'Basic integrations',
    ],
    popular: false,
    perSeat: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Best for growing teams',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      '100GB storage',
      'All integrations',
      'Custom workflows',
    ],
    popular: true,
    perSeat: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Unlimited storage',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
    ],
    popular: false,
    perSeat: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [seats, setSeats] = useState(1);

  const calculatePrice = (plan: typeof pricingPlans[0]) => {
    if (plan.monthlyPrice === null) return 'Custom';
    if (plan.monthlyPrice === 0) return '$0';
    
    const basePrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const total = plan.perSeat ? basePrice * seats : basePrice;
    return `$${total}`;
  };

  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950/60 to-slate-900/80">
      <Container>
        <div className="mx-auto max-w-3xl text-center space-y-3">
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            className="text-base text-slate-300 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose the plan that&apos;s right for you. All plans include a 14-day free trial.
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-7 w-12 rounded-full bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <motion.div
              className="absolute top-1 h-5 w-5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 shadow-md"
              animate={{ left: isYearly ? '24px' : '4px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-slate-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-2 rounded-full bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-600"
            >
              Save 17%
            </motion.span>
          )}
        </motion.div>

        {/* Seat Calculator for Pro Plan */}
        <motion.div
          className="mx-auto mt-10 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <label className="mb-3 block text-sm font-medium text-white">
              Number of team members
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSeats(Math.max(1, seats - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <div className="flex-1">
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={seats}
                  onChange={(e) => setSeats(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-center text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <button
                onClick={() => setSeats(Math.min(100, seats + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <p className="mt-3 text-center text-sm text-slate-400">
              Pro plan total: <span className="font-semibold text-white">{calculatePrice(pricingPlans[1])}</span>
              {isYearly ? '/year' : '/month'}
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-1 text-sm font-medium text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Highlighted card with gradient border */}
              {plan.popular ? (
                <div className="relative h-full overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-violet-500/80 to-cyan-500/80 p-[1px]">
                  <div className="h-full rounded-2xl bg-slate-950 p-6 sm:p-8">
                    <div className="flex h-full flex-col">
                      <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                        <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                      </div>
                      
                      <div className="mb-6">
                        <span className="text-5xl font-semibold text-white">{calculatePrice(plan)}</span>
                        {plan.monthlyPrice !== null && plan.monthlyPrice !== 0 && (
                          <span className="text-slate-400">/{isYearly ? 'year' : 'month'}</span>
                        )}
                      </div>

                      <ul className="mb-8 flex-1 space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg
                              className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-violet-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-violet-500/50">
                        {plan.monthlyPrice === null ? 'Contact Sales' : 'Get Started'}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all hover:border-white/20 hover:bg-white/10">
                  <div className="flex h-full flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                      <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-semibold text-white">{calculatePrice(plan)}</span>
                      {plan.monthlyPrice !== null && plan.monthlyPrice !== 0 && (
                        <span className="text-slate-400">/{isYearly ? 'year' : 'month'}</span>
                      )}
                    </div>

                    <ul className="mb-8 flex-1 space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">
                      {plan.monthlyPrice === null ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
