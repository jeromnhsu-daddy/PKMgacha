import React from 'react';
import { motion } from 'motion/react';
import { Search, ArrowUpDown, Sparkles } from 'lucide-react';
import { Pokemon, SortOption, Rarity, CollectionState } from '../types';
import { Card } from './Card';
import { PokeballIcon } from './Common';
import { useLanguage } from '../contexts/LanguageContext';

interface CollectionViewProps {
  collection: CollectionState;
  useItem: (itemId: string, pokemon: Pokemon) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  filterRarity: Rarity | 'All';
  setFilterRarity: (rarity: Rarity | 'All') => void;
  filteredPokemon: Pokemon[];
  playSound: (type: any) => void;
  sellCard: (p: Pokemon) => void;
  getPrice: (rarity: Rarity, isSelling?: boolean) => number;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  collection,
  useItem,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  filterRarity,
  setFilterRarity,
  filteredPokemon,
  playSound,
  sellCard,
  getPrice
}) => {
  const { t } = useLanguage();
  return (
    <motion.div 
      key="collection"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-white p-10 rounded-3xl border-4 border-[#141414] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-6xl font-bold tracking-tighter italic serif uppercase mb-2">{t('collection.title')}</h2>
          <p className="text-sm opacity-60 font-mono uppercase tracking-widest leading-relaxed max-w-md">
            {t('collection.subtitle')}
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
            <input 
              type="text" 
              placeholder={t('collection.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm focus:border-[#141414] transition-all outline-none font-bold uppercase tracking-widest"
            />
          </div>
          <div className="relative sm:w-48">
            <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm focus:border-[#141414] transition-all outline-none font-bold uppercase tracking-widest appearance-none"
            >
              <option value="id">{t('collection.sort.id')}</option>
              <option value="name">{t('collection.sort.name')}</option>
              <option value="rarity">{t('collection.sort.rarity')}</option>
              <option value="hp">{t('collection.sort.hp')}</option>
              <option value="level">{t('collection.sort.level')}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {['All', 'Common', 'Rare', 'Legendary'].map((r) => (
          <button
            key={r}
            onClick={() => setFilterRarity(r as any)}
            className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border-2 ${
              filterRarity === r 
                ? 'bg-[#141414] text-[#E4E3E0] border-[#141414] shadow-lg scale-105' 
                : 'bg-white text-[#141414] border-slate-100 hover:border-[#141414]/20'
            }`}
          >
            {r === 'All' ? t('rarity.all') : t('rarity.' + r.toLowerCase())}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredPokemon.filter(p => p.collected).map(p => {
          const currentHp = collection.hpMap?.[p.id] !== undefined ? collection.hpMap[p.id] : p.hp;
          const isInjured = currentHp < p.hp;
          const hasPotion = (collection.inventory['potion'] || 0) > 0;
          const hasSuperPotion = (collection.inventory['super-potion'] || 0) > 0;
          const hasFullRestore = (collection.inventory['full-restore'] || 0) > 0;

          return (
            <motion.div 
              key={p.id}
              whileHover={{ y: -10 }}
              className="flex flex-col gap-4"
            >
              <Card 
                pokemon={p} 
                isFlipped={true} 
                size="small" 
                className="w-full"
                playSound={playSound}
                currentHp={currentHp}
              />
              
              {/* HP Bar & Quick Use */}
              <div className="px-2 space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-60">
                  <span>HP</span>
                  <span className={isInjured ? 'text-red-500' : ''}>{currentHp} / {p.hp}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full ${currentHp / p.hp < 0.3 ? 'bg-red-500' : 'bg-emerald-500'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentHp / p.hp) * 100}%` }}
                  />
                </div>

                {isInjured && (hasPotion || hasSuperPotion || hasFullRestore) && (
                  <div className="flex gap-1 pt-1">
                    {hasPotion && (
                      <button 
                        onClick={() => useItem('potion', p)}
                        className="flex-1 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg text-[8px] font-bold uppercase hover:bg-emerald-100 transition-colors"
                        title={t('item.potion.name') + " (+20 HP)"}
                      >
                        {t('item.potion.name')}
                      </button>
                    )}
                    {hasSuperPotion && (
                      <button 
                        onClick={() => useItem('super-potion', p)}
                        className="flex-1 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg text-[8px] font-bold uppercase hover:bg-emerald-100 transition-colors"
                        title={t('item.super-potion.name') + " (+50 HP)"}
                      >
                        {t('item.super-potion.name')}
                      </button>
                    )}
                    {!hasPotion && !hasSuperPotion && hasFullRestore && (
                      <button 
                        onClick={() => useItem('full-restore', p)}
                        className="flex-1 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg text-[8px] font-bold uppercase hover:bg-emerald-100 transition-colors"
                        title={t('item.full-restore.name')}
                      >
                        {t('item.full-restore.name')}
                      </button>
                    )}
                  </div>
                )}
              </div>

              <button 
                onClick={() => sellCard(p)}
                className="w-full py-2 bg-white border-2 border-[#141414] text-[#141414] rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-red-50 hover:border-red-500 hover:text-red-500 transition-all flex items-center justify-center gap-2"
              >
                <PokeballIcon className="w-3 h-3" /> {t('collection.sell_for', { amount: getPrice(p.rarity, true) })}
              </button>
            </motion.div>
          );
        })}
      </div>

      {filteredPokemon.filter(p => p.collected).length === 0 && (
        <div className="py-32 text-center bg-white rounded-3xl border-4 border-dashed border-slate-100">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-10" />
          <h3 className="text-2xl font-bold uppercase tracking-tighter opacity-20">{t('collection.no_cards')}</h3>
        </div>
      )}
    </motion.div>
  );
};
