import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export const Premium = () => {
  const plans = [
    {
      name: "Freemium",
      price: "₹0",
      description: "Perfect for getting started with basic simulation tools",
      features: [
        "Basic climate simulation",
        "Limited project storage",
        "Community support",
        "Monthly usage limits",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹9,999",
      period: "/month",
      description: "For architects and designers working on multiple projects",
      features: [
        "Advanced simulation tools",
        "Unlimited project storage",
        "Priority email support",
        "Export and reporting features",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations and city planning departments",
      features: [
        "All Professional features",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment option",
        "Advanced security features",
        "Training and onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="premium" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect subscription tier for your software access needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative shadow-soft hover:shadow-hover transition-all duration-300 border-border animate-slide-up ${
                plan.popular ? "border-primary border-2" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6">
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "hero" : "default"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
