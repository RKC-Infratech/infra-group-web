
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const news = [
    {
      title: "RKC Infratech Group Completes Major Metro Bridge Project",
      date: "December 2024",
      excerpt: "Successfully delivered 42-span precast segmental bridge for Mumbai Metro Phase 3, demonstrating our expertise in complex urban infrastructure.",
      category: "Project Completion",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "New Manufacturing Facility Inaugurated in Bhopal",
      date: "November 2024",
      excerpt: "Imagineering Bridges India LLP expands production capacity with state-of-the-art fabrication unit at Bagroda Industrial Area.",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "R.K. Choubey Family Office Invests in Infrastructure Tech Startup",
      date: "October 2024",
      excerpt: "Strategic investment in innovative construction technology startup focused on sustainable bridge construction methods.",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Events
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with our recent achievements and industry insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">{item.category}</div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <div className="text-sm text-gray-500">{item.date}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
