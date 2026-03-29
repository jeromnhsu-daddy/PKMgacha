import { Arena, Gym } from './types';

export const GYMS: Gym[] = [
  {
    id: 'pewter',
    name: 'Pewter Gym',
    leader: 'Brock',
    type: 'Rock',
    description: 'The Rock-Solid Pokémon Trainer. His defense is as hard as stone!',
    badge: 'Boulder Badge',
    badgeIcon: '🪨',
    pokemonIds: [74, 75, 95], // Geodude, Graveler, Onix
    reward: 500,
    color: 'bg-stone-600',
    bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'cave',
    buildingIcon: '🏛️'
  },
  {
    id: 'cerulean',
    name: 'Cerulean Gym',
    leader: 'Misty',
    type: 'Water',
    description: 'The Tomboyish Mermaid. Her Water Pokémon will wash you away!',
    badge: 'Cascade Badge',
    badgeIcon: '💧',
    pokemonIds: [120, 121, 134], // Staryu, Starmie, Vaporeon
    reward: 600,
    color: 'bg-blue-500',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'ocean',
    buildingIcon: '🌊'
  },
  {
    id: 'vermilion',
    name: 'Vermilion Gym',
    leader: 'Lt. Surge',
    type: 'Electric',
    description: 'The Lightning American. His Electric Pokémon are highly charged!',
    badge: 'Thunder Badge',
    badgeIcon: '⚡',
    pokemonIds: [100, 101, 26], // Voltorb, Electrode, Raichu
    reward: 700,
    color: 'bg-yellow-500',
    bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'powerplant',
    buildingIcon: '🏭'
  },
  {
    id: 'celadon',
    name: 'Celadon Gym',
    leader: 'Erika',
    type: 'Grass',
    description: 'The Nature-Loving Princess. Her Grass Pokémon are in full bloom!',
    badge: 'Rainbow Badge',
    badgeIcon: '🌈',
    pokemonIds: [71, 114, 45], // Victreebel, Tangela, Vileplume
    reward: 800,
    color: 'bg-emerald-500',
    bgImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'forest',
    buildingIcon: '🌿'
  },
  {
    id: 'fuchsia',
    name: 'Fuchsia Gym',
    leader: 'Koga',
    type: 'Poison',
    description: 'The Poisonous Ninja Master. His Poison Pokémon strike from the shadows!',
    badge: 'Soul Badge',
    badgeIcon: '💜',
    pokemonIds: [109, 110, 89], // Koffing, Weezing, Muk
    reward: 900,
    color: 'bg-purple-600',
    bgImage: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'toxic',
    buildingIcon: '🏯'
  },
  {
    id: 'saffron',
    name: 'Saffron Gym',
    leader: 'Sabrina',
    type: 'Psychic',
    description: 'The Master of Psychic Pokémon. She can see your every move!',
    badge: 'Marsh Badge',
    badgeIcon: '🌀',
    pokemonIds: [64, 122, 65], // Kadabra, Mr. Mime, Alakazam
    reward: 1000,
    color: 'bg-pink-600',
    bgImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'mansion',
    buildingIcon: '🔮'
  },
  {
    id: 'cinnabar',
    name: 'Cinnabar Gym',
    leader: 'Blaine',
    type: 'Fire',
    description: 'The Hot-Headed Quiz Master. His Fire Pokémon are burning with passion!',
    badge: 'Volcano Badge',
    badgeIcon: '🔥',
    pokemonIds: [78, 126, 59], // Rapidash, Magmar, Arcanine
    reward: 1100,
    color: 'bg-orange-600',
    bgImage: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'volcano',
    buildingIcon: '🌋'
  },
  {
    id: 'viridian',
    name: 'Viridian Gym',
    leader: 'Giovanni',
    type: 'Ground',
    description: 'The Earth-Shaking Boss. His Ground Pokémon will rattle your bones!',
    badge: 'Earth Badge',
    badgeIcon: '🌍',
    pokemonIds: [111, 112, 34], // Rhyhorn, Rhydon, Nidoking
    reward: 1200,
    color: 'bg-amber-800',
    bgImage: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'dojo',
    buildingIcon: '🏢'
  },
  {
    id: 'lorelei',
    name: 'Elite Four Lorelei',
    leader: 'Lorelei',
    type: 'Ice/Water',
    description: 'The Ice-Cold Elite Four member. Her Pokémon will freeze you in your tracks!',
    badge: "Lorelei's Badge",
    badgeIcon: '❄️',
    pokemonIds: [87, 91, 124, 131], // Dewgong, Cloyster, Jynx, Lapras
    reward: 2000,
    color: 'bg-cyan-600',
    bgImage: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'ocean',
    buildingIcon: '🏛️'
  },
  {
    id: 'bruno',
    name: 'Elite Four Bruno',
    leader: 'Bruno',
    type: 'Fighting/Rock',
    description: 'The Master of Fighting Pokémon. He lives for the heat of battle!',
    badge: "Bruno's Badge",
    badgeIcon: '🥊',
    pokemonIds: [106, 107, 95, 68], // Hitmonlee, Hitmonchan, Onix, Machamp
    reward: 2500,
    color: 'bg-red-800',
    bgImage: 'https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'dojo',
    buildingIcon: '🏛️'
  },
  {
    id: 'agatha',
    name: 'Elite Four Agatha',
    leader: 'Agatha',
    type: 'Ghost/Poison',
    description: 'The Master of Ghost Pokémon. She will haunt your dreams!',
    badge: "Agatha's Badge",
    badgeIcon: '👻',
    pokemonIds: [93, 94, 42, 110], // Haunter, Gengar, Golbat, Weezing
    reward: 3000,
    color: 'bg-indigo-900',
    bgImage: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'mansion',
    buildingIcon: '🏛️'
  },
  {
    id: 'lance',
    name: 'Elite Four Lance',
    leader: 'Lance',
    type: 'Dragon/Flying',
    description: 'The Dragon Master. His Dragon Pokémon are legendary!',
    badge: "Lance's Badge",
    badgeIcon: '🐲',
    pokemonIds: [130, 148, 149, 142], // Gyarados, Dragonair, Dragonite, Aerodactyl
    reward: 4000,
    color: 'bg-red-600',
    bgImage: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'sky',
    buildingIcon: '🏛️'
  },
  {
    id: 'champion',
    name: 'Champion Blue',
    leader: 'Blue',
    type: 'Mixed',
    description: 'The Pokémon League Champion. He is the strongest trainer in the world!',
    badge: 'Champion Title',
    badgeIcon: '🏆',
    pokemonIds: [18, 65, 112, 130, 103, 6], // Pidgeot, Alakazam, Rhydon, Gyarados, Exeggutor, Charizard
    reward: 10000,
    color: 'bg-slate-900',
    bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000',
    arenaId: 'indigo',
    buildingIcon: '👑'
  }
];

export const ARENAS: Arena[] = [
  {
    id: 'forest',
    name: 'Viridian Forest',
    description: 'A deep and sprawling forest. Grass and Bug types feel at home here.',
    boostedTypes: ['Grass', 'Bug'],
    color: 'bg-emerald-600',
    icon: '🌲',
    bgImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'volcano',
    name: 'Cinnabar Volcano',
    description: 'The intense heat of the volcano empowers Fire and Ground types.',
    boostedTypes: ['Fire', 'Ground'],
    color: 'bg-orange-600',
    icon: '🌋',
    bgImage: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ocean',
    name: 'Cerulean Ocean',
    description: 'The vast and deep ocean where Water and Ice types gain immense power.',
    boostedTypes: ['Water', 'Ice'],
    color: 'bg-blue-600',
    icon: '🌊',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'powerplant',
    name: 'Abandoned Power Plant',
    description: 'Residual electricity boosts Electric and Steel types.',
    boostedTypes: ['Electric', 'Steel'],
    color: 'bg-yellow-500',
    icon: '⚡',
    bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'mansion',
    name: 'Psychic Universe',
    description: 'A cosmic dimension where Psychic and Ghost types transcend reality.',
    boostedTypes: ['Ghost', 'Psychic'],
    color: 'bg-purple-700',
    icon: '🌌',
    bgImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'dojo',
    name: 'Saffron Dojo',
    description: 'A place of intense training. Fighting and Normal types excel here.',
    boostedTypes: ['Fighting', 'Normal'],
    color: 'bg-amber-700',
    icon: '🥋',
    bgImage: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'cave',
    name: 'Mt. Moon Cave',
    description: 'A dark cave filled with rocks. Rock and Ground types are stronger.',
    boostedTypes: ['Rock', 'Ground'],
    color: 'bg-stone-700',
    icon: '🪨',
    bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'toxic',
    name: 'Fuchsia Cave',
    description: 'A dark, cavernous space where Poison and Bug types thrive in the shadows.',
    boostedTypes: ['Poison', 'Bug'],
    color: 'bg-purple-900',
    icon: '🧪',
    bgImage: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'sky',
    name: 'Indigo Sky',
    description: 'High above the clouds. Flying and Dragon types dominate the skies.',
    boostedTypes: ['Flying', 'Dragon'],
    color: 'bg-sky-400',
    icon: '☁️',
    bgImage: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'indigo',
    name: 'Indigo Plateau',
    description: 'The ultimate stage for the Pokémon League. All types are equally powerful here.',
    boostedTypes: [],
    color: 'bg-slate-900',
    icon: '🏛️',
    bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000'
  }
];

export const POKEMON_NAMES = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
  "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
  "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
  "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok",
  "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina",
  "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable",
  "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat",
  "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat",
  "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck",
  "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag",
  "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop",
  "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool",
  "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash",
  "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo",
  "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder",
  "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee",
  "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute",
  "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung",
  "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela",
  "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu",
  "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar",
  "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto",
  "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte",
  "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno",
  "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
];

const TYPE_MAP: { [key: string]: string[] } = {
  Grass: ["Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Tangela", "Paras", "Parasect"],
  Fire: ["Charmander", "Charmeleon", "Charizard", "Vulpix", "Ninetales", "Growlithe", "Arcanine", "Ponyta", "Rapidash", "Magmar", "Flareon", "Moltres"],
  Water: ["Squirtle", "Wartortle", "Blastoise", "Psyduck", "Golduck", "Poliwag", "Poliwhirl", "Poliwrath", "Tentacool", "Tentacruel", "Slowpoke", "Slowbro", "Seel", "Dewgong", "Shellder", "Cloyster", "Krabby", "Kingler", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Magikarp", "Gyarados", "Lapras", "Vaporeon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Articuno", "Dewgong", "Cloyster", "Lapras"],
  Electric: ["Pikachu", "Raichu", "Magnemite", "Magneton", "Voltorb", "Electrode", "Electabuzz", "Jolteon", "Zapdos"],
  Psychic: ["Abra", "Kadabra", "Alakazam", "Drowzee", "Hypno", "Mr. Mime", "Jynx", "Mewtwo", "Mew", "Exeggcute", "Exeggutor", "Slowpoke", "Slowbro", "Starmie"],
  Fighting: ["Mankey", "Primeape", "Machop", "Machoke", "Machamp", "Hitmonlee", "Hitmonchan", "Poliwrath"],
  Poison: ["Bulbasaur", "Ivysaur", "Venusaur", "Weedle", "Kakuna", "Beedrill", "Ekans", "Arbok", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Zubat", "Golbat", "Grimer", "Muk", "Koffing", "Weezing", "Oddish", "Gloom", "Vileplume", "Venonat", "Venomoth", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Gastly", "Haunter", "Gengar"],
  Ground: ["Sandshrew", "Sandslash", "Diglett", "Dugtrio", "Geodude", "Graveler", "Golem", "Cubone", "Marowak", "Rhyhorn", "Rhydon", "Nidoqueen", "Nidoking", "Onix"],
  Flying: ["Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Farfetch'd", "Doduo", "Dodrio", "Scyther", "Aerodactyl", "Articuno", "Zapdos", "Moltres", "Dragonite", "Charizard", "Butterfree", "Zubat", "Golbat", "Gyarados"],
  Bug: ["Caterpie", "Metapod", "Butterfree", "Paras", "Parasect", "Venonat", "Venomoth", "Pinsir", "Weedle", "Kakuna", "Beedrill", "Scyther"],
  Rock: ["Onix", "Geodude", "Graveler", "Golem", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Rhyhorn", "Rhydon"],
  Ghost: ["Gastly", "Haunter", "Gengar"],
  Dragon: ["Dratini", "Dragonair", "Dragonite"],
  Normal: ["Rattata", "Raticate", "Meowth", "Persian", "Lickitung", "Chansey", "Kangaskhan", "Tauros", "Ditto", "Eevee", "Porygon", "Snorlax", "Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Jigglypuff", "Wigglytuff", "Farfetch'd", "Doduo", "Dodrio"],
  Ice: ["Articuno", "Dewgong", "Cloyster", "Lapras", "Jynx"]
};

export const getPokemonTypes = (name: string): string[] => {
  const types: string[] = [];
  for (const type in TYPE_MAP) {
    if (TYPE_MAP[type].includes(name)) {
      types.push(type);
    }
  }
  return types.length > 0 ? types : ["Normal"];
};

export const getPokemonMoves = (types: string[]) => {
  const movePool = [
    { name: "Tackle", damage: 20, type: "Normal" },
    { name: "Quick Attack", damage: 30, type: "Normal" },
    { name: "Slam", damage: 40, type: "Normal" },
    { name: "Ember", damage: 30, type: "Fire" },
    { name: "Flamethrower", damage: 60, type: "Fire" },
    { name: "Water Gun", damage: 30, type: "Water" },
    { name: "Hydro Pump", damage: 70, type: "Water" },
    { name: "Vine Whip", damage: 30, type: "Grass" },
    { name: "Solar Beam", damage: 80, type: "Grass" },
    { name: "Thunder Shock", damage: 30, type: "Electric" },
    { name: "Thunderbolt", damage: 60, type: "Electric" },
    { name: "Confusion", damage: 30, type: "Psychic" },
    { name: "Psychic", damage: 70, type: "Psychic" },
    { name: "Rock Throw", damage: 30, type: "Rock" },
    { name: "Earthquake", damage: 80, type: "Ground" },
    { name: "Wing Attack", damage: 40, type: "Flying" },
    { name: "Fly", damage: 60, type: "Flying" },
    { name: "Bite", damage: 30, type: "Dark" },
    { name: "Sludge Bomb", damage: 50, type: "Poison" },
  ];

  // Pick 2 moves: one matching type, one normal
  const typeMove = movePool.find(m => types.includes(m.type)) || movePool[0];
  const normalMove = movePool.find(m => m.type === "Normal" && m.name !== typeMove.name) || movePool[1];
  
  return [typeMove, normalMove];
};

export const getPokemonImage = (id: number) => 
  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, '0')}.png`;

export const TYPE_EFFECTIVENESS: { [key: string]: { [key: string]: number } } = {
  Fire: { Grass: 2.5, Ice: 2.5, Bug: 2.5, Fire: 0.4, Water: 0.4, Rock: 0.4, Dragon: 0.4 },
  Water: { Fire: 2.5, Ground: 2.5, Rock: 2.5, Water: 0.4, Grass: 0.4, Dragon: 0.4 },
  Grass: { Water: 2.5, Ground: 2.5, Rock: 2.5, Grass: 0.4, Fire: 0.4, Poison: 0.4, Flying: 0.4, Bug: 0.4, Dragon: 0.4 },
  Electric: { Water: 2.5, Flying: 2.5, Electric: 0.4, Grass: 0.4, Dragon: 0.4, Ground: 0 },
  Psychic: { Fighting: 2.5, Poison: 2.5, Psychic: 0.4 },
  Fighting: { Normal: 2.5, Ice: 2.5, Rock: 2.5, Poison: 0.4, Flying: 0.4, Psychic: 0.4, Bug: 0.4 },
  Poison: { Grass: 2.5, Poison: 0.4, Ground: 0.4, Rock: 0.4, Ghost: 0.4 },
  Ground: { Fire: 2.5, Electric: 2.5, Poison: 2.5, Rock: 2.5, Grass: 0.4, Bug: 0.4, Flying: 0 },
  Flying: { Grass: 2.5, Fighting: 2.5, Bug: 2.5, Electric: 0.4, Rock: 0.4 },
  Bug: { Grass: 2.5, Psychic: 2.5, Fire: 0.4, Fighting: 0.4, Poison: 0.4, Flying: 0.4, Ghost: 0.4 },
  Rock: { Fire: 2.5, Ice: 2.5, Flying: 2.5, Bug: 2.5, Fighting: 0.4, Ground: 0.4 },
  Ghost: { Psychic: 2.5, Ghost: 2.5, Normal: 0 },
  Dragon: { Dragon: 2.5 },
  Ice: { Grass: 2.5, Ground: 2.5, Flying: 2.5, Dragon: 2.5, Fire: 0.4, Water: 0.4, Ice: 0.4 },
  Normal: { Rock: 0.4, Ghost: 0 }
};

export const EVOLUTION_MAP: { [key: number]: number | number[] } = {
  1: 2, 2: 3, // Bulbasaur
  4: 5, 5: 6, // Charmander
  7: 8, 8: 9, // Squirtle
  10: 11, 11: 12, // Caterpie
  13: 14, 14: 15, // Weedle
  16: 17, 17: 18, // Pidgey
  19: 20, // Rattata
  21: 22, // Spearow
  23: 24, // Ekans
  25: 26, // Pikachu
  27: 28, // Sandshrew
  29: 30, 30: 31, // Nidoran F
  32: 33, 33: 34, // Nidoran M
  35: 36, // Clefairy
  37: 38, // Vulpix
  39: 40, // Jigglypuff
  41: 42, // Zubat
  43: 44, 44: 45, // Oddish
  46: 47, // Paras
  48: 49, // Venonat
  50: 51, // Diglett
  52: 53, // Meowth
  54: 55, // Psyduck
  56: 57, // Mankey
  58: 59, // Growlithe
  60: 61, 61: 62, // Poliwag
  63: 64, 64: 65, // Abra
  66: 67, 67: 68, // Machop
  69: 70, 70: 71, // Bellsprout
  72: 73, // Tentacool
  74: 75, 75: 76, // Geodude
  77: 78, // Ponyta
  79: 80, // Slowpoke
  81: 82, // Magnemite
  84: 85, // Doduo
  86: 87, // Seel
  88: 89, // Grimer
  90: 91, // Shellder
  92: 93, 93: 94, // Gastly
  96: 97, // Drowzee
  98: 99, // Krabby
  100: 101, // Voltorb
  102: 103, // Exeggcute
  104: 105, // Cubone
  109: 110, // Koffing
  111: 112, // Rhyhorn
  116: 117, // Horsea
  118: 119, // Goldeen
  120: 121, // Staryu
  129: 130, // Magikarp
  133: [134, 135, 136], // Eevee
  138: 139, // Omanyte
  140: 141, // Kabuto
  147: 148, 148: 149, // Dratini
};

export const getPokemonData = (id: number, attackBoost = 0, defenseBoost = 0) => {
  const name = POKEMON_NAMES[id - 1];
  const types = getPokemonTypes(name);
  
  // Rarity Logic
  let rarity: 'Common' | 'Rare' | 'Legendary' = 'Common';
  const legendaryIds = [144, 145, 146, 150, 151];
  const rareIds = [
    3, 6, 9, 26, 31, 34, 38, 59, 62, 65, 68, 71, 76, 78, 80, 94, 103, 115, 123, 127, 130, 131, 134, 135, 136, 142, 143, 149
  ];

  if (legendaryIds.includes(id)) rarity = 'Legendary';
  else if (rareIds.includes(id)) rarity = 'Rare';

  // Level based on ID (evolution stage approximation)
  // Level range: 10 to 100
  const level = Math.min(100, Math.floor(id / 2) + 10 + (rarity === 'Legendary' ? 20 : rarity === 'Rare' ? 10 : 0));
  
  // Base stats redesigned for faster combat (max 5 turns)
  // HP scales slower than damage
  let hp = 100 + level * 4;
  let defense = level * 1.2 + defenseBoost;
  let speed = 40 + level;
  
  // Rarity bonus
  const rarityBonus = rarity === 'Legendary' ? 1.4 : rarity === 'Rare' ? 1.2 : 1.0;
  
  hp = Math.floor(hp * rarityBonus);
  defense = Math.floor(defense * rarityBonus);
  speed = Math.floor(speed * rarityBonus);
  
  // Realistic-ish physical stats
  const height = (0.3 + (id % 10) * 0.2 + Math.floor(id / 50) * 0.5).toFixed(1);
  const weight = (5 + (id % 20) * 2 + Math.floor(id / 10) * 10).toFixed(1);
  
  return {
    id,
    name,
    image: getPokemonImage(id),
    types,
    level,
    rarity,
    hp,
    defense,
    speed,
    height,
    weight,
    moves: getPokemonMoves(types).map(m => ({
      ...m,
      // Damage scales faster than HP to ensure quick battles
      damage: Math.floor((m.damage + level * 1.8 + attackBoost) * rarityBonus)
    }))
  };
};
