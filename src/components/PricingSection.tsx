'use client';

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: { monthly: 19, yearly: 15 },
    description: "For individual use",
    features: ["Basic features", "Up to 5 projects", "5 GB storage"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 39, yearly: 31 },
    description: "For growing teams",
    features: ["All Starter features", "Unlimited projects", "Advanced analytics"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: null, yearly: null },
    description: "For large organizations",
    features: ["All Pro features", "Premium support", "Custom workflows", "Enhanced security"],
    cta: "Contact Us",
    popular: false,
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Simple, transparent pricing
          </h2>
          
          {/* Toggle */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary/50 bg-card/80 shadow-glow scale-105 z-10"
                  : "border-border/50 bg-card/50 hover:border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  {plan.price.monthly !== null ? (
                    <>
                      <span className="text-4xl font-bold">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">Custom</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.name === "Enterprise" ? "outline" : "hero"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
