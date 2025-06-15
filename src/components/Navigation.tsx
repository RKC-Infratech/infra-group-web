
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    {
      label: "Services",
      submenu: [
        { path: "/rkc-infratech", label: "RKC Infratech" },
        { path: "/imagineering-bridges", label: "Imagineering Bridges" },
        { path: "/riyare-micro-construct", label: "Riyare Micro Construct" },
        { path: "/rkchoubey-family-office", label: "R.K. Choubey Family Office" },
      ]
    },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    //{ path: "/manufacturing", label: "Manufacturing" },
   // { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" }, // <--- this is the Contact button
  ];

  const getLogoForCurrentPage = () => {
    if (location.pathname === "/imagineering-bridges") {
      return (
        <img 
          src="/lovable-uploads/3d058085-125c-4835-ba9c-5b3b8492b5a5.png" 
          alt="Imagineering Bridges India LLP" 
          className="h-8 md:h-10"
        />
      );
    }
    if (location.pathname === "/riyare-micro-construct") {
      return (
        <img 
          src="/lovable-uploads/5558ae05-e6ec-41d2-9667-53db85f0ce8c.png" 
          alt="Riyare Micro Construct LLP" 
          className="h-8 md:h-10"
        />
      );
    }
    if (location.pathname === "/rkchoubey-family-office") {
      return (
        <img 
          src="/lovable-uploads/family-office-logo.jpg" 
          alt="R.K. Choubey Family Office" 
          className="h-8 md:h-10"
        />
      );
    }
    return (
        <img 
          src="/lovable-uploads/rkc-infratech.png" 
          alt="RKC Infratech" 
          className="h-8 md:h-10"
        />
      );
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              {getLogoForCurrentPage()}
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div>
                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
                      {item.label}
                    </button>
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-primary border-b-2 border-primary bg-primary/10 rounded shadow-sm" // Highlight active nav button
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <div className="px-3 py-2 text-base font-medium text-gray-700">{item.label}</div>
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`block px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                          location.pathname === subItem.path
                            ? "text-primary bg-primary/10"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

