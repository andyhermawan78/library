import React from 'react';
import { BookOpen, Sparkles, ArrowRight, Eye, Search } from 'lucide-react';
import { sound } from '../utils/audio';

interface IntroScreenProps {
  onStartGame: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-3xl w-full bg-[#151210] border border-[#3a2a1a] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Decorative Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

        {/* Story Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#2a1a0a] border border-[#d4af37]/50 text-[#d4af37] text-xs font-sans font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Grade 10 Interactive English Adventure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#d4af37] tracking-wider uppercase mb-3">
            The Chronos Library Heist
          </h1>

          <p className="text-sm sm:text-base text-[#c4b5a3] max-w-xl mx-auto font-serif italic">
            Master the ancient arts of <strong className="text-cyan-400 not-italic">Skimming</strong> (reading for the gist) and <strong className="text-[#d4af37] not-italic">Scanning</strong> (searching for specific facts) to save history!
          </p>
        </div>

        {/* Narrative Prologue Box */}
        <div className="bg-[#0a0502] border border-[#3a2a1a] rounded-xl p-5 sm:p-6 mb-8 relative z-10 text-[#c4b5a3] space-y-3.5 text-sm sm:text-base leading-relaxed font-serif shadow-inner">
          <div className="flex items-center gap-2 text-[#d4af37] font-sans font-bold uppercase tracking-wider text-xs border-b border-[#3a2a1a] pb-2.5">
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>Prologue: The Accidental Awakening</span>
          </div>

          <p>
            You are a bored Grade 10 student sitting at a quiet corner desk in the high school library. While staring blankly at your history essay prompt, your elbow accidentally knocks a dusty, leather-bound tome called <em className="text-cyan-300 font-semibold">"The Librarian's Guide to the Chronos Nexus"</em> off the shelf.
          </p>

          <p>
            Your smartphone slips from your fingers, tumbling right onto the open book. <strong className="text-[#d4af37]">ZAAAAP!</strong> A blinding flash of quantum cyan light engulfs the room. The library doors vanish. The ticking clocks freeze.
          </p>

          <div className="p-4 bg-[#1a1614] border border-[#d4af37]/40 rounded-lg text-[#e0d6cc] flex items-start gap-3 my-2">
            <span className="text-3xl shrink-0">👻</span>
            <div>
              <p className="font-sans font-bold text-[#d4af37] text-xs uppercase tracking-wider mb-1">
                Eldred, the Chronos-Librarian, materializes before you:
              </p>
              <p className="italic text-xs sm:text-sm text-[#c4b5a3]">
                "By the unfiled folios of Alexandria! Look what you've done, young scholar! Your little electromagnetic contraption has shattered the Nexus into <strong>10 historical timelines</strong>. Stone age records are glitching, pharaohs are babbling about wireless towers, and da Vinci's mirror-scripts are dissolving!"
              </p>
            </div>
          </div>

          <p>
            "To escape back to reality and finish your essay, you must journey through all 10 eras and recover the 10 lost <strong className="text-[#d4af37]">Chrono-Pages</strong>. But brute guessing will destroy you. You must master two sacred scholar skills: <strong>SKIMMING</strong> for the grand gist, and <strong>SCANNING</strong> for exact names and numbers. Are your eyes ready?"
          </p>
        </div>

        {/* 2 Core Skills Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 relative z-10">
          <div className="bg-[#1a1614] border border-cyan-900/60 rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0a0502] border border-cyan-500/50 text-cyan-400 shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-1">Skill 1: SKIMMING</h4>
              <p className="text-xs text-[#c4b5a3] font-serif leading-relaxed">
                Read fast for the <strong>main idea & gist</strong>. Glance at titles, first/last sentences, and overall arguments.
              </p>
            </div>
          </div>

          <div className="bg-[#1a1614] border border-amber-900/60 rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0a0502] border border-[#d4af37]/50 text-[#d4af37] shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-1">Skill 2: SCANNING</h4>
              <p className="text-xs text-[#c4b5a3] font-serif leading-relaxed">
                Hunt for <strong>specific details & data</strong>. Look directly for numbers, dates, capitalized names, and exact terms.
              </p>
            </div>
          </div>
        </div>

        {/* Start Game Action */}
        <div className="text-center relative z-10">
          <button
            id="btn-start-game"
            onClick={() => {
              sound.playCorrect();
              onStartGame();
            }}
            className="w-full sm:w-auto px-10 py-4 bg-[#d4af37] hover:bg-[#b8952d] text-[#0a0502] font-sans font-extrabold text-sm sm:text-base uppercase tracking-widest rounded-lg shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-3 mx-auto transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>ENTER LEVEL 1: THE CAVEMAN CONUNDRUM</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-[11px] font-sans uppercase tracking-widest text-[#8e8271] mt-3">
            10 Historical Eras • Interactive Trivia • Timed Challenges • Grade 10 English Curriculum
          </p>
        </div>
      </div>
    </div>
  );
};

