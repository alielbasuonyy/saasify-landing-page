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
    <section id="pricing" className="py-16 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
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
          className="mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-7 w-12 rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <motion.div
              className="absolute top-1 h-5 w-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
              animate={{ left: isYearly ? '24px' : '4px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
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
          <div className="rounded-xl border border-border bg-card p-6">
            <label className="mb-3 block text-sm font-medium">
              Number of team members
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSeats(Math.max(1, seats - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent"
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
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                onClick={() => setSeats(Math.min(100, seats + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Pro plan total: <span className="font-semibold text-foreground">{calculatePrice(pricingPlans[1])}</span>
              {isYearly ? '/year' : '/month'}
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="mt-20 grid gap-10 lg:grid-cols-3 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'border-blue-600 shadow-lg ring-2 ring-blue-600/20' : ''}`}>
                <div className="flex h-full flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{calculatePrice(plan)}</span>
                    {plan.monthlyPrice !== null && plan.monthlyPrice !== 0 && (
                      <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                    )}
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
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
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {plan.monthlyPrice === null ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
