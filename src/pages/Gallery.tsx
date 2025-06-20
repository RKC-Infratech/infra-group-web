
import { useState } from "react";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // categories and activeCategory are no longer needed
  // galleryItems stay the same
  const galleryItems = [
    {
      title: "Precast Segment Mould",
      category: "Equipment",
      description: "Precision engineered moulds for bridge segments",
      image: "/lovable-uploads/bhopal_metro.jpg"
    },
    {
      title: "Launching Girder in Action",
      category: "Equipment",
      description: "Heavy-duty launching girder during bridge construction",
      image: "/lovable-uploads/four_lane_road.jpg"
    },
    {
      title: "Fabrication Workshop",
      category: "Facilities",
      description: "State-of-the-art manufacturing facility in Bhopal",
      image: "/lovable-uploads/ganga_river_bridge.jpg"
    },
    {
      title: "Quality Control Lab",
      category: "Facilities",
      description: "Advanced testing and quality assurance facility",
      image: "/lovable-uploads/ganga_river_bridge1.jpg"
    },
    
    {
      title: "Highway Overpass",
      category: "Projects",
      description: "Multi-span highway bridge using post-tensioned girders",
      image: "/lovable-uploads/ganga_river_bridge2.jpg"
    },
    {
      title: "Segment Casting",
      category: "Manufacturing",
      description: "Precast segment production line",
      image: "/lovable-uploads/BALANCE CANTILEVER BRIDGE1.png"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/indore_metro1.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/indore_metro2.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/indore_metro3.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/krishna_river_bridge.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/krishna_river_bridge1.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/mthl.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/mumbai_metro.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/MAJOR BRIDGE OVER SHARAVATHI.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/REWAS REDDI COSTAL HIGHWAYS.png"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/Nagpur project1.jpeg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/CABLE EXTRA-DOSED BRIDGE 2.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/BANDRA – VERSOVA SEA LINK.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/award.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/award1.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/award2.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/award3.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/award4.jpg"
    },
    {
      title: "",
      category: "",
      description: "",
      image: "/lovable-uploads/award5.jpg"
    }
  ];

  // All items will be shown now; filter logic is gone
  const filteredItems = galleryItems;

  return (
    <div>
      <Hero
        title="Gallery"
        subtitle="Explore Our Equipment, Facilities, and Project Achievements"
        backgroundImages={[
          "/lovable-uploads/award2.jpg"
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid - Only images, no text */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
