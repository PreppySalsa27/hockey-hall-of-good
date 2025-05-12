const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-3">About Us</span>
            <h1 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4">About the Hockey Hall of Good</h1>
          </div>
          
          <div className="bg-white p-8 rounded-[12px] shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6 text-lg">
              The Hockey Hall of Good was established in 2020 by a group of passionate hockey historians and fans who believed that many excellent players were being overlooked in discussions about hockey greatness.
            </p>
            
            <div className="flex items-center justify-center my-8">
              <img 
                src="https://pixabay.com/get/gc49ef8c9ad2a6b6b84311bec93d4ebad8b122d689d152173727270433a4bd18eebb45253d56abf60468f1abdfcfe6448969af5455f64371091bda030c629fae2_1280.jpg" 
                alt="Hockey fans celebrating" 
                className="rounded-[12px] shadow-md max-w-full h-auto" 
              />
            </div>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Our organization consists of a diverse team of hockey analysts, former players, journalists, and dedicated fans who share a common love for the sport and its rich history. Together, we've created a platform to recognize players who may not have Hall of Fame credentials but whose contributions to the game deserve celebration.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Our Selection Committee</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Our selection committee consists of journalists, former players, and hockey analysts who carefully consider each nominee's career achievements, impact on their teams, and contributions to the sport as a whole.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-background p-6 rounded-[12px] shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Analysts & Historians</h3>
                <p className="text-gray-700">
                  Hockey experts who bring statistical analysis and historical context to our selection process.
                </p>
              </div>
              <div className="bg-background p-6 rounded-[12px] shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Former Players</h3>
                <p className="text-gray-700">
                  Those who have experienced the game firsthand bring valuable perspective to evaluating player contributions.
                </p>
              </div>
              <div className="bg-background p-6 rounded-[12px] shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Hockey Journalists</h3>
                <p className="text-gray-700">
                  Media professionals who have covered the game for decades and understand the narratives beyond statistics.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              Each year, we induct new members to the Hockey Hall of Good, preserving their legacies and ensuring that hockey fans of all generations can appreciate the full spectrum of talent that has graced the ice over the decades. Our goal is to create a comprehensive celebration of hockey excellence that complements the official Hall of Fame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;