
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RKChoubeyFamilyOffice = () => {
  const initiatives = [
    {
      title: "Angel Investments in Startups",
      description: "Supporting innovative Indian startups with funding and mentorship",
      icon: "💡"
    },
    {
      title: "Infrastructure Technology Funding",
      description: "Investing in cutting-edge construction and infrastructure technologies",
      icon: "🚀"
    },
    {
      title: "Community Building and CSR",
      description: "Creating positive social impact through strategic community initiatives",
      icon: "🤝"
    }
  ];

  const focusAreas = [
    "Construction Technology",
    "Infrastructure Innovation",
    "Smart City Solutions",
    "Sustainable Development",
    "Engineering Software",
    "IoT in Construction"
  ];

  const investments = [
    {
      company: "TechBridge Solutions",
      sector: "Construction Tech",
      description: "AI-powered project management for infrastructure"
    },
    {
      company: "GreenInfra Dynamics",
      sector: "Sustainable Infrastructure",
      description: "Eco-friendly construction materials and methods"
    },
    {
      company: "Smart Foundation Systems",
      sector: "Engineering Innovation",
      description: "Advanced foundation technology for bridges"
    }
  ];

  return (
    <div>
      <Hero
        title="R.K. Choubey Family Office"
        subtitle="Investing in India's Future, Today"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contact">Submit a Startup</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-blue bg-transparent hover:bg-white hover:text-primary">
            <Link to="/contact">Partner with CSR</Link>
          </Button>
        </div>
      </Hero>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                Supporting Indian startups, infrastructure technology, and community-driven development to build a stronger, more innovative India.
              </p>
              <p className="text-lg text-gray-600">
                We believe in the power of strategic investments and social responsibility to drive meaningful change in India's infrastructure landscape while fostering innovation and community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Initiatives</h2>
            <p className="text-xl text-gray-600">
              Three key pillars driving our investment and social impact strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6">{initiative.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Focus Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Focus Areas</h2>
            <p className="text-xl text-gray-600">
              Sectors where we actively seek investment opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-primary/5 border border-primary/20 p-6 rounded-lg text-center hover:bg-primary/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Investments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Portfolio</h2>
            <p className="text-xl text-gray-600">
              Showcasing our investment in innovative companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investments.map((investment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-primary text-5xl">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{investment.company}</h3>
                  <p className="text-primary font-medium mb-2">{investment.sector}</p>
                  <p className="text-gray-600">{investment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Impact Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-700">Startups Supported</div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">₹50Cr+</div>
              <div className="text-gray-700">Total Investment</div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-700">Jobs Created</div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-700">CSR Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
            <p className="text-xl opacity-90">
              Simple steps to get your startup or CSR initiative considered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Submit Application", desc: "Send us your pitch deck or proposal" },
              { step: "02", title: "Initial Review", desc: "Our team evaluates your submission" },
              { step: "03", title: "Due Diligence", desc: "Comprehensive evaluation process" },
              { step: "04", title: "Investment Decision", desc: "Final decision and partnership terms" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-white/80 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build India's Future Together?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you're a startup seeking investment or an organization with CSR initiatives, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Submit a Startup</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900">
              <Link to="/contact">Discuss CSR Partnership</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RKChoubeyFamilyOffice;
