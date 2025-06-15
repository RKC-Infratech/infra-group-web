import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const newsArticles = [
    {
      title: "RKC Infratech Group Completes Major Metro Bridge Project",
      date: "December 15, 2024",
      category: "Project Completion",
      excerpt: "Successfully delivered 42-span precast segmental bridge for Mumbai Metro Phase 3, demonstrating our expertise in complex urban infrastructure projects.",
      content: "The project involved sophisticated engineering challenges including tight urban constraints and complex logistics coordination.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "New Manufacturing Facility Inaugurated in Bhopal",
      date: "November 28, 2024",
      category: "Company News",
      excerpt: "Imagineering Bridges India LLP expands production capacity with state-of-the-art fabrication unit at Bagroda Industrial Area.",
      content: "The new facility increases our manufacturing capacity by 200% and incorporates latest automation technology.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "R.K. Choubey Family Office Invests in Infrastructure Tech Startup",
      date: "October 22, 2024",
      category: "Investment",
      excerpt: "Strategic investment in innovative construction technology startup focused on sustainable bridge construction methods.",
      content: "This investment aligns with our commitment to advancing construction technology and sustainability in infrastructure development.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Award for Excellence in Bridge Construction",
      date: "September 15, 2024",
      category: "Recognition",
      excerpt: "RKC Infratech Group receives prestigious industry award for innovative precast construction methodologies.",
      content: "The award recognizes our contribution to advancing precast bridge construction techniques in India.",
      image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Partnership with Leading Construction Companies",
      date: "August 10, 2024",
      category: "Partnership",
      excerpt: "Strategic partnerships established with major infrastructure developers across India for upcoming projects.",
      content: "These partnerships will enable us to participate in larger infrastructure projects and expand our geographical reach.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Sustainability Initiative Launch",
      date: "July 25, 2024",
      category: "CSR",
      excerpt: "RKC Infratech Group launches comprehensive sustainability program focusing on eco-friendly construction practices.",
      content: "Our sustainability initiative includes waste reduction, energy efficiency, and carbon footprint minimization across all operations.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div>
      <Hero
        title="News & Events"
        subtitle="Stay Updated with Our Latest Achievements and Industry Insights"
        backgroundImages={["https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main News Articles */}
            <div className="lg:col-span-2 space-y-8">
              {newsArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                          <span className="text-sm text-gray-500">{article.date}</span>
                        </div>
                        <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                        <p className="text-gray-600">{article.excerpt}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{article.content}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Project Completion", "Company News", "Investment", "Recognition", "Partnership", "CSR"].map((category, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700">{category}</span>
                        <span className="text-sm text-gray-500">
                          {newsArticles.filter(article => article.category === category).length}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary/5 rounded">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded">
                      <div className="text-2xl font-bold text-primary">4</div>
                      <div className="text-sm text-gray-600">Specialized Firms</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
