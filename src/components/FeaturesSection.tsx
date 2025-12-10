import { Zap, Shield, Rocket, BarChart3, LineChart, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed and performance. Experience instant loading and seamless interactions.",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-400/10",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with end-to-end encryption and regular security audits.",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10",
  },
  {
    icon: Rocket,
    title: "Easy Integration",
    description: "Connect with your favorite tools in minutes. No complex setup required.",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-400/10",
  },
  {
    icon: BarChart3,
    title: "Real-time Collaboration",
    description: "Work together seamlessly with powerful analytics and reporting tools.",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with powerful analytics and reporting tools.",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help you succeed.",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/10",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative bg-background py-24">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features to help you build, ship, and scale your product.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border accent */}
              <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="pl-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
