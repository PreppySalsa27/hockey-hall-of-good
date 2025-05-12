import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Player } from "@/data/players";

interface FeaturedInducteeProps {
  player: Player;
}

const FeaturedInductee = ({ player }: FeaturedInducteeProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/20 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-3">Latest Inductee</span>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4">{player.name}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {player.nickname && `The "${player.nickname}" who `}electrified fans with his lightning speed and goal-scoring prowess.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            {/* Hockey player image */}
            <img 
              src="https://pixabay.com/get/g2b653829c3d859d0334fbdc0caaef1e577882025faadbe9c8f12f7a4758558bc0f6aa8c5e09d49fa659664247289c9b07b73ad71e990cafbe00f8ae22b878638_1280.jpg" 
              alt={`${player.name} in action`} 
              className="rounded-[12px] shadow-lg w-full h-auto object-cover" 
            />
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="bg-background p-8 rounded-[12px]">
              <div className="flex justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{player.name}</h3>
                  <p className="text-gray-500">{player.teamsArray.join(", ")}</p>
                </div>
                <div className="text-right">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Inducted {player.inducted}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-[12px] shadow">
                  <p className="text-gray-500 text-sm">Goals</p>
                  <p className="text-2xl font-bold text-primary">{player.goals}</p>
                </div>
                <div className="bg-white p-4 rounded-[12px] shadow">
                  <p className="text-gray-500 text-sm">Assists</p>
                  <p className="text-2xl font-bold text-primary">{player.assists}</p>
                </div>
                <div className="bg-white p-4 rounded-[12px] shadow">
                  <p className="text-gray-500 text-sm">Points</p>
                  <p className="text-2xl font-bold text-primary">{player.points}</p>
                </div>
                <div className="bg-white p-4 rounded-[12px] shadow">
                  <p className="text-gray-500 text-sm">Games</p>
                  <p className="text-2xl font-bold text-primary">{player.gamesPlayed}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {player.bio.split('.')[0] + '.'}
              </p>
              
              <div className="flex justify-between items-center">
                <ul className="flex flex-wrap gap-2">
                  {player.awards.slice(0, 2).map((award, index) => (
                    <li key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">{award}</li>
                  ))}
                </ul>
                
                <Link href={`/player/${player.id}`}>
                  <a className="text-primary hover:text-secondary font-medium flex items-center">
                    <span>Full Profile</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInductee;
