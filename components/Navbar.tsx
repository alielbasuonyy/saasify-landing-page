'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-bold">
              SaaSify
            </a>
            <div className="hidden space-x-6 md:flex">
              <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Features
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Testimonials
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </motion.nav>
  );
}
