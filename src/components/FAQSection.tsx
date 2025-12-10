'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You can access all features for 14 days. Cancel anytime during the trial period to avoid any charges.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards including Visa, Mastercard, and American Express. We also support PayPal and bank transfers for enterprise customers.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and security measures to protect your data. All data is encrypted at rest and in transit.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frequently asked<br />questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
