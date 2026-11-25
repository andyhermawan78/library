import React from 'react';
import { X, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import { LevelData } from '../types';
import { sound } from '../utils/audio';

interface TriviaModalProps {
  level: LevelData;
  onClose: () => void;
}

export const TriviaModal: React.FC<TriviaModalProps> = ({ level, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0502]/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-[#151210] border border-[#3a2a1a] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
        {/* Decorative Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#3a2a1a] pb-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#2a1a0a] border border-[#d4af37]/50 text-[#d4af37]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-[#d4af37] tracking-wider uppercase">
                Historical Lore & Trivia
              </h3>
              <p className="text-xs font-sans uppercase tracking-widest text-[#8e8271]">
                Level {level.id}: {level.title}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playMonocleClick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-[#0a0502] hover:bg-[#201b17] border border-[#3a2a1a] text-[#8e8271] hover:text-[#e0d6cc] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-[#0a0502] border border-[#3a2a1a] rounded-xl p-4">
            <h4 className="text-sm font-serif font-bold text-[#d4af37] mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#d4af37]" />
              {level.trivia.title}
            </h4>
            <p className="text-xs sm:text-sm font-serif text-[#c4b5a3] leading-relaxed">
              {level.trivia.fact}
            </p>
          </div>

          <div className="bg-[#1a1614] border border-[#3a2a1a] rounded-xl p-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              Eldred's Grade 10 Reading Strategy Tip
            </h4>
            <p className="text-xs sm:text-sm font-serif text-[#e0d6cc] leading-relaxed">
              {level.trivia.readingTip}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            sound.playMonocleClick();
            onClose();
          }}
          className="w-full mt-6 py-3 bg-[#d4af37] hover:bg-[#b8952d] text-[#0a0502] font-sans font-extrabold uppercase tracking-widest rounded-lg text-sm transition-colors shadow-lg shadow-[#d4af37]/20 cursor-pointer"
        >
          Return to Challenge
        </button>
      </div>
    </div>
  );
};

