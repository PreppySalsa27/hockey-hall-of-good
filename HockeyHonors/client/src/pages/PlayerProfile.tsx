import { useParams } from "wouter";
import { useEffect } from "react";
import { getPlayerById } from "@/data/players";
import CareerTimeline from "@/components/CareerTimeline";
import PlayerGallery from "@/components/PlayerGallery";
import { Trophy, Award, Star } from "lucide-react";

const PlayerProfile = () => {
  const { id } = useParams();
  const player = getPlayerById(id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!player) {
    return (
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4">Player Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the player you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <section id="player-profile" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/20 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-3">Player Profile</span>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4">{player.name}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {player.nickname && `"${player.nickname}" | `}{player.position} | {player.yearsActive}
          </p>
        </div>
        
        <div className="bg-white rounded-[12px] shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 bg-primary">
              {/* Player in jersey - using a generic hockey image */}
              <img 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800" 
                alt={player.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex flex-wrap justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">{player.name}</h3>
                  <p className="text-gray-600">Born {player.birthDate} in {player.birthPlace}</p>
                </div>
                <div>
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Inducted {player.inducted}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-background p-4 rounded-[12px]">
                  <p className="text-gray-500 text-sm font-medium">NHL Seasons</p>
                  <p className="text-xl font-bold text-primary">{player.yearsActive.split("-").reduce((acc, val) => parseInt(val) - parseInt(player.yearsActive.split("-")[0]) + 1)}</p>
                </div>
                <div className="bg-background p-4 rounded-[12px]">
                  <p className="text-gray-500 text-sm font-medium">Games Played</p>
                  <p className="text-xl font-bold text-primary">{player.gamesPlayed}</p>
                </div>
                <div className="bg-background p-4 rounded-[12px]">
                  <p className="text-gray-500 text-sm font-medium">Goals/Game</p>
                  <p className="text-xl font-bold text-primary">{(player.goals / player.gamesPlayed).toFixed(2)}</p>
                </div>
                <div className="bg-background p-4 rounded-[12px]">
                  <p className="text-gray-500 text-sm font-medium">Points/Game</p>
                  <p className="text-xl font-bold text-primary">{(player.points / player.gamesPlayed).toFixed(2)}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {player.bio}
              </p>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Career Highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  {player.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      {highlight.includes("Trophy") ? (
                        <Trophy className="text-accent mr-2 h-5 w-5" />
                      ) : highlight.includes("Medal") ? (
                        <Award className="text-accent mr-2 h-5 w-5" />
                      ) : (
                        <Star className="text-accent mr-2 h-5 w-5" />
                      )}
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Career Timeline */}
        <CareerTimeline timelineItems={player.careerTimeline} />
        
        {/* Career Statistics */}
        <div className="bg-white rounded-[12px] shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold">Career Statistics</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Season</th>
                  <th className="py-3 px-4 text-left">Team</th>
                  <th className="py-3 px-4 text-center">GP</th>
                  <th className="py-3 px-4 text-center">G</th>
                  <th className="py-3 px-4 text-center">A</th>
                  <th className="py-3 px-4 text-center">PTS</th>
                  <th className="py-3 px-4 text-center">+/-</th>
                  <th className="py-3 px-4 text-center">PIM</th>
                </tr>
              </thead>
              <tbody>
                {player.careerStats.map((stat, index) => (
                  <tr 
                    key={index} 
                    className={`
                      border-b border-gray-200 hover:bg-gray-50
                      ${stat.season === "Career" ? "font-semibold bg-gray-100" : ""}
                      ${stat.season !== "Career" && index % 2 === 1 ? "bg-gray-50" : ""}
                    `}
                  >
                    <td className="py-3 px-4">{stat.season}</td>
                    <td className="py-3 px-4">{stat.team}</td>
                    <td className="py-3 px-4 text-center">{stat.gp}</td>
                    <td className="py-3 px-4 text-center">{stat.g}</td>
                    <td className="py-3 px-4 text-center">{stat.a}</td>
                    <td className="py-3 px-4 text-center">{stat.pts}</td>
                    <td className="py-3 px-4 text-center">{stat.plusMinus}</td>
                    <td className="py-3 px-4 text-center">{stat.pim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Photo Gallery */}
        <PlayerGallery playerName={player.name} />
      </div>
    </section>
  );
};

export default PlayerProfile;
