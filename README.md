# HypixelStats

A web application that allows users to search for a Minecraft player and retrieve information from their Hypixel profile — including their 3D skin, UUID, and game statistics.

> Status: **In development**

---

## Tech Stack

| Technology | Usage |
|---|---|
| React + TypeScript | Frontend framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Embla Carousel | Game mode carousel |
| skinview3d | 3D skin renderer |
| Hypixel API | Player statistics |
| Mojang API | UUID lookup |
| Vercel | Hosting + Serverless Functions |

---

## Features

### Available
- Search players by Minecraft username
- UUID lookup via Mojang API
- 3D skin viewer with auto-rotate and pause/resume
- Game mode selector (SkyBlock, BedWars, SkyWars, Duels, Murder Mystery)
- Game mode carousel
- Serverless backend via Vercel Functions (API key protection)

### Planned
- Display detailed SkyBlock statistics
- BedWars and SkyWars stats
- Player comparison
- Responsive layout improvements
- Error handling and loading states

---

## How It Works

1. User selects a game mode from the list
2. User enters a Minecraft username
3. App fetches the UUID from the Mojang API
4. UUID is sent to the Vercel serverless function
5. Function calls the Hypixel API securely (API key never exposed)
6. Player data is rendered on the page with a 3D skin viewer

---

---

## Getting Started

### Prerequisites

- Node.js 18+
- A valid [Hypixel API key](https://developer.hypixel.net)

### Installation

```bash
git clone https://github.com/Divansir-Junior/Hypixel_SkyBlock_Info.git
cd Hypixel_SkyBlock_Info
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_HYPIXEL_API_KEY=your_key_here
```

For production, add `HYPIXEL_API_KEY` in your Vercel project under **Settings → Environment Variables**.

### Running locally

```bash
npm run dev
```

---

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit your changes following the convention below
4. Push and open a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org):

| Prefix | Usage |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `refactor:` | Code refactor without behavior change |
| `style:` | Styling changes |
| `chore:` | Tooling, dependencies, config |
| `docs:` | Documentation changes |

---

## Author

**Divansir Scrobut**  
[github.com/Divansir-Junior](https://github.com/Divansir-Junior)
