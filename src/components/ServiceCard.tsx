
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  className?: string;
}

const ServiceCard = ({ title, description, link, image, className = "" }: ServiceCardProps) => {
  const getDefaultImage = (title: string) => {
    if (title.includes("RKC Infratech")) {
      return "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    } else if (title.includes("Imagineering")) {
      return "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    } else if (title.includes("Riyare")) {
      return "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    } else {
      return "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image || getDefaultImage(title)} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Learn More
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
