import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Fix nesting issue with Link and a elements
const CustomLink = ({ href, children, className, onClick }: { 
  href: string, 
  children: React.ReactNode, 
  className?: string,
  onClick?: () => void
}) => {
  const [location] = useLocation();
  const isActive = location === href;
  
  return (
    <a 
      href={href} 
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState({}, "", href);
        window.dispatchEvent(new PopStateEvent("popstate"));
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <CustomLink href="/" className="flex items-center space-x-2">
            <span className="text-primary font-poppins text-2xl md:text-3xl font-bold">
              Hockey Hall of Good
            </span>
          </CustomLink>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-primary"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <CustomLink 
              href="/" 
              className={`${isActive("/") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
            >
              Home
            </CustomLink>
            <CustomLink 
              href="/inductees" 
              className={`${isActive("/inductees") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
            >
              All Inductees
            </CustomLink>
            <CustomLink 
              href="/about" 
              className={`${isActive("/about") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
            >
              About
            </CustomLink>
            <CustomLink 
              href="/rules" 
              className={`${isActive("/rules") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
            >
              Rules
            </CustomLink>
            <CustomLink 
              href="/contact" 
              className={`${isActive("/contact") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
            >
              Contact
            </CustomLink>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition duration-200"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <CustomLink
                href="/"
                className={`${isActive("/") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </CustomLink>
              <CustomLink
                href="/inductees"
                className={`${isActive("/inductees") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                All Inductees
              </CustomLink>
              <CustomLink
                href="/about"
                className={`${isActive("/about") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </CustomLink>
              <CustomLink
                href="/rules"
                className={`${isActive("/rules") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Rules
              </CustomLink>
              <CustomLink
                href="/contact"
                className={`${isActive("/contact") ? "text-secondary" : "text-primary"} hover:text-secondary font-medium transition duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </CustomLink>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition duration-200 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="h-5 w-5 mr-2" /> Follow us on Instagram
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
