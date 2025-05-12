const OurStory = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-3">About Us</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
          </div>
          
          <div className="bg-white p-8 rounded-[12px] shadow-lg">
            <p className="text-gray-700 mb-6 text-lg">
              The Hockey Hall of Good was established in 2020 by a group of passionate hockey historians and fans who believed that many excellent players were being overlooked in discussions about hockey greatness.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              While the Hockey Hall of Fame recognizes the sport's absolute elite, we celebrate those players who made significant contributions to the game, excited fans, and achieved notable success without quite reaching the pinnacle of Hall of Fame status.
            </p>
            
            <div className="flex items-center justify-center my-8">
              <img 
                src="https://pixabay.com/get/gc49ef8c9ad2a6b6b84311bec93d4ebad8b122d689d152173727270433a4bd18eebb45253d56abf60468f1abdfcfe6448969af5455f64371091bda030c629fae2_1280.jpg" 
                alt="Hockey fans celebrating" 
                className="rounded-[12px] shadow-md max-w-full h-auto" 
              />
            </div>
            
            <p className="text-gray-700 mb-6 text-lg">
              Our selection committee consists of journalists, former players, and hockey analysts who carefully consider each nominee's career achievements, impact on their teams, and contributions to the sport as a whole.
            </p>
            
            <p className="text-gray-700 text-lg">
              Each year, we induct new members to the Hockey Hall of Good, preserving their legacies and ensuring that hockey fans of all generations can appreciate the full spectrum of talent that has graced the ice over the decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
