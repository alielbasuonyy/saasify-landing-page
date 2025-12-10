import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-border/80 ${className}`}>
      {children}
    </div>
  );
}
