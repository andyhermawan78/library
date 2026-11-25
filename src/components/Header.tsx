import React from 'react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  HelpCircle,
  Sparkles,
  Clock,
  Award,
  Flame,
  Scroll,
  Compass,
  Anchor,
  Utensils,
  Feather,
  Cog,
  Radio,
  Rocket,
} from 'lucide-react';
import { LevelData } from '../types';
import { GAME_LEVELS } from '../data/gameData';
import { sound } from '../utils/audio';

interface HeaderProps {
  currentLevel: LevelData;
  collectedPages: string[];
  score: number;
  timeRemaining: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCodex: () => void;
  onOpenSkillGuide: () => void;
  onOpenTrivia: () => void;
  onRestart: () => void;
}

const PAGE_ICONS: Record<string, React.ElementType> = {
  '1': Flame,
  '2': Scroll,
  '3': Compass,
  '4': Anchor,
  '5': Utensils,
  '6': Feather,
  '7': Cog,
  '8': Radio,
  '9': Rocket,
  '10': Sparkles,
};

export const Header: React.FC<HeaderProps> = ({
  currentLevel,
  collectedPages,
  score,
  timeRemaining,
  soundEnabled,
  onToggleSound,
  onOpenCodex,
  onOpenSkillGuide,
  onOpenTrivia,
}) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'EASY':
        return 'bg-emerald-900/40 text-emerald-300 border-emerald-700/60';
      case 'MEDIUM':
        return 'bg-amber-900/40 text-amber-300 border-amber-700/60';
      case 'HARD':
        return 'bg-rose-900/40 text-rose-300 border-rose-700/60';
      case 'FINAL BOSS':
        return 'bg-purple-900/50 text-purple-200 border-purple-500 animate-pulse';
      default:
        return 'bg-slate-800 text-slate-200 border-slate-700';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0502]/95 backdrop-blur-md border-b border-[#3a2a1a] shadow-2xl px-4 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Title & Level Indicator */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-[#151210] border border-[#d4af37]/60 flex items-center justify-center shadow-lg shadow-[#d4af37]/10 text-[#d4af37]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="font-serif text-lg sm:text-2xl font-bold tracking-widest text-[#d4af37] uppercase">
                The Chronos Library Heist
              </h1>
              <span
                className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                  currentLevel.difficulty === 'EASY'
                    ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50'
                    : currentLevel.difficulty === 'MEDIUM'
                    ? 'bg-amber-950/60 text-[#d4af37] border-[#d4af37]/50'
                    : currentLevel.difficulty === 'HARD'
                    ? 'bg-rose-950/60 text-rose-300 border-rose-700/50'
                    : 'bg-purple-950/80 text-purple-200 border-purple-500 animate-pulse'
                }`}
              >
                {currentLevel.difficulty}
              </span>
            </div>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#8e8271] mt-0.5">
              Level {currentLevel.id}/10: {currentLevel.title} ({currentLevel.era})
            </p>
          </div>
        </div>

        {/* Chrono-Pages Segmented Indicator Rack */}
        <div
          onClick={() => {
            sound.playMonocleClick();
            onOpenCodex();
          }}
          className="cursor-pointer group flex flex-col items-end bg-[#151210] hover:bg-[#1a1614] border border-[#3a2a1a] hover:border-[#d4af37]/50 rounded-lg px-3.5 py-2 transition-all shadow-inner"
          title="Click to view Chrono-Pages Codex"
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            {Array.from({ length: 10 }).map((_, i) => {
              const pageNum = i + 1;
              const isCollected = collectedPages.length >= pageNum;
              const isCurrent = pageNum === currentLevel.id;
              const IconComp = PAGE_ICONS[pageNum.toString()] || Sparkles;
              return (
                <div
                  key={pageNum}
                  className={`h-4 sm:h-5 w-5 sm:w-6 rounded-sm flex items-center justify-center transition-all ${
                    isCollected
                      ? 'bg-[#d4af37] text-[#0a0502] shadow-sm shadow-[#d4af37]/50 font-bold'
                      : isCurrent
                      ? 'bg-[#2a1a0a] border border-[#d4af37] text-[#d4af37] animate-pulse'
                      : 'bg-[#2a1a0a] border border-[#3a2a1a] text-[#8e8271]/40'
                  }`}
                  title={
                    isCollected
                      ? `Page ${pageNum}: Collected (${GAME_LEVELS[i]?.chronoPageName})`
                      : `Page ${pageNum}: Locked`
                  }
                >
                  <IconComp className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between w-full text-[11px] font-sans uppercase tracking-widest">
            <span className="text-[#8e8271]">Inventory:</span>
            <span className="font-bold text-[#d4af37] group-hover:text-[#f3d97b] ml-2">
              CHRONO-PAGES: {collectedPages.length} / 10
            </span>
          </div>
        </div>

        {/* Stats & Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Timer */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold ${
              timeRemaining <= 20
                ? 'bg-rose-950/60 border-rose-600 text-rose-300 animate-pulse'
                : 'bg-[#151210] border-[#3a2a1a] text-cyan-400'
            }`}
            title="Time remaining for speed bonus"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(timeRemaining)}</span>
          </div>

          {/* Score */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151210] border border-[#3a2a1a] text-xs font-sans font-bold text-[#d4af37]">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{score} PTS</span>
          </div>

          {/* Reading Skill Guide */}
          <button
            id="btn-skill-guide"
            onClick={() => {
              sound.playMonocleClick();
              onOpenSkillGuide();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#151210] hover:bg-[#201b17] border border-[#3a2a1a] hover:border-[#d4af37]/60 text-[#c4b5a3] hover:text-[#d4af37] text-xs font-sans uppercase tracking-wider transition-colors"
            title="Skimming vs Scanning Guide"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">Strategy</span>
          </button>

          {/* Historical Trivia */}
          <button
            id="btn-trivia"
            onClick={() => {
              sound.playMonocleClick();
              onOpenTrivia();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#151210] hover:bg-[#201b17] border border-[#3a2a1a] hover:border-[#d4af37]/60 text-[#d4af37] text-xs font-sans uppercase tracking-wider transition-colors"
            title="Epoch Lore & Trivia"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden md:inline">Era Lore</span>
          </button>

          {/* Sound Toggle */}
          <button
            id="btn-sound-toggle"
            onClick={() => {
              sound.playMonocleClick();
              onToggleSound();
            }}
            className="p-2 rounded-lg bg-[#151210] hover:bg-[#201b17] border border-[#3a2a1a] hover:border-[#d4af37]/50 text-[#8e8271] hover:text-[#e0d6cc] transition-colors"
            title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#8e8271]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
