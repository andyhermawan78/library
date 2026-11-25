import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, Sparkles, BookOpen, RotateCcw } from 'lucide-react';
import { sound } from '../utils/audio';

interface VictoryScreenProps {
  score: number;
  totalTimeElapsed: number;
  onRestart: () => void;
  onOpenCodex: () => void;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({
  score,
  totalTimeElapsed,
  onRestart,
  onOpenCodex,
}) => {
  useEffect(() => {
    sound.playVortexExplosion();
    sound.playPageAcquired();

    // Trigger multiple bursts of celebratory confetti with gold and cyan sparkles
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#d4af37', '#f3e5ab', '#38bdf8', '#c4b5a3'],
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#d4af37', '#f3e5ab', '#38bdf8', '#c4b5a3'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-3xl w-full bg-[#151210] border-2 border-[#d4af37] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center animate-scaleUp">
        {/* Decorative Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

        {/* Master Trophy Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-[#2a1a0a] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-2xl shadow-[#d4af37]/40 mb-6 animate-bounce">
          <Award className="w-12 h-12 sm:w-14 sm:h-14 text-[#d4af37]" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#2a1a0a] border border-[#d4af37] text-[#d4af37] text-xs font-sans font-bold uppercase tracking-widest mb-3 shadow-md">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span>ALL 10 CHRONO-PAGES COLLECTED • TIMELINE SECURED</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#d4af37] tracking-wider uppercase mb-6">
          Victory in the Chronos Nexus!
        </h1>

        {/* THE OFFICIAL VICTORY EPILOGUE */}
        <div className="bg-[#0a0502] border border-[#3a2a1a] rounded-xl p-6 sm:p-8 text-left space-y-4 mb-8 font-serif shadow-inner">
          <div className="flex items-center gap-2 text-[#d4af37] font-sans font-bold uppercase tracking-wider border-b border-[#3a2a1a] pb-2.5 text-xs">
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>The Official Victory Epilogue</span>
          </div>

          <p className="text-xs sm:text-sm text-[#c4b5a3] italic">
            The Vortex explodes into confetti of letters! Eldred appears, looking genuinely impressed, polishing his monocle.
          </p>

          <div className="p-4 bg-[#1a1614] border border-[#d4af37]/40 rounded-lg text-[#e0d6cc] space-y-2">
            <p className="font-sans font-bold text-[#d4af37] text-xs uppercase tracking-wider flex items-center gap-2">
              <span>👻</span>
              <span>Eldred's Final Dialogue:</span>
            </p>
            <p className="text-xs sm:text-sm text-[#c4b5a3] leading-relaxed">
              "Ten levels! Ten anchors of time saved! You’ve skimmed for the forest and scanned for the trees. You saw the big pictures and hunted down the tiny details. That, young Text-Sleuth, is the hallmark of a true scholar. The library is stable. History is correct. And you? You are no longer a student who just reads. You are a student who <em>hunts</em> for knowledge. Now, get back to your essay. And this time... skim the chapter first."
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#c4b5a3] leading-relaxed">
            The world warps. You're back in the school library, holding your phone. The dusty book is closed on the table. You open your history textbook, confidently skim the chapter introduction, scan the margins for key dates, and ace your project.
          </p>

          <div className="pt-3 border-t border-[#3a2a1a] text-center space-y-1">
            <p className="text-lg sm:text-xl font-serif font-bold text-[#d4af37] tracking-wider uppercase">
              GAME OVER. YOU WIN!
            </p>
            <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-cyan-400 font-bold">
              Congratulations! You have mastered the ancient arts of Skimming and Scanning!
            </p>
          </div>
        </div>

        {/* Scholar Stats Badge */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          <div className="p-3 bg-[#0a0502] border border-[#3a2a1a] rounded-lg">
            <div className="text-[11px] font-sans uppercase tracking-widest text-[#8e8271]">Final Scholar Score</div>
            <div className="text-lg font-serif font-bold text-[#d4af37]">{score} PTS</div>
          </div>
          <div className="p-3 bg-[#0a0502] border border-[#3a2a1a] rounded-lg">
            <div className="text-[11px] font-sans uppercase tracking-widest text-[#8e8271]">Historical Eras Saved</div>
            <div className="text-lg font-serif font-bold text-white">10 / 10</div>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 bg-[#0a0502] border border-[#3a2a1a] rounded-lg">
            <div className="text-[11px] font-sans uppercase tracking-widest text-[#8e8271]">Skill Proficiency</div>
            <div className="text-lg font-serif font-bold text-cyan-400">Grade 10 Master</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            id="btn-view-codex"
            onClick={() => {
              sound.playMonocleClick();
              onOpenCodex();
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#0a0502] hover:bg-[#201b17] border border-[#3a2a1a] text-[#c4b5a3] hover:text-white font-sans font-bold uppercase tracking-wider rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>Inspect All 10 Chrono-Pages</span>
          </button>

          <button
            id="btn-replay-heist"
            onClick={() => {
              sound.playMonocleClick();
              onRestart();
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#d4af37] hover:bg-[#b8952d] text-[#0a0502] font-sans font-extrabold uppercase tracking-widest rounded-lg text-xs sm:text-sm shadow-xl shadow-[#d4af37]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Heist Again</span>
          </button>
        </div>
      </div>
    </div>
  );
};

