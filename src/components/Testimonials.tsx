
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const TRUNCATE_LENGTH = 130;

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohit Jandu",
      position: "Managing Director",
      company: "Jandu Construction India private Limited",
      content:
        "RKC Infratech's expertise in bridge consultancy has been invaluable for our projects. Their attention to detail and innovative design approaches have not only streamlined our processes but also enhanced the overall safety and efficiency of our structures. I highly recommend their services to anyone in need of reliable consultancy for temporary structures.",
      rating: 5,
    },
    {
      name: "Shri Arun Kumar",
      position: "Director",
      company: "Arvind Techno Group",
      content:
        "Working with RKC Infratech has been a game-changer for our construction initiatives. Their skilled team provided exceptional design solutions for our temporary structures, ensuring that we met our deadlines while maintaining the highest quality standards. They truly understand the needs of their clients and deliver outstanding results.",
      rating: 5,
    },
    {
      name: "Atul Joshi",
      position: "Vice President",
      company: "Dilip buildcon Limited",
      content:
        "I am thoroughly impressed with RKC Infratech's dedication to excellence in bridge consultancy. They approached our project with a level of professionalism and creativity that exceeded our expectations. Their ability to foresee potential challenges and provide innovative solutions has made a significant impact on our project’s success. I cannot recommend them highly enough.",
      rating: 5,
    },
    {
      name: "Anirudh Wadhwani",
      position: "Director",
      company: "NWR Service Pvt Ltd",
      content:
        "R.K. Choubey Family Office's strategic funding approach has been instrumental in scaling our infrastructure projects across multiple states.",
      rating: 5,
    },
  ];

  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (idx: number) => {
    setExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading infrastructure companies across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => {
            const isLong = testimonial.content.length > TRUNCATE_LENGTH;
            const showFull = expanded[index];
            const preview = testimonial.content.slice(0, TRUNCATE_LENGTH);
            const shouldShowButton = isLong;

            return (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    "
                    {showFull || !isLong
                      ? testimonial.content
                      : `${preview}...`}
                    "
                  </p>
                  {shouldShowButton && (
                    <button
                      type="button"
                      className="text-blue-600 text-xs underline cursor-pointer hover:text-primary"
                      onClick={() => handleToggle(index)}
                    >
                      {showFull ? "Read less" : "Read more"}
                    </button>
                  )}
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
