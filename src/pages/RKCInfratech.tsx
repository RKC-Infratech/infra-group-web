import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RKCInfratech = () => {
  const services = [
    "Casting yard layouts",
    "Precast Segment mould",
    "Segment lifter",
    "Launching Girder",
    "Formwork traveller",
    "U Girder shuttering",
    "Thrust wall",
    "Shoring",
    "Pier and Pier Cap shuttering"
  ];

  const reasons = [
    {
      title: "Expert Team",
      description: "Highly qualified engineers with decades of experience in temporary structure design"
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered complex infrastructure projects across India"
    },
    {
      title: "Strategic Location",
      description: "Based in Bhopal, providing easy access to major infrastructure projects"
    },
    {
      title: "Innovation Focus",
      description: "Cutting-edge design solutions using latest engineering software and methodologies"
    }
  ];

  return (
    <div>
      <Hero
        title="RKC Infratech"
        subtitle="Experts in Enabling & Temporary Structure Design"
      >
        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
          <Link to="/contact">Contact for Design Consultation</Link>
        </Button>
      </Hero>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leading Consultancy in Temporary Structure Design
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Based in Bhopal, RKC Infratech offers expert consultancy for temporary structure design used in bridge and infrastructure projects. Our team combines years of experience with innovative engineering solutions to deliver safe, efficient, and cost-effective designs.
              </p>
              <p className="text-lg text-gray-600">
                We specialize in creating detailed engineering solutions that ensure project success while maintaining the highest safety standards throughout the construction process.
              </p>
            </div>
            <div className=" flex items-center justify-center">
              {/*   <div className="text-primary text-8xl">🏗️</div> */}
             
                <img
                  src="https://dotrid.com/files/uploads/2019/05/BRIDGE-DESIGN-CONSTRUCTION-AND-MAINTENANCE.jpg"
                  alt="Bridge construction diagram"
                />
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive temporary structure design solutions for all your infrastructure needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                </div>
                <p className="text-gray-600">
                  Professional design and engineering solutions for {service.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RKC Infratech?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Snapshots */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Snapshots</h2>
            <p className="text-xl text-gray-600">
              Showcasing our expertise in temporary structure design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-primary text-4xl">📐</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Project {item}</h3>
                  <p className="text-gray-600">Innovative temporary structure design solution</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our expert team for professional design consultation and solutions.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contact">Contact for Design Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RKCInfratech;
