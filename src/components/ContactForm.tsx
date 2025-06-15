
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

const services = [
  "RKC Infratech - Design Consultancy",
  "Imagineering Bridges - Fabrication",
  "Riyare Micro Construct - Bridge Construction",
  "R.K. Choubey Family Office - Investment/CSR",
  "General Inquiry"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    contact_number: "",
    service: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Insert form data into Supabase contact_submissions table
    const { error } = await supabase.from("contact_submissions").insert([
      {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        contact_number: formData.contact_number || null,
        service: formData.service || null,
        message: formData.message
      }
    ]);
    setLoading(false);

    if (error) {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      contact_number: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-br from-white via-blue-50 to-slate-100 p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <Card className="shadow-none border-0 backdrop-blur-md bg-white/80">
          <CardHeader>
            <CardTitle className="text-2xl text-primary mb-2 font-playfair flex items-center gap-2 animate-fade-in">
              Send us a Message
              <span className="inline-block w-2 h-2 rounded-full bg-primary/70 animate-pulse"></span>
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              We usually respond within 24 hours.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="hover:shadow focus:shadow-lg transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@email.com"
                    className="hover:shadow focus:shadow-lg transition-shadow"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Organization
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company name"
                    className="hover:shadow focus:shadow-lg transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <Input
                    type="tel"
                    id="contact_number"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 9876543210"
                    className="hover:shadow focus:shadow-lg transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:shadow hover:border-primary/40 transition-shadow bg-white/95 z-20"
                  style={{ minHeight: "44px" }}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project or your questions..."
                  className="hover:shadow focus:shadow-lg transition-shadow"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full hover:scale-[1.04] active:scale-100 transition-transform duration-150 bg-primary hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;

