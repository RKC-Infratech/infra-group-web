import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Send } from "lucide-react";

const WHATSAPP_PHONE = "917880123365"; // use your WhatsApp number, in international format without '+'

const CTAFooterSection = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const forms = [
    {
      id: "design",
      title: "Need a Design Review?",
      fields: ["Name", "Email", "Upload Drawing"],
      color: "bg-blue-500",
      icon: "🖥",
      waMsg: "Hi, I'm interested in a Design Review.",
    },
    {
      id: "fabrication",
      title: "Request Fabrication Quote",
      fields: ["Material", "Quantity", "Deadline"],
      color: "bg-orange-500",
      icon: "🏭",
      waMsg: "Hello, I want to request a Fabrication Quote.",
    },
    {
      id: "consulting",
      title: "Consult a Bridge Engineer",
      fields: ["Project Stage", "Location"],
      color: "bg-green-500",
      icon: "🌉",
      waMsg: "Hi, I need to consult a Bridge Engineer.",
    },
    {
      id: "investment",
      title: "Seek Investment",
      fields: ["Startup Name", "Stage", "Brief"],
      color: "bg-purple-500",
      icon: "💰",
      waMsg: "Hello, I'd like to discuss an investment opportunity.",
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where Does Your Project Need Support?
          </h2>
          <p className="text-xl text-gray-300">
            Get started with the right expertise for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {forms.map((form) => (
            <div key={form.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{form.icon}</div>
                <h3 className="text-m font-semibold mb-3">{form.title}</h3>
              </div>

              {/* WhatsApp Get Started button */}
              <Button
                asChild
                className={`w-full ${form.color} hover:opacity-90`}
              >
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(form.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Start WhatsApp chat about "${form.title}"`}
                  title={`Start WhatsApp chat about "${form.title}"`}
                >
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            Not sure which service you need? Let's have a conversation.
          </p>
          <Button variant="outline" size="lg" className="border-white text-blue bg-transparent hover:bg-white hover:text-gray-900">
            Schedule a Consultation Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFooterSection;
