
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProjectShowcase = () => {
  // Remove filter state/logic
  const projects = [
    {
      id: 1,
      title: "MAJOR BRIDGE OVER KRISHNA RIVER",
      category: "Riyare Micro Construct",
      image: "/lovable-uploads/krishna_river_bridge1.jpg",
      type: "GROUND SUPPORT SYSTEM (UNDER SLUNG LAUNCHING GIRDER)"
    },
    {
      id: 2,
      title: "MUMBAI METRO",
      category: "Imagineering Bridges",
      image: "/lovable-uploads/mumbai_metro.jpg",
      type: "Design"
    },
    {
      id: 3,
      title: "SHIMLA BYPASS PROJECT",
      category: "Imagineering Bridges",
      image: "/lovable-uploads/shimla_bypass_project.png",
      type: "Design"
    },
    {
      id: 4,
      title: "Launching Girder Technical Drawing",
      category: "Design (RKC)",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      type: "design"
    },
    {
      id: 5,
      title: "Precast Segment Production",
      category: "Fabrication (Imagineering)",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      type: "fabrication"
    },
    {
      id: 6,
      title: "Bridge Installation Process",
      category: "Construction (Riyare)",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      type: "construction"
    }
  ];

  // Just show first 4 projects
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Showcase
          </h2>
          <p className="text-xl text-gray-600">
            From concept to completion - see our expertise in action
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                index % 3 === 1 ? 'md:mt-8' : ''
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    project.type === 'design' ? 'bg-blue-100 text-blue-800' :
                    project.type === 'fabrication' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Explore More Button */}
        <div className="flex justify-center mt-10">
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 transition">
            <Link to="/projects">Explore more Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
