import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowUpDown, User } from "lucide-react";

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Player } from "@/data/players";
import { useSort } from "@/hooks/useSort";

interface InducteeTableProps {
  players: Player[];
}

const InducteeTable = ({ players }: InducteeTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [positionFilter, setPositionFilter] = useState("all");
  const [eraFilter, setEraFilter] = useState("all");
  
  const { sortedItems, sortConfig, requestSort } = useSort(players, {
    key: "name",
    direction: "asc",
  });

  const filteredPlayers = sortedItems.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === "all" || player.position === positionFilter;
    let matchesEra = true;
    
    if (eraFilter !== "all") {
      const decade = eraFilter;
      const yearStart = parseInt(decade.replace("s", ""));
      const yearEnd = yearStart + 9;
      const playerStartYear = parseInt(player.yearsActive.split("-")[0]);
      matchesEra = playerStartYear >= yearStart && playerStartYear <= yearEnd;
    }
    
    return matchesSearch && matchesPosition && matchesEra;
  });

  const getSortDirection = (key: string) => {
    if (!sortConfig) return null;
    return sortConfig.key === key ? sortConfig.direction : null;
  };

  return (
    <section id="all-inductees" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/20 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-3">The Inductees</span>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4">All Members</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our complete list of Hockey Hall of Good inductees, featuring players who made their mark on the game.
          </p>
        </div>
        
        <div className="bg-background p-4 rounded-[12px] mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="mr-2 text-gray-700">Filter by:</span>
              <Select value={positionFilter} onValueChange={setPositionFilter}>
                <SelectTrigger className="bg-white w-[150px]">
                  <SelectValue placeholder="All Positions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Positions</SelectItem>
                  <SelectItem value="C">Center</SelectItem>
                  <SelectItem value="RW">Right Wing</SelectItem>
                  <SelectItem value="LW">Left Wing</SelectItem>
                  <SelectItem value="D">Defense</SelectItem>
                  <SelectItem value="G">Goalie</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={eraFilter} onValueChange={setEraFilter}>
                <SelectTrigger className="bg-white w-[150px]">
                  <SelectValue placeholder="All Eras" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Eras</SelectItem>
                  <SelectItem value="1970s">1970s</SelectItem>
                  <SelectItem value="1980s">1980s</SelectItem>
                  <SelectItem value="1990s">1990s</SelectItem>
                  <SelectItem value="2000s">2000s</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search players..."
                className="bg-white pl-10 pr-4 py-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto bg-white rounded-[12px] shadow-lg">
          <Table id="inducteeTable">
            <TableHeader className="bg-primary text-white sticky top-0">
              <TableRow>
                <TableHead 
                  className="text-white cursor-pointer"
                  onClick={() => requestSort("name")}
                >
                  <div className="flex items-center">
                    <span>Player Name</span>
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${getSortDirection("name") === "asc" ? "rotate-180" : ""}`} />
                  </div>
                </TableHead>
                <TableHead 
                  className="text-white cursor-pointer"
                  onClick={() => requestSort("position")}
                >
                  <div className="flex items-center">
                    <span>Position</span>
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${getSortDirection("position") === "asc" ? "rotate-180" : ""}`} />
                  </div>
                </TableHead>
                <TableHead className="text-white">Teams</TableHead>
                <TableHead 
                  className="text-white text-right cursor-pointer"
                  onClick={() => requestSort("goals")}
                >
                  <div className="flex items-center justify-end">
                    <span>Goals</span>
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${getSortDirection("goals") === "asc" ? "rotate-180" : ""}`} />
                  </div>
                </TableHead>
                <TableHead 
                  className="text-white text-right cursor-pointer"
                  onClick={() => requestSort("assists")}
                >
                  <div className="flex items-center justify-end">
                    <span>Assists</span>
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${getSortDirection("assists") === "asc" ? "rotate-180" : ""}`} />
                  </div>
                </TableHead>
                <TableHead 
                  className="text-white text-right cursor-pointer"
                  onClick={() => requestSort("points")}
                >
                  <div className="flex items-center justify-end">
                    <span>Points</span>
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${getSortDirection("points") === "asc" ? "rotate-180" : ""}`} />
                  </div>
                </TableHead>
                <TableHead 
                  className="text-white text-center cursor-pointer"
                  onClick={() => requestSort("inducted")}
                >
                  <div className="flex items-center justify-center">
                    <span>Inducted</span>
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${getSortDirection("inducted") === "asc" ? "rotate-180" : ""}`} />
                  </div>
                </TableHead>
                <TableHead className="text-white text-center">Profile</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPlayers.map((player, index) => (
                <TableRow 
                  key={player.id} 
                  className={`border-b border-gray-200 hover:bg-gray-50 transition duration-150 ${index % 2 === 1 ? "bg-gray-50" : ""}`}
                >
                  <TableCell className="font-medium">
                    <CustomLink 
                      href={`/player/${player.id}`} 
                      className="text-primary hover:text-secondary transition duration-200"
                    >
                      {player.name}
                    </CustomLink>
                  </TableCell>
                  <TableCell>{player.position}</TableCell>
                  <TableCell>{player.teams}</TableCell>
                  <TableCell className="text-right">{player.goals}</TableCell>
                  <TableCell className="text-right">{player.assists}</TableCell>
                  <TableCell className="text-right">{player.points}</TableCell>
                  <TableCell className="text-center">{player.inducted}</TableCell>
                  <TableCell className="text-center">
                    <CustomLink 
                      href={`/player/${player.id}`} 
                      className="text-primary hover:text-secondary inline-block"
                    >
                      <User className="h-5 w-5" />
                    </CustomLink>
                  </TableCell>
                </TableRow>
              ))}
              {filteredPlayers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                    No players match your search criteria
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        {filteredPlayers.length > 0 && (
          <div className="mt-6 flex justify-center">
            <nav className="flex items-center space-x-2">
              <a href="#" className="px-3 py-2 rounded-md bg-primary text-white">1</a>
              <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-200 text-gray-700">2</a>
              <span className="px-3 py-2">...</span>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default InducteeTable;
