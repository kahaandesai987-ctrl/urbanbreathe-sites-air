import { Wind, Leaf, Zap } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Wind,
      title: "Climate Innovation",
      description: "Advanced microclimate simulation and airflow modeling technology",
    },
    {
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Building tools that create more environmentally responsible urban spaces",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Optimizing building performance for reduced energy consumption",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Urban Breathe
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Urban Breathe is an energy-efficiency and climate innovation startup dedicated to building 
            sustainable urban solutions. Through cutting-edge technologies like{" "}
            <span className="font-semibold text-secondary">GridFlux</span>, we empower professionals to create 
            cities that are healthier, more efficient, and better for our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-soft hover:shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary mb-6">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
