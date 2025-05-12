export interface Player {
  id: string;
  name: string;
  nickname?: string;
  position: string;
  teams: string;
  teamsArray: string[];
  goals: number;
  assists: number;
  points: number;
  gamesPlayed: number;
  birthDate: string;
  birthPlace: string;
  yearsActive: string;
  inducted: number;
  highlights: string[];
  awards: string[];
  bio: string;
  careerStats: CareerStat[];
  careerTimeline: CareerTimelineItem[];
}

export interface CareerStat {
  season: string;
  team: string;
  gp: number;
  g: number;
  a: number;
  pts: number;
  plusMinus: number;
  pim: number;
}

export interface CareerTimelineItem {
  id: number;
  team: string;
  years: string;
  description: string;
}

export const players: Player[] = [
  {
    id: "pavel-bure",
    name: "Pavel Bure",
    nickname: "The Russian Rocket",
    position: "RW",
    teams: "VAN, FLA, NYR",
    teamsArray: ["Vancouver Canucks", "Florida Panthers", "New York Rangers"],
    goals: 437,
    assists: 342,
    points: 779,
    gamesPlayed: 702,
    birthDate: "March 31, 1971",
    birthPlace: "Moscow, Russia",
    yearsActive: "1991-2003",
    inducted: 2023,
    highlights: [
      "Calder Memorial Trophy (1992)",
      "2× Maurice 'Rocket' Richard Trophy",
      "6× NHL All-Star",
      "Olympic Silver Medal (1998)"
    ],
    awards: [
      "2× Rocket Richard Winner",
      "Calder Trophy"
    ],
    bio: "Pavel Bure was one of the most electrifying players of his generation, combining blazing speed with elite goal-scoring ability. Known as \"The Russian Rocket,\" Bure captivated fans with his explosive acceleration and highlight-reel goals. Despite a career shortened by knee injuries, he twice scored 60 goals in a season and remains one of the most prolific goal-scorers in NHL history.",
    careerStats: [
      {
        season: "1991-92",
        team: "Vancouver",
        gp: 65,
        g: 34,
        a: 26,
        pts: 60,
        plusMinus: 5,
        pim: 34
      },
      {
        season: "1992-93",
        team: "Vancouver",
        gp: 83,
        g: 60,
        a: 50,
        pts: 110,
        plusMinus: 35,
        pim: 68
      },
      {
        season: "1993-94",
        team: "Vancouver",
        gp: 76,
        g: 60,
        a: 47,
        pts: 107,
        plusMinus: 35,
        pim: 43
      },
      {
        season: "1999-00",
        team: "Florida",
        gp: 74,
        g: 58,
        a: 36,
        pts: 94,
        plusMinus: 25,
        pim: 12
      },
      {
        season: "2000-01",
        team: "Florida",
        gp: 82,
        g: 59,
        a: 33,
        pts: 92,
        plusMinus: -2,
        pim: 40
      },
      {
        season: "Career",
        team: "",
        gp: 702,
        g: 437,
        a: 342,
        pts: 779,
        plusMinus: 95,
        pim: 296
      }
    ],
    careerTimeline: [
      {
        id: 1,
        team: "Vancouver Canucks",
        years: "1991-1998",
        description: "Drafted 113th overall, Bure quickly became a star. Won the Calder Trophy and twice scored 60 goals with the Canucks. Led Vancouver to the 1994 Stanley Cup Final."
      },
      {
        id: 2,
        team: "Florida Panthers",
        years: "1999-2002",
        description: "Traded to Florida where he continued his goal-scoring prowess. Won back-to-back Rocket Richard Trophies with 58 and 59 goals in his first two seasons with the Panthers."
      },
      {
        id: 3,
        team: "New York Rangers",
        years: "2002-2003",
        description: "Played his final NHL season with the Rangers before chronic knee problems forced his retirement at age 32, cutting short what might have been a Hall of Fame career."
      }
    ]
  },
  {
    id: "theoren-fleury",
    name: "Theoren Fleury",
    position: "RW",
    teams: "CGY, COL, NYR, CHI",
    teamsArray: ["Calgary Flames", "Colorado Avalanche", "New York Rangers", "Chicago Blackhawks"],
    goals: 455,
    assists: 633,
    points: 1088,
    gamesPlayed: 1084,
    birthDate: "June 29, 1968",
    birthPlace: "Oxbow, Saskatchewan, Canada",
    yearsActive: "1988-2003",
    inducted: 2022,
    highlights: [
      "Stanley Cup Champion (1989)",
      "7× NHL All-Star",
      "Olympic Gold Medal (2002)"
    ],
    awards: [
      "Stanley Cup Winner",
      "Olympic Gold Medalist"
    ],
    bio: "Theoren 'Theo' Fleury overcame tremendous odds throughout his career. Standing at just 5'6\", he was one of the smallest players in the NHL, yet he played with unmatched tenacity and skill. Known for his scoring touch and feisty demeanor, Fleury became a fan favorite wherever he played. His determination and resilience both on and off the ice have made him an inspiring figure in hockey.",
    careerStats: [
      {
        season: "1988-89",
        team: "Calgary",
        gp: 36,
        g: 14,
        a: 20,
        pts: 34,
        plusMinus: 15,
        pim: 46
      },
      {
        season: "1990-91",
        team: "Calgary",
        gp: 79,
        g: 51,
        a: 53,
        pts: 104,
        plusMinus: 29,
        pim: 136
      },
      {
        season: "Career",
        team: "",
        gp: 1084,
        g: 455,
        a: 633,
        pts: 1088,
        plusMinus: 175,
        pim: 1840
      }
    ],
    careerTimeline: [
      {
        id: 1,
        team: "Calgary Flames",
        years: "1988-1999",
        description: "Drafted 166th overall, Fleury defied expectations by becoming a star. Won the Stanley Cup as a rookie and became a fan favorite in Calgary."
      },
      {
        id: 2,
        team: "Colorado Avalanche",
        years: "1999",
        description: "Brief stint with the Avalanche after being traded from Calgary."
      },
      {
        id: 3,
        team: "New York Rangers",
        years: "1999-2002",
        description: "Signed as a free agent with the Rangers, where he continued to be a productive player."
      },
      {
        id: 4,
        team: "Chicago Blackhawks",
        years: "2002-2003",
        description: "Played his final NHL season with the Blackhawks before retiring from the NHL."
      }
    ]
  },
  {
    id: "curtis-joseph",
    name: "Curtis Joseph",
    position: "G",
    teams: "STL, EDM, TOR, DET",
    teamsArray: ["St. Louis Blues", "Edmonton Oilers", "Toronto Maple Leafs", "Detroit Red Wings"],
    goals: 0,
    assists: 0,
    points: 0,
    gamesPlayed: 943,
    birthDate: "April 29, 1967",
    birthPlace: "Keswick, Ontario, Canada",
    yearsActive: "1989-2009",
    inducted: 2022,
    highlights: [
      "3× NHL All-Star",
      "Olympic Gold Medal (2002)",
      "King Clancy Memorial Trophy (2000)"
    ],
    awards: [
      "Olympic Gold Medalist",
      "King Clancy Trophy"
    ],
    bio: "Curtis Joseph, known affectionately as 'CuJo', was one of the most consistent and durable goaltenders of his era. Despite never winning a Stanley Cup, Joseph's acrobatic style and clutch performances made him a fan favorite throughout his career. His 454 career wins rank him fifth all-time among NHL goaltenders, a testament to his longevity and skill.",
    careerStats: [
      {
        season: "1989-90",
        team: "St. Louis",
        gp: 15,
        g: 0,
        a: 0,
        pts: 0,
        plusMinus: 0,
        pim: 0
      },
      {
        season: "Career",
        team: "",
        gp: 943,
        g: 0,
        a: 0,
        pts: 0,
        plusMinus: 0,
        pim: 139
      }
    ],
    careerTimeline: [
      {
        id: 1,
        team: "St. Louis Blues",
        years: "1989-1995",
        description: "Began his NHL career with the Blues, establishing himself as a reliable starting goaltender."
      },
      {
        id: 2,
        team: "Edmonton Oilers",
        years: "1995-1998",
        description: "Led the underdog Oilers to several playoff upsets with his stellar goaltending."
      },
      {
        id: 3,
        team: "Toronto Maple Leafs",
        years: "1998-2002",
        description: "First stint with the Maple Leafs, where he became a beloved figure in Toronto."
      },
      {
        id: 4,
        team: "Detroit Red Wings",
        years: "2002-2004",
        description: "Signed with the Red Wings in pursuit of a Stanley Cup, taking over from the legendary Dominik Hasek."
      }
    ]
  },
  {
    id: "pierre-turgeon",
    name: "Pierre Turgeon",
    position: "C",
    teams: "BUF, NYI, MTL, STL",
    teamsArray: ["Buffalo Sabres", "New York Islanders", "Montreal Canadiens", "St. Louis Blues"],
    goals: 515,
    assists: 812,
    points: 1327,
    gamesPlayed: 1294,
    birthDate: "August 28, 1969",
    birthPlace: "Rouyn, Quebec, Canada",
    yearsActive: "1987-2007",
    inducted: 2021,
    highlights: [
      "Lady Byng Memorial Trophy (1993)",
      "5× NHL All-Star",
      "30+ goals in 9 seasons"
    ],
    awards: [
      "Lady Byng Trophy",
      "5× All-Star"
    ],
    bio: "Pierre Turgeon was one of the most skilled and consistent offensive players of his era. Known for his playmaking ability and scoring touch, Turgeon amassed over 1,300 points in his NHL career. Despite his impressive statistics, he often flew under the radar due to his quiet demeanor and the fact that he played for several different teams. His combination of skill, sportsmanship, and consistency makes him a perfect addition to the Hockey Hall of Good.",
    careerStats: [
      {
        season: "1987-88",
        team: "Buffalo",
        gp: 76,
        g: 14,
        a: 28,
        pts: 42,
        plusMinus: -14,
        pim: 8
      },
      {
        season: "Career",
        team: "",
        gp: 1294,
        g: 515,
        a: 812,
        pts: 1327,
        plusMinus: 138,
        pim: 452
      }
    ],
    careerTimeline: [
      {
        id: 1,
        team: "Buffalo Sabres",
        years: "1987-1991",
        description: "Selected 1st overall in the 1987 NHL Draft, Turgeon began his career with the Sabres."
      },
      {
        id: 2,
        team: "New York Islanders",
        years: "1991-1995",
        description: "Traded to the Islanders, where he had his best statistical season with 132 points in 1992-93."
      },
      {
        id: 3,
        team: "Montreal Canadiens",
        years: "1995-1997",
        description: "Returned to his home province of Quebec to play for the storied Canadiens franchise."
      },
      {
        id: 4,
        team: "St. Louis Blues",
        years: "1997-2001",
        description: "Signed with the Blues, forming a potent offensive duo with Pavol Demitra."
      }
    ]
  },
  {
    id: "vincent-damphousse",
    name: "Vincent Damphousse",
    position: "C",
    teams: "TOR, EDM, MTL, SJS",
    teamsArray: ["Toronto Maple Leafs", "Edmonton Oilers", "Montreal Canadiens", "San Jose Sharks"],
    goals: 432,
    assists: 773,
    points: 1205,
    gamesPlayed: 1378,
    birthDate: "December 17, 1967",
    birthPlace: "Montreal, Quebec, Canada",
    yearsActive: "1986-2004",
    inducted: 2021,
    highlights: [
      "Stanley Cup Champion (1993)",
      "4× NHL All-Star",
      "Scored 38 goals in 1992-93 season"
    ],
    awards: [
      "Stanley Cup Winner",
      "4× All-Star"
    ],
    bio: "Vincent Damphousse was a skilled playmaker and consistent scorer throughout his 18-year NHL career. Born in Montreal, he fulfilled a childhood dream when he was traded to the Canadiens and helped them win the 1993 Stanley Cup. Damphousse was known for his smooth skating, excellent vision, and defensive responsibility. He recorded over 1,200 points in his career, demonstrating his longevity and consistency at the highest level.",
    careerStats: [
      {
        season: "1986-87",
        team: "Toronto",
        gp: 80,
        g: 21,
        a: 25,
        pts: 46,
        plusMinus: -6,
        pim: 26
      },
      {
        season: "Career",
        team: "",
        gp: 1378,
        g: 432,
        a: 773,
        pts: 1205,
        plusMinus: 97,
        pim: 824
      }
    ],
    careerTimeline: [
      {
        id: 1,
        team: "Toronto Maple Leafs",
        years: "1986-1991",
        description: "Drafted 6th overall by the Maple Leafs, Damphousse established himself as a talented young center."
      },
      {
        id: 2,
        team: "Edmonton Oilers",
        years: "1991-1992",
        description: "Brief stint with the Oilers following the dynasty years."
      },
      {
        id: 3,
        team: "Montreal Canadiens",
        years: "1992-1999",
        description: "Returned to his hometown and led the Canadiens in scoring during their 1993 Stanley Cup championship run."
      },
      {
        id: 4,
        team: "San Jose Sharks",
        years: "1999-2004",
        description: "Finished his career with the Sharks, providing veteran leadership to a young team."
      }
    ]
  },
  {
    id: "steve-larmer",
    name: "Steve Larmer",
    position: "RW",
    teams: "CHI, NYR",
    teamsArray: ["Chicago Blackhawks", "New York Rangers"],
    goals: 441,
    assists: 571,
    points: 1012,
    gamesPlayed: 1006,
    birthDate: "June 16, 1961",
    birthPlace: "Peterborough, Ontario, Canada",
    yearsActive: "1982-1995",
    inducted: 2020,
    highlights: [
      "Stanley Cup Champion (1994)",
      "Calder Memorial Trophy (1983)",
      "Played 884 consecutive games"
    ],
    awards: [
      "Stanley Cup Winner",
      "Calder Trophy",
      "Iron Man Streak"
    ],
    bio: "Steve Larmer was the epitome of consistency and durability during his NHL career. He played in 884 consecutive games with the Chicago Blackhawks, the third-longest ironman streak in NHL history at the time of his retirement. Larmer was a complete player who excelled at both ends of the ice. He scored 40+ goals five times and was an integral part of the New York Rangers' 1994 Stanley Cup championship team.",
    careerStats: [
      {
        season: "1982-83",
        team: "Chicago",
        gp: 80,
        g: 43,
        a: 47,
        pts: 90,
        plusMinus: 44,
        pim: 38
      },
      {
        season: "Career",
        team: "",
        gp: 1006,
        g: 441,
        a: 571,
        pts: 1012,
        plusMinus: 204,
        pim: 519
      }
    ],
    careerTimeline: [
      {
        id: 1,
        team: "Chicago Blackhawks",
        years: "1982-1993",
        description: "Spent the majority of his career with the Blackhawks, becoming a fan favorite and establishing his ironman streak."
      },
      {
        id: 2,
        team: "New York Rangers",
        years: "1993-1995",
        description: "Traded to the Rangers, where he helped the team win their first Stanley Cup in 54 years in 1994."
      }
    ]
  },
  {
    id: "jeremy-roenick",
    name: "Jeremy Roenick",
    position: "C",
    teams: "CHI, PHX, PHI, LA, SJS",
    teamsArray: ["Chicago Blackhawks", "Phoenix Coyotes", "Philadelphia Flyers", "Los Angeles Kings", "San Jose Sharks"],
    goals: 513,
    assists: 703,
    points: 1216,
    gamesPlayed: 1363,
    birthDate: "January 17, 1970",
    birthPlace: "Boston, Massachusetts, USA",
    yearsActive: "1988-2009",
    inducted: 2020,
    highlights: [
      "9× NHL All-Star",
      "500+ goals and 700+ assists",
      "Olympic Silver Medal (2002)"
    ],
    awards: [
      "9× All-Star",
      "Olympic Silver Medalist"
    ],
    bio: "Jeremy Roenick was one of the most charismatic and skilled American-born players in NHL history. Known for his scoring touch, physicality, and outspoken personality, 'JR' was a fan favorite throughout his career. He scored 513 goals and recorded 1,216 points, making him one of only four American-born players to score 500 or more goals. Beyond his statistics, Roenick's passion for the game and willingness to play through injuries endeared him to fans across the league.",
    careerStats: [
      {
        season: "1988-89",
        team: "Chicago",
        gp: 20,
        g: 9,
        a: 9,
        pts: 18,
        plusMinus: 2,
        pim: 13
      },
      {
        season: "Career",
        team: "",
        gp: 1363,
        g: 513,
        a: 703,
        pts: 1216,
        plusMinus: 151,
        pim: 1463
      }
    ],
    careerTimeline: [
      {
        id: 1,
        team: "Chicago Blackhawks",
        years: "1988-1996",
        description: "Drafted 8th overall, Roenick quickly became a star in Chicago, recording three consecutive 100+ point seasons."
      },
      {
        id: 2,
        team: "Phoenix Coyotes",
        years: "1996-2001",
        description: "Continued his offensive production with the Coyotes after being traded from Chicago."
      },
      {
        id: 3,
        team: "Philadelphia Flyers",
        years: "2001-2004",
        description: "Signed with the Flyers as a free agent and helped them reach the Eastern Conference Finals in 2004."
      },
      {
        id: 4,
        team: "Los Angeles Kings",
        years: "2005-2006",
        description: "Brief stint with the Kings following the 2004-05 NHL lockout."
      },
      {
        id: 5,
        team: "San Jose Sharks",
        years: "2007-2009",
        description: "Finished his career with the Sharks, reaching the 500-goal milestone along the way."
      }
    ]
  }
];

export const getPlayerById = (id: string): Player | undefined => {
  return players.find(player => player.id === id);
};

export const getLatestInductee = (): Player => {
  return players.reduce((latest, current) => {
    return current.inducted > latest.inducted ? current : latest;
  }, players[0]);
};
