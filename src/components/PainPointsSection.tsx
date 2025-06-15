
import { X, CheckCircle } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    {
      problem: "Delays due to design errors",
      solution: "RKC's error-proof CAD designs",
      icon: "🖥"
    },
    {
      problem: "Costly fabrication delays",
      solution: "Imagineering's ready stock",
      icon: "🏭"
    },
    {
      problem: "Bridge construction risks",
      solution: "Riyare's precast expertise",
      icon: "🌉"
    },
    {
      problem: "Funding gaps",
      solution: "Choubey's investment support",
      icon: "💰"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Challenges, Our Solutions
          </h2>
          <p className="text-xl text-gray-600">
           Your Infrastructure Vision, Delivered with Precision Engineering & Customized Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problems Column */}
          <div className="bg-red-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
              <X className="mr-3 text-red-600" size={28} />
              Common Challenges
            </h3>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl">{point.icon}</div>
                  <span className="text-gray-800 font-medium">{point.problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <CheckCircle className="mr-3 text-green-600" size={28} />
              Our Solutions
            </h3>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl">{point.icon}</div>
                  <span className="text-gray-800 font-medium">{point.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="#firms" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Match Your Project to a Solution
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
