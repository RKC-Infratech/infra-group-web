import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MapCard from "@/components/MapCard";

const ImagineringBridges = () => {
  const fabricationServices = [
    "Precast Segment Moulds",
    "Segment Lifters",
    "Launching Girders",
    "Formwork Travellers",
    "U-Girder Shuttering",
    "Shoring Equipment",
    "Casting Beds",
    "Pier Caps"
  ];

  const capabilities = [
    {
      title: "State-of-the-Art Facility",
      description: "Modern fabrication unit at Bagroda Industrial Area, Bhopal with advanced machinery"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring the highest standards of fabrication"
    },
    {
      title: "Timely Delivery",
      description: "Efficient production planning and logistics for on-time project delivery"
    },
    {
      title: "Custom Solutions",
      description: "Tailored fabrication solutions to meet specific project requirements"
    }
  ];

  return (
    <div>
      <Hero
        title="Imagineering Bridges India LLP"
        subtitle="We Fabricate India's Bridge Infrastructure Backbone"
      >
        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
          <Link to="/contact">Get a Quote for Fabrication</Link>
        </Button>
      </Hero>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leading Fabrication Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located at Bagroda Industrial Area, Bhopal, Imagineering Bridges India LLP is your trusted partner for fabrication and supply of all enabling structures required for bridge construction projects.
              </p>
              <p className="text-lg text-gray-600">
                With our state-of-the-art facility and experienced team, we deliver precision-engineered products that form the backbone of India's bridge infrastructure development.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                  src="https://atslab.com/wp-content/uploads/2018/12/Weld_Testing_Structural-1536x1152.jpg.webp"
                  alt="Bridge construction"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Fabrication Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Fabricate</h2>
            <p className="text-xl text-gray-600">
              Complete range of enabling structures for bridge construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricationServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary text-2xl">⚙️</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    Precision fabricated to exact specifications
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Tour Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Manufacturing Facility</h2>
            <p className="text-xl text-gray-600">
              Take a virtual tour of our state-of-the-art fabrication facility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Fabrication Workshop", icon: "🔧" },
              { title: "Quality Control Lab", icon: "🔬" },
              { title: "Storage & Dispatch", icon: "📦" }
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-primary text-6xl">{facility.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">Modern equipment and processes ensuring quality fabrication</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Production Capacity & Delivery</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl font-bold">{index + 1}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-lg">Tonnes/Month Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Production Schedule</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg">Quality Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-lg">Days Average Delivery</div>
            </div>
          </div>
        </div>
      </section>
 {/* Map */}
      <MapCard />

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Fabricate Your Vision?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us for a detailed quote and discussion of your fabrication requirements.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Get a Quote for Fabrication</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ImagineringBridges;
