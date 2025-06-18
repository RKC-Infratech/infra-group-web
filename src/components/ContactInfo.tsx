
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const info = [
  {
    icon: <MapPin className="text-primary" />,
    label: "Headquarter",
    content: "85, RRR House, Capitol Hill (Alpine Jewel), Kolar Road, Bhopal, MP, India - 462042",
  },
  {
    icon: <Mail className="text-primary" />,
    label: "Email",
    content: "rkc@imagineeringbridges.com",
    link: "mailto:rkc@imagineeringbridges.com"
  },
  {
    icon: <Phone className="text-primary" />,
    label: "Phone",
    content: "+91 7880123365",
    link: "tel:+917880123365"
  },
  {
    icon: <Clock className="text-primary" />,
    label: "Business Hours",
    content: "Mon - Sun: 9:00 AM - 6:30 PM",
  }
];

const ContactInfo = () => (
  <Card className="mb-4 animate-fade-in shadow-xl border bg-gradient-to-br from-white via-slate-50 to-blue-100 hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary/60">
    <CardHeader>
      <CardTitle className="text-2xl text-primary mb-2 font-playfair flex items-center gap-2 animate-fade-in">
        <span>Get in Touch</span>
        <span className="inline-block w-2 h-2 rounded-full bg-primary/60 animate-pulse"></span>
      </CardTitle>
      <p className="text-muted-foreground text-sm">
        We're here to support your infrastructure project at every stage.
      </p>
    </CardHeader>
    <CardContent>
      <div className="space-y-5">
        {info.map((item, i) => (
          <div
            className="flex items-start gap-3 group rounded-lg hover:bg-primary/5 transition-all duration-200 cursor-pointer focus-within:ring-1 focus-within:ring-primary"
            key={i}
            tabIndex={0}
          >
            <div className="pt-1 group-hover:-translate-y-1 transition-transform duration-200">{item.icon}</div>
            <div>
              <div className="font-medium text-gray-800 group-hover:text-primary transition-colors duration-200">{item.label}</div>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-primary underline text-sm hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {item.content}
                </a>
              ) : (
                <div className="text-gray-600 text-sm">{item.content}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);
export default ContactInfo;
