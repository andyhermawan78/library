import React, { useState } from 'react';
import { X, Eye, Search, CheckCircle2, BookOpen, Lightbulb } from 'lucide-react';
import { SKILL_GUIDE } from '../data/gameData';
import { sound } from '../utils/audio';

interface SkillGuideModalProps {
  onClose: () => void;
}

export const SkillGuideModal: React.FC<SkillGuideModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'skimming' | 'scanning'>('skimming');

  const guide = activeTab === 'skimming' ? SKILL_GUIDE.skimming : SKILL_GUIDE.scanning;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0502]/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#151210] border border-[#3a2a1a] rounded-2xl p-6 sm:p-8 shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Decorative Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#3a2a1a] pb-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#2a1a0a] border border-[#d4af37]/50 text-[#d4af37]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-[#d4af37] tracking-wider uppercase">
                Grade 10 Scholar's Guide
              </h3>
              <p className="text-xs font-sans uppercase tracking-widest text-[#8e8271]">
                Mastering the Dual Powers: Skimming vs. Scanning
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

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-[#0a0502] border border-[#3a2a1a] rounded-lg mb-5">
          <button
            onClick={() => {
              sound.playMonocleClick();
              setActiveTab('skimming');
            }}
            className={`py-2 px-3 rounded text-xs sm:text-sm font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'skimming'
                ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/10'
                : 'text-[#8e8271] hover:text-[#e0d6cc]'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>1. SKIMMING (The Gist)</span>
          </button>
          <button
            onClick={() => {
              sound.playMonocleClick();
              setActiveTab('scanning');
            }}
            className={`py-2 px-3 rounded text-xs sm:text-sm font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'scanning'
                ? 'bg-[#d4af37] text-[#0a0502] shadow-md shadow-[#d4af37]/20 font-extrabold'
                : 'text-[#8e8271] hover:text-[#e0d6cc]'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>2. SCANNING (Specific Facts)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto flex-1 space-y-4 pr-1 text-xs sm:text-sm text-[#e0d6cc]">
          <div className="p-4 rounded-xl bg-[#0a0502] border border-[#3a2a1a]">
            <h4 className="font-serif font-bold text-white text-base mb-1">{guide.title}</h4>
            <p className="text-xs font-sans uppercase tracking-wider text-[#d4af37] font-semibold mb-2">{guide.subtitle}</p>
            <p className="text-[#c4b5a3] font-serif leading-relaxed italic">"{guide.description}"</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-[#1a1614] border border-[#3a2a1a]">
              <h5 className="font-sans font-bold uppercase tracking-wider text-[#d4af37] text-xs mb-2.5 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-[#d4af37]" />
                When To Use This Skill:
              </h5>
              <ul className="space-y-2 text-[#c4b5a3] font-serif text-xs sm:text-sm">
                {guide.whenToUse.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#d4af37] shrink-0 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#1a1614] border border-[#3a2a1a]">
              <h5 className="font-sans font-bold uppercase tracking-wider text-cyan-400 text-xs mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                How To Do It Like A Pro:
              </h5>
              <ul className="space-y-2 text-[#c4b5a3] font-serif text-xs sm:text-sm">
                {activeTab === 'skimming'
                  ? SKILL_GUIDE.skimming.howToSkim.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 shrink-0 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))
                  : SKILL_GUIDE.scanning.howToScan.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#d4af37] shrink-0 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            sound.playMonocleClick();
            onClose();
          }}
          className="w-full mt-5 py-3 bg-[#d4af37] hover:bg-[#b8952d] text-[#0a0502] font-sans font-extrabold uppercase tracking-widest rounded-lg text-xs sm:text-sm transition-colors cursor-pointer"
        >
          Got it, Librarian Eldred!
        </button>
      </div>
    </div>
  );
};

