
import { useState } from "react";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Use Unsplash images for visual consistency, as in ProjectShowcase
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const filters = ["All", "RKC Infratech", "Imagineering Bridges", "Riyare Micro Construct"];

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
    },
    {
  title: "NAGPUR METRO",
  firm: "RKC Infratech",
  type: "Design Review",
  location: "Nagpur",
  year: "2022", // Update the year if different
  details: "CASTING YARD, PRECAST SEGMENT MOULD, PRE-TENSION GIRDER MOULD, PIER SHUTTER, PIER CAP SHUTTER, LAUNCHING GIRDER",
  image: "/lovable-uploads/nagpur_metro_project.jpg", // Replace with actual image path if available
  client: "KALPATRU PROJECTS INTERNATIONAL LIMITED"
},
    {
  title: "REVIEW AND PROOF CHECKING OF LAUNCHING GIRDER – NAGPUR METRO",
  firm: "RKC Infratech",
  type: "Design Review",
  location: "Nagpur",
  year: "2022", // Update if needed
  details: "LAUNCHING GIRDER",
  image: "/lovable-uploads/nagpur_metro_dpjain.jpg", // Replace with actual image path if available
  client: "D.P. JAIN & INFRASTRUCTURE PVT. LTD."
},
    {
  title: "DESIGN OF ALL THE ENABLING STRUCTURE – MAJOR BRIDGE ACROSS JAIGAD CREEK BETWEEN TASWAL AND JAIGAD ON REWAS REDDI COASTAL HIGHWAYS",
  firm: "RKC Infratech",
  type: "Design",
  location: "Maharashtra", // Based on Jaigad location; update if needed
  year: "2023", // Change if needed
  details: "CASTING YARD, PRECAST SEGMENT MOULD - SHORT LINE, PRE-TENSION GIRDER MOULD, PIER SHUTTER, PIER CAP SHUTTER, TEMPORARY ACCESS BRIDGE (TAB), SEGMENT LIFTER",
  image: "/lovable-uploads/jaigad_creek_bridge.jpg", // Replace with actual image path if available
  client: "ARVIND TECHNO INFRA PRIVATE LIMITED"
},
    {
  title: "DESIGN OF ALL THE ENABLING STRUCTURE – MAJOR BRIDGE ACROSS KUNDALIKA CREEK BETWEEN REVDANDA TO SALAV ON REVAS REDDI COASTAL HIGHWAY",
  firm: "RKC Infratech",
  type: "Design",
  location: "Maharashtra", // Based on location; update if necessary
  year: "2023", // Change if required
  details: "CASTING YARD, PRECAST SEGMENT MOULD - SHORT LINE, PRE-TENSION GIRDER MOULD, PIER SHUTTER, PIER CAP SHUTTER, TEMPORARY ACCESS BRIDGE (TAB), SEGMENT LIFTER",
  image: "/lovable-uploads/kundalika_creek_bridge.jpg", // Replace with actual image path if available
  client: "ARVIND TECHNO INFRA PRIVATE LIMITED"
}




  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.firm === activeFilter);

  const handleReadMore = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const truncate = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div>
      <Hero
        title="Our Projects"
        subtitle="Showcasing Excellence Across India's Infrastructure Landscape"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="mb-2"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              // Full index for correctness with filters
              const absoluteIndex = projects.indexOf(project);
              const isExpanded = expandedIndexes.includes(absoluteIndex);
              const shouldTruncate = project.details && project.details.length > 80;

              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="h-48 w-full overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{project.title}</CardTitle>
                    <div className="text-center">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {project.firm}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-primary font-medium mb-2">{project.type}</p>
                    <p className="text-gray-600 mb-2">{project.location}</p>
                    <p className="text-sm text-gray-500 mb-3">{project.year}</p>
                    <p className="text-gray-600 text-sm">{project.client}</p>
                    {project.details && (
                      <p className="text-gray-600 text-sm">
                        {isExpanded || !shouldTruncate
                          ? project.details
                          : truncate(project.details, 80)}
                        {shouldTruncate && (
                          <Button
                            variant="link"
                            className="text-primary p-0 h-auto text-sm ml-2"
                            onClick={() => handleReadMore(absoluteIndex)}
                          >
                            {isExpanded ? "Read less" : "Read more"}
                          </Button>
                        )}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;

