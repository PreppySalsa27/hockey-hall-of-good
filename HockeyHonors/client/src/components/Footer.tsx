import { useLocation } from "wouter";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

// Fix nesting issue with Link and a elements
const CustomLink = ({ href, children, className }: { 
  href: string, 
  children: React.ReactNode, 
  className?: string
}) => {
  return (
    <a 
      href={href} 
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState({}, "", href);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }}
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Hockey Hall of Good</h3>
            <p className="text-gray-300 mb-4">
              Celebrating hockey's remarkable players who might not have reached Hall of Fame status.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <CustomLink href="/" className="text-gray-300 hover:text-white transition duration-200">
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/inductees" className="text-gray-300 hover:text-white transition duration-200">
                  All Inductees
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/about" className="text-gray-300 hover:text-white transition duration-200">
                  About Us
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/rules" className="text-gray-300 hover:text-white transition duration-200">
                  Selection Rules
                </CustomLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">NHL History</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">Statistics Database</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">Nomination Process</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-200">Media Resources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <CustomLink href="/contact" className="text-gray-300 hover:text-white transition duration-200 flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-1" />
                  <span>info@hockeyhallofgood.com</span>
                </CustomLink>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>123 Hockey Lane<br />Toronto, ON, Canada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hockey Hall of Good. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <CustomLink href="/about" className="text-gray-400 hover:text-white text-sm transition duration-200">
              About Us
            </CustomLink>
            <CustomLink href="/rules" className="text-gray-400 hover:text-white text-sm transition duration-200">
              Selection Rules
            </CustomLink>
            <CustomLink href="/contact" className="text-gray-400 hover:text-white text-sm transition duration-200">
              Contact
            </CustomLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
