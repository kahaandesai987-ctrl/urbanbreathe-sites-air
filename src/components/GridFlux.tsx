import { Database, LineChart, Cpu, ArrowRight } from "lucide-react";

export const GridFlux = () => {
  return (
    <section id="gridflux" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powered by <span className="bg-gradient-primary bg-clip-text text-transparent">GridFlux</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              GridFlux is our proprietary data structuring engine that powers Urban Breathe's 
              climate simulation and airflow modeling technology, delivering precise insights 
              for sustainable urban design.
            </p>
          </div>

          {/* Data Flow Visualization */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center animate-slide-up">
                <div className="relative w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-hover mb-6">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Data Collection</h3>
                <p className="text-muted-foreground text-center">
                  Aggregate environmental, structural, and geographic data
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: "150ms" }}>
                <div className="relative w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-hover mb-6">
                  <Cpu className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Processing</h3>
                <p className="text-muted-foreground text-center">
                  Advanced algorithms analyze and structure complex datasets
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: "300ms" }}>
                <div className="relative w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-hover mb-6">
                  <LineChart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Insights</h3>
                <p className="text-muted-foreground text-center">
                  Deliver actionable climate and airflow simulations
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Real-time climate simulation",
              "Microclimate analysis",
              "Airflow pattern modeling",
              "Energy efficiency optimization",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Try Prototype Section */}
          <div className="mt-12 text-center">
            <a
              href="https://www.breathesim.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg shadow-hover hover:scale-105 transition-transform duration-300"
            >
              Try Prototype
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
