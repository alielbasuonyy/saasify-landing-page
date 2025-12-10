'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
          </motion.p>
        </div>

        <div
          className="relative mt-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {currentTestimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
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
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'w-2 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {isPaused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm"
            >
              Paused
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}                 
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
