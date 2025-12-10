'use client';

import { Sparkles, Play, CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import dashboardMockup from "@/src/assets/dashboard-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      
      <div className="container relative z-10 mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">NEW</span>
                <span className="text-muted-foreground">– AI-POWERED WORKFLOWS</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2 animate-fade-in-up animation-delay-200">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Build <span className="text-gradient">products</span>
                <br />
                10x faster.
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90">
                Ship with confidence.
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md animate-fade-in-up animation-delay-400">
              SaaSify is the operating system for modern product teams. Plan, ship, and learn in one place with real-time visibility from idea to release.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-400">
              <Button variant="hero" size="lg">
                Get started free
                <span className="ml-1">›</span>
              </Button>
              <Button variant="heroOutline" size="lg">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary border border-border mr-2">
                  <Play className="w-4 h-4 fill-current" />
                </span>
                Watch product tour
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4 animate-fade-in-up animation-delay-600">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  SOC 2 Type II compliant
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                  15,000+ product teams
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-muted-foreground" />
                  Built for remote-first work
                </span>
              </div>
              <p className="text-sm text-muted-foreground/70">
                No credit card required · 14-day free trial · Cancel anytime
              </p>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative lg:pl-8 animate-fade-in-up animation-delay-400">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl transform scale-95 animate-pulse-glow" />
              
              {/* Dashboard Card */}
              <div className="relative rounded-2xl border border-border/50 overflow-hidden shadow-card bg-card/80 backdrop-blur-sm animate-float">
                <Image 
                  src={dashboardMockup} 
                  alt="SaaSify Dashboard showing analytics, charts, and team collaboration features"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
