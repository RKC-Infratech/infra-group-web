import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


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

  const projects = [
    {
      title: "MAJOR BRIDGE OVER KRISHNA RIVER",
      firm: "Riyare Micro Construct",
      type: "GROUND SUPPORT SYSTEM (UNDER SLUNG LAUNCHING GIRDER)",
      location: "Vijaywada",
      year: "2024",
      details: "",
      image: "/lovable-uploads/krishna_river_bridge1.jpg", // Construction
      client: "NAVYUGA ENGINERING COMPANY LTD"
    },
    {
      title: "MAJOR BRIDGE OVER SHARAVATHI BACKWATWER",
      firm: "RKC Infratech",
      type: "LAUNCHING GIRDER FOR ERECTION OF GIRDER",
      location: "Karnataka",
      year: "2023",
      details: "",
      image: "/lovable-uploads/sharavathi_backwater_bridge.jpg", // Design
      client: "AMRUTHA CONSTRUCTION PVT LTD"
    },
    {
      title: "SHIMLA BYPASS PROJECT",
      firm: "Imagineering Bridges",
      type: "Design",
      location: "Shimla, India",
      year: "2023",
      details: "PIER CAP SHUTETRING, LAUNCHING GIRDER FOR ERECTION OF GIRDER, CASTING YARD, SEGMENT MOULD, GROUND SUPPORT SYSTEM (UNDER SLUNG LAUNCHING GIRDER), FORM WORK TRAVELLER",
      image: "/lovable-uploads/shimla_bypass_project.png", // Design/Fabrication
      client: "GAWAR CONSTRUCTION LTD"
    },
    {
      title: "MTHL- PUNE MISSING LINK",
      firm: "Riyare Micro Construct",
      type: "Design",
      location: "Pune, Maharashtra",
      year: "2023",
      details: "PRE-TENSIONED GIRDER CASTING YARD, GIRDER SHUTTERING, PIER CAP CENTERING, ALL THE ENABLING STRUTCUTRE",
      image: "/lovable-uploads/mthl.jpg", // Fabrication
      client: "GAWAR CONSTRUCTION LTD"
    },
    {
      title: "MUMBAI METRO",
      firm: "Imagineering Bridges",
      type: "Design",
      location: "Mumbai, Maharashtra",
      year: "2022",
      details: "PRE-TENSIONED U GIRDER CASTING YARD & ITS FOUNDATIONS, PRE-TENSIONED GIRDER CASTING YARD, CROSS ARM LIFTER, LIFTING BEAMS, REBAR CAGE LIFTERS, STACKING BEAMS, REBAR JIG, TRANSPORTATION FRAMES, PIER CAP CENTERING, STRESSING PLATFORM, MOVABLE SHED, ALL THE ENABLING STRUTCUTRE",
      image: "/lovable-uploads/mumbai_metro.jpg", // Design
      client: "GAWAR CONSTRUCTION LTD"
    },
    {
      title: "CABLE EXTRADOSED BRIDGE OVER NARMADA RIVER",
      firm: "RKC Infratech",
      type: "Design",
      location: "Rajasthan",
      year: "2022",
      details: "CASTING YARD, SEGMENT MOULD, PIER TABLE CENTERING, STITCH CENTERING ARRANGEMENT, STRONG BACK, SEGMENT LIFTER",
      image: "/lovable-uploads/ganga_river_bridge.jpg", // Construction/Fabrication
      client: "JANDU CONSTRUCTION INDIA PVT LTD"
    }
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
    const MapCard = () => (
  <div className="bg-white rounded-lg shadow-xl p-0 mb-6 overflow-hidden animate-fade-in hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-primary transition-all duration-300 border border-primary/10">
    <h3 className="text-xl font-bold px-8 pt-6 mb-2 text-primary font-playfair">Our Location</h3>
    <div className="rounded-lg overflow-hidden shadow-md mx-8">
      <iframe
        title="RKC Infratech Group Location Bhopal with Marker"
        src="https://www.google.com/maps?q=23.1430676,77.5553074&z=18&output=embed"
        width="100%"
        height="220"
        loading="lazy"
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-56 border-0 rounded-lg"
      />
      <div className="text-center text-gray-600 text-xs my-3">
        Industrial Area Bagroda, E45, Bhopal, Madhya Pradesh 462045
      </div>
    </div>
  </div>
);

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
      {/* Map Section */}
<section className="py-16">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <MapCard />
  </div>
</section>

    

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
