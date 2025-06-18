
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Imagineering Bridges Group</h3>
            <p className="text-gray-300 mb-6">
              Engineering, Building, and Funding India's Future through innovative infrastructure solutions and strategic investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/in/rakesh-kumar-choubeyceng" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Our Companies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Companies</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/rkc-infratech" className="hover:text-white transition-colors">
                  RKC Infratech
                </a>
              </li>
              <li>
                <a href="/imagineering-bridges" className="hover:text-white transition-colors">
                  Imagineering Bridges India LLP
                </a>
              </li>
              <li>
                <a href="/riyare-micro-construct" className="hover:text-white transition-colors">
                  Riyare Micro Construct LLP
                </a>
              </li>
              <li>
                <a href="/rkchoubey-family-office" className="hover:text-white transition-colors">
                  R.K. Choubey Family Office
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              {/*   <li>
                <a href="/manufacturing" className="hover:text-white transition-colors">
                  Manufacturing
                </a>
              </li>
              
              <li>
                <a href="/news" className="hover:text-white transition-colors">
                  News & Updates
                </a>
              </li>
              */}
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>85,RRR House, Capitol Hill (Alpine Jewel),Kolar Road,</p>
                  <p>Bhopal, Madhya Pradesh,</p>
                  <p>India - 462042</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <p>+91 7880123365</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <p>rkc@imagineeringbridges.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="flex-shrink-0" />
                <div>
                  <p>Mon - Sun: 9:00 AM - 6:30 PM</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
              <p>&copy; 2024 Imagineering Bridges Group. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-gray-300 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-4">
            <p>Certified ISO 9001:2015 | Member of Indian Roads Congress | NHAI Approved Contractor</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
