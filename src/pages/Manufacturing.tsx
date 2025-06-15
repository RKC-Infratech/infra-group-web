import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const capabilities = [
    {
      title: "Steel Fabrication",
      capacity: "500 tonnes/month",
      description: "Precision steel structure fabrication with advanced welding and cutting technology",
      icon: "https://images.unsplash.com/photo-1565072318004-1fe9b1a2ee89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Precast Moulds",
      capacity: "50 moulds/month",
      description: "Custom precast segment moulds with high-precision finishing",
      icon: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Launching Girders",
      capacity: "10 units/month",
      description: "Heavy-duty launching girders for various span lengths",
      icon: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Quality Testing",
      capacity: "24/7 operations",
      description: "Comprehensive quality control and testing facilities",
      icon: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const equipment = [
    "CNC Plasma Cutting Machines",
    "Heavy Duty Welding Equipment",
    "Overhead Cranes (up to 50T capacity)",
    "Precision Machining Centers",
    "Shot Blasting & Painting Booth",
    "Material Testing Laboratory"
  ];

  const processes = [
    {
      step: "01",
      title: "Design & Engineering",
      description: "Detailed engineering drawings and specifications"
    },
    {
      step: "02",
      title: "Material Procurement",
      description: "High-grade steel and raw materials sourcing"
    },
    {
      step: "03",
      title: "Fabrication",
      description: "Precision manufacturing using advanced machinery"
    },
    {
      step: "04",
      title: "Quality Control",
      description: "Rigorous testing and inspection processes"
    },
    {
      step: "05",
      title: "Finishing",
      description: "Surface treatment and protective coating"
    },
    {
      step: "06",
      title: "Dispatch",
      description: "Careful packaging and timely delivery"
    }
  ];

  return (
    <div>
      <Hero
        title="Manufacturing Capabilities"
        subtitle="Advanced Fabrication Facility in Bagroda Industrial Area, Bhopal"
        backgroundImages={["https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"]}
      >
        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
          <Link to="/contact">Request Factory Visit</Link>
        </Button>
      </Hero>

      {/* Manufacturing Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Manufacturing Capabilities</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art facility equipped with modern machinery and skilled workforce
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={capability.icon} 
                    alt={capability.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                  <p className="text-primary font-medium">{capability.capacity}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Machinery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment & Machinery</h2>
            <p className="text-xl text-gray-600">
              Modern equipment ensuring precision and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Manufacturing Process</h2>
            <p className="text-xl text-gray-600">
              Systematic approach ensuring quality and timely delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality Standards</h2>
            <p className="text-xl opacity-90">
              Committed to excellence in every product we manufacture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">ISO 9001</div>
              <div className="text-lg">Quality Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Quality Inspection</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Quality Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-lg">Defect Target</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
