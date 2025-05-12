import { useLocation } from "wouter";

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

const HeroSection = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Celebrating Hockey's <span className="text-accent">Unsung Heroes</span>
            </h1>
            <p className="text-white text-lg md:text-xl opacity-90 mb-8">
              Honoring remarkable players who made significant contributions to the sport but might not have reached Hall of Fame status.
            </p>
            <div className="flex space-x-4">
              <CustomLink 
                href="/inductees" 
                className="bg-white text-primary hover:bg-accent hover:text-primary px-6 py-3 rounded-[12px] font-medium transition duration-200 shadow-lg"
              >
                View Inductees
              </CustomLink>
              <CustomLink 
                href="/about" 
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary px-6 py-3 rounded-[12px] font-medium transition duration-200"
              >
                Our Story
              </CustomLink>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img 
              src="https://pixabay.com/get/g66c8e369360884dffb892f383c6bc57ccbee1927831632caef839e2ec1976c0a3a4a6c9569015e7aae6cabf031103cab8cecab554bfa4ee7b67cf2b4e8974509_1280.jpg" 
              alt="Hockey player in action" 
              className="rounded-[12px] shadow-xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
