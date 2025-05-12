# GitHub Instructions for Hockey Hall of Good

This guide explains how to upload your Hockey Hall of Good website to GitHub and how to manage inductee data.

## 1. Upload to GitHub

### Initial Setup

1. **Create a GitHub account** if you don't already have one at [github.com](https://github.com/)

2. **Create a new repository**:
   - Click the "+" icon in the top-right corner and select "New repository"
   - Name your repository (e.g., "hockey-hall-of-good")
   - Set it to Public (or Private if preferred)
   - Skip adding README, .gitignore or license for now
   - Click "Create repository"

3. **Initialize git in your local project**:
   ```bash
   # From your project directory
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Connect to your GitHub repository**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Deployment Options

For a static website, you can use GitHub Pages:

1. **In your repository settings**:
   - Go to "Settings" tab > "Pages"
   - Under "Source", select "main" branch
   - Click "Save"

2. GitHub will provide a URL (username.github.io/repo-name) where your site is published

### Making Updates

Whenever you make changes to your website:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## 2. Managing Inductee Data

The player data in your Hockey Hall of Good website is stored in `client/src/data/players.ts`. To add, edit, or remove inductees, you'll need to modify this file.

### Adding a New Inductee

1. Open `client/src/data/players.ts`
2. Add a new player object to the `players` array following the format of existing players:

```typescript
{
  id: "player-name", // URL-friendly ID (lowercase, hyphens instead of spaces)
  name: "Player Name",
  nickname: "Optional Nickname", // Optional
  position: "C", // Position code: C, LW, RW, D, or G
  teams: "TEAM1, TEAM2", // Abbreviations separated by commas
  teamsArray: ["Team Name 1", "Team Name 2"], // Full team names
  goals: 123, // Career goals
  assists: 456, // Career assists
  points: 579, // Career points (usually goals + assists)
  gamesPlayed: 1000, // Career games played
  birthDate: "Month DD, YYYY",
  birthPlace: "City, State/Province, Country",
  yearsActive: "YYYY-YYYY", // First NHL season to last NHL season
  inducted: 2024, // Year inducted into Hockey Hall of Good
  highlights: [
    "Major achievement 1",
    "Major achievement 2",
    // Add 3-5 career highlights
  ],
  awards: [
    "Major award 1",
    "Major award 2",
    // Add 2-3 major awards/recognitions (shorter format)
  ],
  bio: "A detailed paragraph about the player's career, playing style, and contributions to hockey.",
  careerStats: [
    {
      season: "YYYY-YY", // NHL season (e.g., "1995-96")
      team: "Team", // Team name for that season
      gp: 82, // Games played that season
      g: 30, // Goals that season
      a: 40, // Assists that season
      pts: 70, // Points that season
      plusMinus: 15, // Plus/minus that season
      pim: 24 // Penalty minutes that season
    },
    // Add 3-5 notable seasons plus Career totals
    {
      season: "Career",
      team: "",
      gp: 1000,
      g: 123,
      a: 456,
      pts: 579,
      plusMinus: 100,
      pim: 200
    }
  ],
  careerTimeline: [
    {
      id: 1, // Start with 1 and increment for each team
      team: "Team Name 1",
      years: "YYYY-YYYY", // Years with this team
      description: "Description of player's time with this team, achievements, etc."
    },
    // Add an entry for each team the player was with
  ]
}
```

3. Save the file, commit, and push the changes to GitHub.

### Removing an Inductee

1. Open `client/src/data/players.ts`
2. Find the player object you want to remove in the `players` array
3. Delete the entire object (including the surrounding `{}` and any trailing comma)
4. Save the file, commit, and push the changes to GitHub.

### Updating an Inductee

1. Open `client/src/data/players.ts`
2. Find the player object you want to update in the `players` array
3. Modify any fields that need updating
4. Save the file, commit, and push the changes to GitHub.

## 3. Updating Images

For player profile images, you're currently using placeholder images. To use custom images:

1. Add your images to a folder like `client/public/images/players/`
2. Update the image paths in components like `PlayerProfile.tsx` and `FeaturedInductee.tsx` to reference your local images instead of placeholder URLs.

Example update in `PlayerProfile.tsx`:
```jsx
<img 
  src={`/images/players/${player.id}.jpg`} 
  alt={player.name} 
  className="w-full h-full object-cover" 
/>
```

This assumes you'll name your images to match player IDs (e.g., `pavel-bure.jpg`).

## Need Help?

- GitHub documentation: [docs.github.com](https://docs.github.com/)
- For specific questions, use GitHub's help resources or contact the website developer.