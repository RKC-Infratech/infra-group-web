
import Hero from "@/components/Hero";
import PainPointsSection from "@/components/PainPointsSection";
import EnhancedServiceCard from "@/components/EnhancedServiceCard";
import ProjectShowcase from "@/components/ProjectShowcase";
import InvestorSpotlight from "@/components/InvestorSpotlight";
import CTAFooterSection from "@/components/CTAFooterSection";
import CounterSection from "@/components/CounterSection";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const firms = [
    {
      title: "RKC INFRATECH",
      tagline: "Where every bolt is drawn before it's cast",
      keyService: "Launching girder design",
      icon: "🖥",
      link: "/rkc-infratech",
      accentColor: "#4169e1", // Royal blue
      projectImage: "https://i.pinimg.com/736x/bb/e7/0c/bbe70ccd44db21852d9a7de9da4c999b.jpg" // Engineering design
    },
    {
      title: "IMAGINEERING BRIDGES",
      tagline: "Fabrication that meets design specs to the millimeter",
      keyService: "Segment mold supply",
      icon: "🏭",
      link: "/imagineering-bridges",
      accentColor: "#4169e1", // Royal blue
      projectImage: "https://www.weldwins.com/static/f86858ecc505a2a99754792481b13e0c/8dbcc/cover.jpg " // Fabrication/industrial
    },
    {
      title: "RIYARE CONSTRUCT",
      tagline: "Building bridges that outlive their blueprints",
      keyService: "U-girder installation",
      icon: "🌉",
      link: "/riyare-micro-construct",
      accentColor: "#4169e1", // Royal blue
      projectImage: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs40799-022-00616-y/MediaObjects/40799_2022_616_Fig6_HTML.png " // Bridge
    },
    {
      title: "CHOUBEY OFFICE",
      tagline: "Fueling India's next-generation infrastructure",
      keyService: "Angel funding",
      icon: "💰",
      link: "/rkchoubey-family-office",
      accentColor: "#4169e1", // Royal blue
      projectImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Finance/money
    }
  ];

  return (
    <div>
      <Hero
        title="Precision Infrastructure Solutions – From Design to Execution"
        subtitle="4 specialized firms. 1 seamless workflow."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <a href="#firms">Explore Our Expertise</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-blue bg-transparent hover:bg-white hover:text-primary">
            <Link to="/contact">Get a Consultation</Link>
          </Button>
        </div>
      </Hero>

      {/* Pain Points Section */}
      <PainPointsSection />

      {/* The 4 Firms Section */}
      <section id="firms" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Network of Specialized Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Four specialties, one mission: Building India’s future with precision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firms.map((firm, index) => (
              <EnhancedServiceCard
                key={index}
                title={firm.title}
                tagline={firm.tagline}
                keyService={firm.keyService}
                icon={firm.icon}
                link={firm.link}
                accentColor={firm.accentColor}
                projectImage={firm.projectImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Stats/Counter Section */}
      <CounterSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Investor Spotlight */}
      <InvestorSpotlight />

      {/* CTA Footer Section */}
      <CTAFooterSection />
    </div>
  );
};

export default Home;

