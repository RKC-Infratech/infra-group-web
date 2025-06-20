import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RiyareMicroConstruct = () => {
  const expertise = [
    "Precast Segmental Bridges",
    "Pre-Tensioned/Post-Tensioned Girders",
    "Extra-Dosed Bridges",
    "Balance Cantilever Construction",
    "Precast U-Girder Construction"
  ];

  const projects = [
    {
      title: "Metro Bridge Project",
      location: "Mumbai",
      description: "42-span precast segmental bridge for metro rail"
    },
    {
      title: "Highway Overpass",
      location: "Delhi-NCR",
      description: "Post-tensioned girder bridge construction"
    },
    {
      title: "River Crossing Bridge",
      location: "Pune",
      description: "Extra-dosed bridge with balanced cantilever method"
    }
  ];

 

  return (
    <div>
      <Hero
        title="Riyare Micro Construct LLP"
        subtitle="Building the Future with Precision Precast"
      >
        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
          <Link to="/contact">Partner With Us</Link>
        </Button>
      </Hero>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Specialists in Advanced Precast Bridge Construction
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Riyare Micro Construct LLP brings cutting-edge precast construction technology to India's bridge infrastructure. Our expertise spans the complete spectrum of precast bridge construction methodologies.
              </p>
              <p className="text-lg text-gray-600">
                We combine precision engineering with innovative construction techniques to deliver bridges that stand the test of time while meeting the demanding schedules of modern infrastructure projects.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                  src="https://blog.enerpac.com/wp-content/uploads/2024/08/cast-in-place-vs-precast-concrete-1.png"
                  alt="Bridge Construction"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Construction Expertise</h2>
            <p className="text-xl text-gray-600">
              Advanced precast methodologies for modern bridge construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-primary text-3xl">🏗️</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item}</h3>
                  <p className="text-gray-600">
                    Expert construction using proven methodologies and quality materials
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Showcasing our expertise in precast bridge construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-primary text-5xl">🌉</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-primary font-medium mb-2">{project.location}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      
<ClientsMarquee />
      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Design Review", desc: "Thorough analysis of project requirements" },
              { step: "02", title: "Planning", desc: "Detailed construction methodology planning" },
              { step: "03", title: "Execution", desc: "Precision construction with quality control" },
              { step: "04", title: "Delivery", desc: "Timely completion and handover" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Excellence Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us for your next bridge construction project and experience precision precast construction.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RiyareMicroConstruct;
