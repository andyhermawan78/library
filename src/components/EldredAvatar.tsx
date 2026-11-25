import React, { useState } from 'react';
import { Sparkles, MessageSquare, Send, RefreshCw } from 'lucide-react';
import { sound } from '../utils/audio';

interface EldredAvatarProps {
  mood: 'witty' | 'impatient' | 'impressed' | 'teasing' | 'teaching';
  currentDialogue: string;
  isEvaluating?: boolean;
  currentLevel: number;
  pagesCollected: number;
}

export const EldredAvatar: React.FC<EldredAvatarProps> = ({
  mood,
  currentDialogue,
  isEvaluating = false,
  currentLevel,
  pagesCollected,
}) => {
  const [isBanterOpen, setIsBanterOpen] = useState(false);
  const [banterInput, setBanterInput] = useState('');
  const [banterResponse, setBanterResponse] = useState<string | null>(null);
  const [isBanterLoading, setIsBanterLoading] = useState(false);

  const getMoodAura = () => {
    switch (mood) {
      case 'impressed':
        return 'from-amber-500/30 to-emerald-500/30 border-amber-400/50 shadow-amber-500/20';
      case 'impatient':
      case 'teasing':
        return 'from-purple-500/30 to-rose-500/30 border-purple-400/50 shadow-purple-500/20';
      case 'teaching':
        return 'from-cyan-500/30 to-blue-500/30 border-cyan-400/50 shadow-cyan-500/20';
      default:
        return 'from-indigo-500/30 to-cyan-500/30 border-indigo-400/50 shadow-indigo-500/20';
    }
  };

  const handleAskEldred = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!banterInput.trim() || isBanterLoading) return;

    sound.playMonocleClick();
    setIsBanterLoading(true);
    try {
      const res = await fetch('/api/eldred/banter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: banterInput,
          currentLevel,
          pagesCollected,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setBanterResponse(data.response || `*Eldred polishes his monocle.* "Keep reading, young sleuth!"`);
      } else {
        setBanterResponse(`*Eldred clears his spectral throat.* "Skim the paragraphs for the gist, scan for the key nouns and numbers!"`);
      }
    } catch {
      setBanterResponse(`*Eldred glares.* "Stop stalling and check the text! Time waits for no scholar."`);
    } finally {
      setIsBanterLoading(false);
      setBanterInput('');
    }
  };

  return (
    <div className="w-full bg-[#151210] border border-[#3a2a1a] rounded-xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
      {/* Decorative Gold Corner Accent from Design */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
        {/* Holographic Ghost Portrait */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={() => sound.playMonocleClick()}>
            {/* Ghost Glow Halo */}
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#1a1614] border-2 ${
                mood === 'impressed'
                  ? 'border-[#d4af37] shadow-lg shadow-[#d4af37]/20'
                  : mood === 'teaching'
                  ? 'border-cyan-500/60 shadow-lg shadow-cyan-500/20'
                  : 'border-[#3a2a1a] shadow-lg shadow-[#3a2a1a]/40'
              } flex items-center justify-center transition-all duration-300 transform group-hover:scale-105`}
            >
              {/* Spectral Eldred Illustration */}
              <div className="relative flex flex-col items-center justify-center text-cyan-200">
                <div className="relative">
                  <span className="text-3xl sm:text-4xl filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] animate-bounce duration-1000">
                    👻
                  </span>
                  {/* Glowing Monocle badge */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#d4af37] border border-amber-200 flex items-center justify-center text-[10px] text-[#0a0502] font-bold shadow-md shadow-[#d4af37]/80 animate-pulse">
                    🧐
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 bg-[#0a0502] border border-[#d4af37]/60 rounded-full p-1 text-[#d4af37]">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-bold text-white text-base sm:text-lg tracking-wide">
                Eldred
              </h3>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2a1a0a] text-[#d4af37] border border-[#3a2a1a]">
                Librarian-442
              </span>
            </div>
            <p className="text-xs font-sans uppercase tracking-[0.15em] text-[#8e8271] mt-0.5">
              Status: Sarcastic Guardian
            </p>
          </div>
        </div>

        {/* Dynamic Eldred Speech Bubble */}
        <div className="flex-1 w-full bg-[#0a0502]/90 border border-[#3a2a1a] rounded-lg p-3.5 sm:p-4 relative shadow-inner">
          <div className="flex items-center justify-between gap-2 border-b border-[#3a2a1a] pb-2 mb-2.5">
            <p className="text-cyan-400 font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              Holographic Feed Initiated...
            </p>

            {/* Quick Banter / Ask Eldred Toggle */}
            <button
              id="btn-ask-eldred"
              onClick={() => {
                sound.playMonocleClick();
                setIsBanterOpen(!isBanterOpen);
              }}
              className="text-xs flex items-center gap-1.5 text-[#d4af37] hover:text-[#f3d97b] bg-[#1a1614] hover:bg-[#251f1c] border border-[#3a2a1a] hover:border-[#d4af37]/50 rounded px-2.5 py-1 font-sans uppercase tracking-wider transition-colors whitespace-nowrap"
              title="Ask Eldred for advice or reading tips"
            >
              <MessageSquare className="w-3 h-3" />
              <span>{isBanterOpen ? 'Close Feed' : 'Consult Eldred'}</span>
            </button>
          </div>

          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              {isEvaluating ? (
                <div className="flex items-center gap-2 text-[#d4af37] italic font-serif text-base">
                  <RefreshCw className="w-4 h-4 animate-spin text-[#d4af37]" />
                  <span>*Eldred adjusts his spectral monocle and critically assesses your synthesis...*</span>
                </div>
              ) : (
                <p className="text-base sm:text-lg italic leading-relaxed text-[#c4b5a3] font-serif">
                  {currentDialogue}
                </p>
              )}
            </div>
          </div>

          {/* Banter Sub-drawer */}
          {isBanterOpen && (
            <div className="mt-3 pt-3 border-t border-[#3a2a1a]">
              <form onSubmit={handleAskEldred} className="flex gap-2">
                <input
                  type="text"
                  value={banterInput}
                  onChange={(e) => setBanterInput(e.target.value)}
                  placeholder="Ask Eldred: 'How do I skim this faster?' or 'Give me a hint'..."
                  className="flex-1 bg-[#0a0502] border border-[#3a2a1a] rounded px-3 py-1.5 text-xs text-[#d4af37] placeholder:text-[#8e8271] focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  disabled={isBanterLoading || !banterInput.trim()}
                  className="px-3.5 py-1.5 bg-[#d4af37] hover:bg-[#b8952d] disabled:opacity-50 text-[#0a0502] font-sans font-bold uppercase tracking-wider rounded text-xs flex items-center gap-1 transition-colors"
                >
                  {isBanterLoading ? (
                    <RefreshCw className="w-3 h-3 animate-spin" />
                  ) : (
                    <Send className="w-3 h-3" />
                  )}
                  <span>Ask</span>
                </button>
              </form>

              {banterResponse && (
                <div className="mt-2.5 p-3 rounded bg-[#1a1614] border border-[#3a2a1a] text-xs font-serif italic text-[#e0d6cc]">
                  <span className="text-[#d4af37] font-bold font-sans uppercase tracking-wider not-italic block mb-1">
                    ELDRED'S ADVICE:
                  </span>
                  {banterResponse}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
