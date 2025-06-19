
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  const leadership = [
    {
      name: "R.K. Choubey",
      position: "Founder & Head (Enabling/Temporary Structures Specialist)",
      bio: "M. Tech from Dr APJ Abdul Kalam Technical University. Post Graduate in Project Management. 14+ years in temporary structure design. Designed various LGs, lifting frames, ground support systems, molds, pre-tensioning yards, and shuttering. Renowned for innovative and detail-oriented bridge design, client focus, and continuous learning in modern engineering.",
      image: "/lovable-uploads/rkc.jpg"
    },
    {
      name: "Sai Bhavith EV",
      position: "Sr. Manager Design",
      bio: "M.Tech in Structural Engineering from VIT. 5+ years in temporary structure design for leading firms. Expert in safety-driven, efficient temporary and precast designs. Collaborative, proactive in problem-solving, and dedicated to high-quality, sustainable structures.",
      image: "/lovable-uploads/sai.jpg"
    },
    {
      name: "Dheeraj Kumar",
      position: "CAD Engineer",
      bio: "Innovative CAD expert for enabling structure drawings. Focused on aesthetic, strategic designs and close client collaboration. Delivers quality, efficiency, and success in high-profile projects.",
      image: "/lovable-uploads/dheeraj.jpg"
    },
    {
      name: "Kiran Choubey",
      position: "HR & Administration",
      bio: "BA, Veer Kumwar Singh University. Responsible for HR management and administration, ensuring strong support for the team and an excellent work environment.",
      image: "/lovable-uploads/kiran.jpg"
    },
    {
      name: "Pranav Anand",
      position: "Jr. Engineer - Design",
      bio: "",
      image: "/lovable-uploads/pranav.jpg"
    },
    {
      name: "Poonam Raghuwanshi",
      position: "Jr. Engineer",
      bio: "",
      image: "/lovable-uploads/poonam.jpg"
    },
    {
      name: "Arghyadyuti Karmakar",
      position: "Sr. Engineer - CAD",
      bio: "",
      image: "/lovable-uploads/arghyadyuti.jpg"
    },
    {
      name: "Kapil Gupta",
      position: "Engineer - Design",
      bio: "",
      image: "/lovable-uploads/kapil.jpg"
    },
    {
      name: "Preeti Uikey",
      position: "Jr. Engineer",
      bio: "",
      image: "/lovable-uploads/preeti.jpg"
    },
    {
      name: "Amarjeet Pandit",
      position: "Head - Fabrication",
      bio: "",
      image: "/lovable-uploads/amarjeet.jpg"
    },
    {
      name: "Neeraj Kumar",
      position: "Jr. Engineer",
      bio: "",
      image: "/lovable-uploads/neeraj.png"
    },
    {
      name: "Rupesh Kumar",
      position: "Head - Fabrication",
      bio: "",
      image: "/lovable-uploads/rupesh.jpg"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pioneering advanced construction methodologies & embracing the latest technology.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "Uncompromising commitment to excellence in every project.",
      icon: "⭐"
    },
    {
      title: "Safety",
      description: "Prioritizing the strictest safety standards in all our work.",
      icon: "🛡️"
    },
    {
      title: "Sustainability",
      description: "Long-term environmental & economic responsibility in every step.",
      icon: "🌱"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001:2007 Occupational Health & Safety",
    "NHAI Approved Contractor",
    "Indian Railways Approved Vendor"
  ];

  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const handleReadMore = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // Used for truncating bios
  const truncate = (text: string, n: number) => {
    return text.length > n ? text.slice(0, n) + "..." : text;
  };

  return (
    <div className="bg-white">
      <Hero
        title="About RKC Infratech Group"
        subtitle="Building India's Infrastructure Legacy Since 2008"
        className="mb-0"
      />

      {/* About Banner */}
      <section className="py-8 bg-gradient-to-br from-blue-50/60 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
          Imagineering Bridges – We dream & enable/build bridges
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Imagineering Bridges group is one of India’s most trusted named in infrastructure field with RKC Infratech providing execution friendly Enabling structure drawing and design and Imagineering bridges India LLP manufacturing quality enabling structure equipment’s. Riyare Micro construct LLP having expertise in precast super structure, river bridges, Balance cantilever, Cable Extra-dosed bridges and cable stayed bridges. The Group delivers quality and timely execution form Enabling structure design stage to Execution of bride projects. Our legacy is built on innovation, technical skills and relentless pursuit of quality.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="my-8 md:my-12 border-primary/20" />
      </div>

      {/* Vision & Mission */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-primary/5 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-base text-gray-700 mb-4">
              To be leading infrastructure group, setting the benchmarks in bridge construction field with providing enabling structure design firm (RKC Infratech), Manufacturing high quality Enabling structure projects (Imagineering Brigdes India LLP) and constructing quality bridge/structures respecting the time frame (Riyare Micro construct LLP). 
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-base text-gray-700 mb-4">
                To deliver outstanding solutions through our specialized firms, maintaining gold standards in quality, safety, and innovation—with a mission to foster young talent, advance technology, and create sustainable value for all.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
                <li>Excellence in every project</li>
                <li>Empowering the next generation of engineers</li>
                <li>Ethical, sustainable business practices</li>
                <li>Driving India's infrastructure growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="my-8 md:my-12 border-primary/20" />
      </div>

      {/* Leadership */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-white via-blue-50/40 to-blue-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Meet the minds shaping infrastructure excellence.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
            {leadership.map((leader, index) => {
              const isExpanded = expandedIndexes.includes(index);
              const shouldTruncate = leader.bio.length > 110;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 md:w-auto bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl mb-4 md:mb-0 flex flex-col items-center"
                >
                  <div className="w-full flex flex-col items-center p-4">
                    <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-primary shadow mb-2 flex items-center justify-center bg-white">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardTitle className="text-lg font-bold text-primary mb-1 mt-2 text-center">
                      {leader.name}
                    </CardTitle>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2 text-center">
                      {leader.position}
                    </p>
                  </div>
                  <CardContent className="p-4 pt-0 text-gray-700 text-sm">
                    <p>
                      {isExpanded || !shouldTruncate
                        ? leader.bio
                        : truncate(leader.bio, 110)}
                    </p>
                    {shouldTruncate && (
                      <Button
                        variant="link"
                        className="text-primary p-0 h-auto text-xs mt-1"
                        onClick={() => handleReadMore(index)}
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </Button>
                    )}
                  </CardContent>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="my-8 md:my-12 border-primary/20" />
      </div>

      {/* Our Values */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that inspire every bridge we build.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-primary/5 rounded-xl shadow-sm p-6 flex flex-col items-center transition-all hover:scale-105 hover:bg-primary/10"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-gray-700 text-sm text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="my-8 md:my-12 border-primary/20" />
      </div>

      {/* Certifications */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-blue-50/70 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Certifications & Approvals</h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              Recognized for excellence, safety, and compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-2xl text-primary">
                  📜
                </div>
                <h3 className="font-semibold text-gray-900 text-center">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

