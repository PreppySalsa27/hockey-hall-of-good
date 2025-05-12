const Rules = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-3">Selection Process</span>
            <h1 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4">Hockey Hall of Good Rules</h1>
          </div>
          
          <div className="bg-white p-8 rounded-[12px] shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Eligibility Criteria</h2>
            <p className="text-gray-700 mb-6 text-lg">
              To be eligible for the Hockey Hall of Good, players must meet the following criteria:
            </p>
            
            <div className="bg-background p-6 rounded-[12px] mb-8">
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li className="pl-2">Played at least 500 games in the NHL (300 for goaltenders)</li>
                <li className="pl-2">Been retired from professional hockey for at least three years</li>
                <li className="pl-2">Made notable contributions to the sport through skill, leadership, character, or unique playing style</li>
                <li className="pl-2">Not currently inducted in the Hockey Hall of Fame</li>
                <li className="pl-2">Demonstrated good sportsmanship and character throughout their career</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Selection Process</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Each year, our selection committee follows these steps to choose new inductees:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-6 rounded-[12px] shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Nomination Phase</h3>
                <p className="text-gray-700 mb-4">
                  Fans, committee members, and hockey analysts can submit nominations through our website during the annual nomination period (January 1 - March 31).
                </p>
                <p className="text-gray-700">
                  Each nomination must include career statistics, notable achievements, and a compelling case for induction.
                </p>
              </div>
              <div className="bg-background p-6 rounded-[12px] shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Review Phase</h3>
                <p className="text-gray-700 mb-4">
                  Our selection committee reviews all nominations in April and May, creating a shortlist of candidates based on statistical analysis, impact on the game, and memorable moments.
                </p>
                <p className="text-gray-700">
                  The committee may conduct interviews with former teammates, coaches, and observers to gather additional insight.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-6 rounded-[12px] shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Voting Phase</h3>
                <p className="text-gray-700 mb-4">
                  The selection committee votes on shortlisted candidates in June. Each committee member ranks their top 10 choices.
                </p>
                <p className="text-gray-700">
                  Points are assigned based on ranking positions. A candidate must receive at least 75% of the maximum possible points to be inducted.
                </p>
              </div>
              <div className="bg-background p-6 rounded-[12px] shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Announcement & Induction</h3>
                <p className="text-gray-700 mb-4">
                  New inductees are announced on July 1st each year, with formal induction ceremonies taking place in September.
                </p>
                <p className="text-gray-700">
                  Up to three players can be inducted in a single year, with a maximum of one per position (forward, defenseman, goaltender).
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Special Considerations</h2>
            <p className="text-gray-700 mb-6 text-lg">
              In certain cases, the committee may consider additional factors:
            </p>
            
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li className="pl-2">Players with careers shortened by injury may have the games-played requirement adjusted</li>
              <li className="pl-2">Significant international hockey achievements may be considered alongside NHL performance</li>
              <li className="pl-2">Community impact and growth of the game contributions may be considered as supplementary factors</li>
            </ul>
            
            <div className="p-6 border border-accent rounded-[12px] bg-accent/10 mt-8">
              <h3 className="text-xl font-semibold text-primary mb-2">Submit a Nomination</h3>
              <p className="text-gray-700 mb-4">
                Do you know a player who deserves recognition in the Hockey Hall of Good? Nominations for the next induction class are now open.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-[12px] transition duration-200">
                Nominate a Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;