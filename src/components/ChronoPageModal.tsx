import React, { useEffect } from 'react';
import { Sparkles, Award, ArrowRight } from 'lucide-react';
import { LevelData } from '../types';
import { sound } from '../utils/audio';

interface ChronoPageModalProps {
  level: LevelData;
  totalCollected: number;
  onContinue: () => void;
}

export const ChronoPageModal: React.FC<ChronoPageModalProps> = ({
  level,
  totalCollected,
  onContinue,
}) => {
  useEffect(() => {
    sound.playPageAcquired();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0502]/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-[#151210] border-2 border-[#d4af37] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center animate-scaleUp">
        {/* Decorative Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

        {/* Animated Page Icon */}
        <div className="w-18 h-18 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-[#2a1a0a] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-xl shadow-[#d4af37]/30 mb-5 animate-bounce">
          <Award className="w-10 h-10 text-[#d4af37]" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded bg-[#2a1a0a] border border-[#d4af37]/50 text-[#d4af37] text-xs font-sans font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Chrono-Page {totalCollected} of 10 Acquired</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide mb-2">
          Historical Relic Recovered:
          <br />
          <span className="text-[#d4af37] font-serif text-2xl sm:text-3xl block mt-1">
            {level.chronoPageName}
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-[#c4b5a3] mb-5 leading-relaxed font-serif">
          {level.chronoPageDescription}
        </p>

        {/* Eldred's Approval Quote */}
        <div className="bg-[#0a0502] border border-[#3a2a1a] rounded-xl p-4 text-xs text-[#c4b5a3] mb-6 text-left flex items-start gap-3">
          <span className="text-2xl shrink-0">🧐</span>
          <div>
            <p className="font-sans font-bold uppercase tracking-wider text-[#d4af37] text-[11px] mb-1">
              Eldred's Logbook Entry:
            </p>
            <p className="italic font-serif text-sm text-[#e0d6cc]">
              "Splendid execution! Both scanning precision and skimming synthesis were applied without flaw. The timeline anchor for {level.era} is securely restored."
            </p>
          </div>
        </div>

        <button
          id="btn-continue-journey"
          onClick={() => {
            sound.playMonocleClick();
            onContinue();
          }}
          className="w-full py-3.5 bg-[#d4af37] hover:bg-[#b8952d] text-[#0a0502] font-sans font-extrabold uppercase tracking-widest rounded-lg text-sm sm:text-base shadow-xl shadow-[#d4af37]/30 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
        >
          <span>
            {level.id === 10
              ? 'WITNESS THE FINAL VICTORY'
              : `ADVANCE TO LEVEL ${level.id + 1}`}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
