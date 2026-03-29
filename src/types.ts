import { Language } from './i18n';

export interface Move {
  name: string;
  damage: number;
  type: string;
}

export type Rarity = 'Common' | 'Rare' | 'Legendary';

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  hp: number;
  defense: number;
  speed: number;
  level: number;
  rarity: Rarity;
  moves: Move[];
  height: string;
  weight: string;
  collected?: boolean;
  count?: number;
  currentHp?: number;
}

export interface Arena {
  id: string;
  name: string;
  description: string;
  boostedTypes: string[];
  color: string;
  icon: string;
  bgImage: string;
}

export interface Gym {
  id: string;
  name: string;
  description: string;
  leader: string;
  type: string;
  badge: string;
  badgeIcon: string;
  pokemonIds: number[];
  reward: number;
  color: string;
  bgImage: string;
  arenaId: string;
  buildingIcon: string;
}

export type SortOption = 'id' | 'name' | 'hp' | 'attack' | 'defense' | 'speed' | 'rarity';

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'heal' | 'full-heal' | 'rare-candy' | 'lucky-egg' | 'evolution-candy' | 'attack-boost' | 'defense-boost';
  value?: number;
  icon: string;
}

export interface CollectionState {
  cards: { [id: number]: number };
  coins: number;
  hpMap?: { [id: number]: number };
  attackBoosts?: { [id: number]: number };
  defenseBoosts?: { [id: number]: number };
  lastHealTime?: number;
  badges: string[];
  inventory: { [itemId: string]: number };
  lang?: Language;
  lastDailyReward?: number;
}
