# Pokémon Gacha!!

A nostalgic card drawing and collection game where you can collect all 151 original Pokémon from the Kanto region. Build your team, battle gym leaders, and complete your Pokédex!

![App Screenshot](https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&q=80&w=1200&h=600)

## ✨ Features

- **Card Drawing System**: Spend coins to draw random Pokémon cards. Experience the thrill of finding Rare and Legendary Pokémon with special visual effects.
- **Complete Collection Tracker**: A beautiful grid view of all 151 original Pokémon. Track your progress, view detailed stats, and see your duplicates.
- **Interactive Card Animations**: High-quality 3D-like flip animations for every card, powered by `motion`.
- **Battle System**:
  - **Standard Battles**: Test your team against random opponents in various arenas.
  - **Gym Challenges**: Battle the 8 classic Kanto Gym Leaders to earn badges and rewards.
  - **Auto-Battle Mode**: Toggle auto-battle for faster gameplay.
- **RPG Elements**:
  - **HP Recovery**: Pokémon heal slowly over time when not in battle.
  - **Evolution**: Use Evolution Candy to evolve your Pokémon to their next forms.
  - **Stat Boosts**: Use items to permanently increase your Pokémon's Attack and Defense.
- **In-Game Shop**: Purchase healing items, rare candies, and stat boosters using earned coins.
- **Daily Rewards**: Claim 500 coins every 24 hours to keep your collection growing.
- **Multi-language Support**: Play in English and other supported languages.
- **Sound Effects**: Immersive audio synthesis for hits, victories, evolutions, and card flips.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks (useState, useEffect, useMemo, useCallback)
- **Persistence**: LocalStorage for saving your collection and progress.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pokemon-tgc-collector
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI components (Card, DrawView, BattleView, etc.)
│   ├── contexts/         # React Contexts (LanguageContext)
│   ├── constants/        # Game data (Pokemon stats, moves, arenas, gyms)
│   ├── types.ts          # TypeScript interfaces and types
│   ├── App.tsx           # Main application logic and routing
│   ├── index.css         # Global styles and Tailwind imports
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── metadata.json         # App metadata for AI Studio
└── package.json          # Dependencies and scripts
```

## 🎮 How to Play

1. **Draw Cards**: Start by drawing cards from the main screen. Each draw costs 100 coins.
2. **View Collection**: Check your collected cards in the "Collection" tab. You can sort and filter by type, rarity, and stats.
3. **Manage Team**: Select up to 6 Pokémon to form your battle team.
4. **Battle**:
   - Go to the "Gyms" tab to challenge leaders.
   - Earn badges and coins by winning battles.
   - Be careful! Your Pokémon lose HP in battle and need time or items to recover.
5. **Shop & Items**: Use your coins in the "Shop" to buy items that help you heal or evolve your Pokémon.

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

---

*Disclaimer: This is a fan project and is not affiliated with Nintendo, Creatures, Game Freak, or The Pokémon Company.*
