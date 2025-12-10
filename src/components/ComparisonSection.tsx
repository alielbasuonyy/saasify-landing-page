import { Check } from "lucide-react";

const features = [
  {
    name: "Real-time Collaboration",
    saasify: true,
    competitorA: true,
    competitorB: true,
  },
  {
    name: "Unlimited Projects",
    saasify: true,
    competitorA: true,
    competitorB: true,
  },
  {
    name: "Advanced Analytics",
    saasify: true,
    competitorA: true,
    competitorB: true,
  },
  {
    name: "API Access",
    saasify: true,
    competitorA: true,
    competitorB: true,
  },
  {
    name: "Custom Integrations",
    saasify: true,
    competitorA: true,
    competitorB: true,
  },
  {
    name: "24/7 Support",
    saasify: "14 days",
    competitorA: "7 days",
    competitorB: "None",
  },
];

const ComparisonSection = () => {
  const renderValue = (value: boolean | string, isHighlighted: boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className={`w-5 h-5 ${isHighlighted ? "text-primary" : "text-muted-foreground"}`} />
      ) : (
        <span className="text-muted-foreground">—</span>
      );
    }
    return (
      <span className={isHighlighted ? "text-primary font-medium" : "text-muted-foreground"}>
        {value}
      </span>
    );
  };

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How we compare
          </h2>
          <p className="text-lg text-muted-foreground">
            See why teams choose us over the competition.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-primary/30 bg-card/30 backdrop-blur-sm overflow-hidden shadow-glow">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-border/50">
              <div className="text-left">
                <span className="font-semibold">Feature</span>
              </div>
              <div className="text-center">
                <span className="text-primary font-semibold">Saasify</span>
              </div>
              <div className="text-center">
                <span className="text-muted-foreground font-medium">Competitor A</span>
              </div>
              <div className="text-center">
                <span className="text-muted-foreground font-medium">Competitor B</span>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-4 gap-4 p-6 ${
                  index !== features.length - 1 ? "border-b border-border/30" : ""
                }`}
              >
                <div className="text-left">
                  <span className="text-foreground">{feature.name}</span>
                </div>
                <div className="flex justify-center items-center">
                  {renderValue(feature.saasify, true)}
                </div>
                <div className="flex justify-center items-center">
                  {renderValue(feature.competitorA, false)}
                </div>
                <div className="flex justify-center items-center">
                  {renderValue(feature.competitorB, false)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
