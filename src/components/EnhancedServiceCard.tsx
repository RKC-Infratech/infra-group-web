
import { Link } from "react-router-dom";
import { useState } from "react";

interface EnhancedServiceCardProps {
  title: string;
  tagline: string;
  keyService: string;
  icon: string;
  link: string;
  projectImage?: string;
  accentColor: string;
}

const EnhancedServiceCard = ({ 
  title, 
  tagline, 
  keyService, 
  icon, 
  link, 
  projectImage, 
  accentColor 
}: EnhancedServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDefaultImage = (title: string) => {
    if (title.includes("RKC Infratech")) {
      return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    } else if (title.includes("Imagineering")) {
      return "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    } else if (title.includes("Riyare")) {
      return "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    } else {
      return "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <div 
      className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 cursor-pointer ${
        isHovered ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderTop: `4px solid ${accentColor}` }}
    >
      {/* Main Content */}
      <div className={`p-6 transition-all duration-500 ${isHovered ? 'pb-2' : ''}`}>
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900" style={{ color: accentColor }}>
              {title}
            </h3>
            <p className="text-sm text-gray-600 font-medium">Key Service: {keyService}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 italic">"{tagline}"</p>
        
        <Link 
          to={link}
          className="inline-flex items-center font-medium transition-colors"
          style={{ color: accentColor }}
        >
          Learn More
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Expanded Content on Hover */}
      <div className={`transition-all duration-500 overflow-hidden ${
        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6">
          <div className="h-32 overflow-hidden rounded-lg mb-3">
            <img 
              src={projectImage || getDefaultImage(title)} 
              alt={`${title} project`}
              className="w-full h-full object-cover"
            />
          </div>
          <Link 
            to={link}
            className="inline-block w-full text-center py-2 px-4 rounded-lg text-white font-medium transition-colors"
            style={{ backgroundColor: accentColor }}
          >
            Visit Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServiceCard;
