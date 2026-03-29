import { Item } from '../types';

export const SHOP_ITEMS: Item[] = [
  {
    id: 'potion',
    name: 'Potion',
    description: 'Restores 20 HP to a single Pokémon.',
    price: 10,
    type: 'heal',
    value: 20,
    icon: '🧪'
  },
  {
    id: 'super-potion',
    name: 'Super Potion',
    description: 'Restores 50 HP to a single Pokémon.',
    price: 25,
    type: 'heal',
    value: 50,
    icon: '🧪'
  },
  {
    id: 'full-restore',
    name: 'Full Restore',
    description: 'Fully restores HP to a single Pokémon.',
    price: 50,
    type: 'full-heal',
    icon: '✨'
  },
  {
    id: 'rare-candy',
    name: 'Rare Candy',
    description: 'Increases the card count of a Pokémon by 1 (useful for evolution).',
    price: 300,
    type: 'rare-candy',
    icon: '🍬'
  },
  {
    id: 'evolution-candy',
    name: 'Evolution Candy',
    description: 'Directly evolves a Pokémon to its next stage.',
    price: 500,
    type: 'evolution-candy',
    icon: '🍭'
  },
  {
    id: 'attack-boost',
    name: 'Attack Protein',
    description: 'Permanently increases the attack power of a Pokémon.',
    price: 500,
    type: 'attack-boost',
    value: 5,
    icon: '⚔️'
  },
  {
    id: 'defense-iron',
    name: 'Defense Iron',
    description: 'Permanently increases the defense of a Pokémon.',
    price: 500,
    type: 'defense-boost',
    value: 5,
    icon: '🛡️'
  }
];
