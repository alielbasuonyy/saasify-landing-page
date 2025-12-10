'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Card from '@/components/Card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    content: 'This platform has transformed how our team collaborates. The productivity boost has been incredible.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'The best investment we made this year. Intuitive, powerful, and the support team is amazing.',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    content: 'As a startup, we needed something that could scale with us. This solution exceeded all expectations.',
    avatar: '👩‍🚀',
  },
  {
    name: 'David Kim',
    role: 'Engineering Lead',
    content: 'Clean interface, powerful features, and exceptional performance. Exactly what we were looking for.',
    avatar: '👨‍🔬',
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    content: 'The analytics alone are worth the price. We have insights we never had before.',
    avatar: '👩‍💼',
  },
  {
    name: 'James Wilson',
    role: 'CTO at StartupXYZ',
    content: 'Security and reliability are top-notch. Our team feels confident using this platform daily.',
    avatar: '👨‍💼',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-28 bg-muted/30">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Loved by teams everywhere
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See what our customers have to say about their experience.
          </motion.p>
        </div>

        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="mb-6 flex-1 text-muted-foreground">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-3 text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
