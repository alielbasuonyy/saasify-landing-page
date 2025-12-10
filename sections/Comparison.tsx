'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ComparisonFeature {
  feature: string;
  us: boolean | string;
  competitor1: boolean | string;
  competitor2: boolean | string;
}

const comparisonData: ComparisonFeature[] = [
  { feature: 'Real-time Collaboration', us: true, competitor1: true, competitor2: false },
  { feature: 'Unlimited Projects', us: true, competitor1: 'Limited to 10', competitor2: 'Limited to 5' },
  { feature: 'Advanced Analytics', us: true, competitor1: true, competitor2: 'Basic only' },
  { feature: 'API Access', us: true, competitor1: 'Enterprise only', competitor2: false },
  { feature: 'Custom Integrations', us: true, competitor1: false, competitor2: false },
  { feature: '24/7 Support', us: true, competitor1: 'Business hours', competitor2: 'Email only' },
  { feature: 'SOC 2 Certified', us: true, competitor1: true, competitor2: false },
  { feature: 'Free Trial Days', us: '14 days', competitor1: '7 days', competitor2: 'No trial' },
];

const CheckIcon = () => (
  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Comparison() {
  return (
    <section className="py-16 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How we compare
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See why teams choose us over the competition.
          </motion.p>
        </div>

        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    <div className="flex flex-col items-center gap-1">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        SaaSify
                      </span>
                      <span className="text-xs font-normal text-muted-foreground">(Us)</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                    Competitor A
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                    Competitor B
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 transition-colors hover:bg-muted/30"
                  >
                    <td className="px-6 py-4 text-sm font-medium">{row.feature}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {typeof row.us === 'boolean' ? (
                          row.us ? <CheckIcon /> : <XIcon />
                        ) : (
                          <span className="text-sm font-semibold text-green-600">{row.us}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {typeof row.competitor1 === 'boolean' ? (
                          row.competitor1 ? <CheckIcon /> : <XIcon />
                        ) : (
                          <span className="text-sm text-muted-foreground">{row.competitor1}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {typeof row.competitor2 === 'boolean' ? (
                          row.competitor2 ? <CheckIcon /> : <XIcon />
                        ) : (
                          <span className="text-sm text-muted-foreground">{row.competitor2}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
