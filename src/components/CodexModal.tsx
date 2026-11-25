import React from 'react';
import { X, CheckCircle2, Lock, Sparkles, BookOpen } from 'lucide-react';
import { GAME_LEVELS } from '../data/gameData';
import { sound } from '../utils/audio';

interface CodexModalProps {
  collectedPages: string[];
  onClose: () => void;
}

export const CodexModal: React.FC<CodexModalProps> = ({
  collectedPages,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0502]/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-[#151210] border border-[#3a2a1a] rounded-2xl p-6 sm:p-8 shadow-2xl relative flex flex-col max-h-[88vh]">
        {/* Decorative Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#3a2a1a] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2a1a0a] border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#d4af37] tracking-wider uppercase">
                The Chronos-Pages Codex
              </h2>
              <p className="text-xs font-sans uppercase tracking-widest text-[#8e8271]">
                {collectedPages.length} of 10 Lost Historical Manuscripts Recovered
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playMonocleClick();
              onClose();
            }}
            className="p-2 rounded-lg bg-[#0a0502] hover:bg-[#201b17] border border-[#3a2a1a] text-[#8e8271] hover:text-[#e0d6cc] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pages Grid */}
        <div className="overflow-y-auto flex-1 pr-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GAME_LEVELS.map((lvl) => {
            const isUnlocked = collectedPages.length >= lvl.id;
            return (
              <div
                key={lvl.id}
                className={`p-4 rounded-xl border transition-all ${
                  isUnlocked
                    ? 'bg-[#1a1614] border-[#d4af37]/50 shadow-md shadow-[#d4af37]/5'
                    : 'bg-[#0a0502] border-[#3a2a1a] opacity-60'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-7 h-7 rounded flex items-center justify-center text-xs font-sans font-bold ${
                        isUnlocked
                          ? 'bg-[#d4af37] text-[#0a0502] shadow-sm shadow-[#d4af37]/40'
                          : 'bg-[#1a1614] border border-[#3a2a1a] text-[#8e8271]'
                      }`}
                    >
                      {lvl.id}
                    </span>
                    <div>
                      <h4
                        className={`text-sm sm:text-base font-serif font-bold ${
                          isUnlocked ? 'text-[#d4af37]' : 'text-[#8e8271]'
                        }`}
                      >
                        {isUnlocked ? lvl.chronoPageName : `Page ${lvl.id}: [Locked]`}
                      </h4>
                      <p className="text-[11px] text-[#8e8271] font-sans uppercase tracking-wider">
                        {lvl.title} ({lvl.era})
                      </p>
                    </div>
                  </div>

                  {isUnlocked ? (
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                  ) : (
                    <Lock className="w-4 h-4 text-[#8e8271] shrink-0 mt-1" />
                  )}
                </div>

                <p className="text-xs font-serif text-[#c4b5a3] leading-relaxed">
                  {isUnlocked
                    ? lvl.chronoPageDescription
                    : 'Clear this timeline level by answering both skimming and scanning challenges.'}
                </p>

                {isUnlocked && (
                  <div className="mt-2.5 pt-2 border-t border-[#3a2a1a] flex items-center gap-1.5 text-[11px] text-cyan-400 font-sans font-medium">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Skills: Skimming & Scanning Verified</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

