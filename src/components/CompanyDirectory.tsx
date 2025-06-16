
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const companies = [
  {
    name: "RKC Infratech",
    specialization: "Design Consultancy",
    contact: "rkcinfra@gmail.com",
    mobile: "+91 7880123365"
  },
  {
    name: "Imagineering Bridges",
    specialization: "Fabrication Services",
    contact: "rkc@imagineeringbridges.com",
    mobile: "+91 950605713"
  },
  {
    name: "Riyare Micro Construct",
    specialization: "Bridge Construction",
    contact: "riyaremicroconstruct@gmail.com",
    mobile: "+91 7880123365"
  },
  {
    name: "R.K. Choubey Family Office",
    specialization: "Investment & CSR",
    contact: "rkc@imagineeringbridges.com",
    mobile: ""
  }
];

const colorVariants = [
  "from-blue-100 via-blue-50 to-white",
  "from-green-100 via-green-50 to-white",
  "from-yellow-100 via-yellow-50 to-white",
  "from-purple-100 via-purple-50 to-white"
];

const CompanyDirectory = () => (
  <section className="mt-8 animate-fade-in">
    <h2 className="text-3xl font-bold text-center text-primary mb-10 font-playfair tracking-tight animate-fade-in">
      Our Network of Specialized Firms
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {companies.map((company, i) => (
        <Card
          key={company.name}
          className={`
            rounded-xl shadow-md p-7 flex flex-col items-center text-center
            bg-gradient-to-br ${colorVariants[i % colorVariants.length]}
            hover:scale-105 hover:shadow-2xl hover:bg-white ring-1 ring-transparent hover:ring-primary/40 transition-all duration-300
            group animate-fade-in
          `}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <h3 className="font-semibold text-gray-900 mb-1 text-lg group-hover:text-primary transition-colors duration-200">{company.name}</h3>
          <div className="w-10 h-1 bg-primary/20 rounded mx-auto mb-1"></div>
          <p className="text-sm text-gray-600 mb-2">{company.specialization}</p>
          <div className="flex flex-col items-center gap-1 text-primary">
            <div className="flex items-center gap-1">
              <Mail size={16} className="mr-1" />
              <a href={`mailto:${company.contact}`} className="underline hover:text-primary/80 transition-colors">{company.contact}</a>
            </div>
            {company.mobile && (
              <div className="flex items-center gap-1">
                <Phone size={16} className="mr-1" />
                <a
                  href={`tel:${company.mobile.replace(/\s/g, "")}`}
                  className="underline hover:text-primary/80 transition-colors"
                >
                  {company.mobile}
                </a>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  </section>
);
export default CompanyDirectory;
