import React, { useState } from 'react';
import {
  FileText,
  Search,
  Eye,
  Type,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Info,
} from 'lucide-react';
import { LevelData } from '../types';
import { sound } from '../utils/audio';

interface DocumentViewerProps {
  level: LevelData;
  activeSkill: string;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  level,
  activeSkill,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSkimMode, setIsSkimMode] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  const getThemeContainerClass = () => {
    switch (level.themeStyle) {
      case 'prehistoric':
        return 'bg-[#e8dec0] border-2 border-[#b5a67c] text-[#2c241a] font-serif';
      case 'egyptian':
        return 'bg-[#eedcb4] border-2 border-[#c5a65c] text-[#2e210e] font-serif';
      case 'roman':
        return 'bg-[#e2ded6] border-2 border-[#a39c90] text-[#24211e] font-serif';
      case 'viking':
        return 'bg-[#d8e2dc] border-2 border-[#8ba39a] text-[#1c2925] font-serif';
      case 'medieval':
        return 'bg-[#ece4cf] border-2 border-[#bdad83] text-[#282114] font-serif';
      case 'renaissance':
        return 'bg-[#f0e6d2] border-2 border-[#c2a66e] text-[#2b2214] font-serif';
      case 'victorian':
        return 'bg-[#dedcd6] border-2 border-[#949189] text-[#1e2022] font-serif';
      case 'ww1':
        return 'bg-[#dad7cb] border-2 border-[#8e8876] text-[#242420] font-mono';
      case 'apollo':
        return 'bg-[#0a120e] border-2 border-[#10b981] text-[#6ee7b7] font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]';
      case 'vortex':
        return 'bg-[#180d22] border-2 border-[#a855f7] text-[#e9d5ff] font-mono shadow-[0_0_25px_rgba(168,85,247,0.25)] animate-pulse';
      default:
        return 'bg-[#e8dec0] border-2 border-[#b5a67c] text-[#2c241a] font-serif';
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base sm:text-lg leading-relaxed';
      case 'xlarge':
        return 'text-lg sm:text-xl leading-loose';
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  // Helper to render markdown-like formatted text with highlighting
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');

    return lines.map((line, idx) => {
      // Check if line should be skim-highlighted
      const isTopicSentence =
        line.startsWith('###') ||
        line.includes('paramount strategy') ||
        line.includes('overarching duty') ||
        line.includes('exist fundamentally to') ||
        line.includes('overriding purpose') ||
        line.includes('sovereign diplomatic intention') ||
        line.includes('Painting is not mere imitation') ||
        line.includes('The core principle of my invention') ||
        line.includes('central threat is not merely') ||
        line.includes('core problem was radar') ||
        line.includes('CRITICAL ALERT: THIS IS THE MASTER');

      const isDarkTerminalTheme = level.themeStyle === 'apollo' || level.themeStyle === 'vortex';

      return (
        <div
          key={idx}
          className={`my-2 transition-colors ${
            isSkimMode && isTopicSentence
              ? isDarkTerminalTheme
                ? 'bg-cyan-950/70 border-l-4 border-cyan-400 pl-3 py-1 rounded-r text-cyan-200 font-semibold shadow-md'
                : 'bg-amber-200/90 border-l-4 border-[#b8860b] pl-3 py-1 rounded-r text-[#1a1204] font-bold shadow-sm'
              : ''
          }`}
        >
          {line.startsWith('### ') ? (
            <h4
              className={`text-base sm:text-lg font-bold tracking-wide mt-4 mb-2 pb-1 border-b flex items-center gap-2 ${
                isDarkTerminalTheme
                  ? 'text-cyan-300 border-white/10'
                  : 'text-[#5c3a10] border-[#b5a67c]/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              {line.replace('### ', '')}
            </h4>
          ) : line.startsWith('**') && line.endsWith('**') ? (
            <p
              className={`font-bold tracking-wide text-xs sm:text-sm ${
                isDarkTerminalTheme ? 'text-amber-300' : 'text-[#422d0c]'
              }`}
            >
              {line.replace(/\*\*/g, '')}
            </p>
          ) : line.startsWith('*') && line.endsWith('*') ? (
            <p
              className={`italic text-xs mb-2 ${
                isDarkTerminalTheme ? 'text-purple-300' : 'text-[#6b583e]'
              }`}
            >
              {line.replace(/\*/g, '')}
            </p>
          ) : line.startsWith('* ') || line.startsWith('- ') ? (
            <div className="flex items-start gap-2 pl-3">
              <span className={`font-bold ${isDarkTerminalTheme ? 'text-cyan-400' : 'text-[#8c6224]'}`}>•</span>
              <span className="flex-1">
                {highlightSearch(line.replace(/^(\* |- )/, ''), isDarkTerminalTheme)}
              </span>
            </div>
          ) : line.match(/^\d+\. /) ? (
            <div className="flex items-start gap-2 pl-3">
              <span className={`font-bold ${isDarkTerminalTheme ? 'text-amber-400' : 'text-[#8c6224]'}`}>
                {line.match(/^\d+\./)?.[0]}
              </span>
              <span className="flex-1">
                {highlightSearch(line.replace(/^\d+\. /, ''), isDarkTerminalTheme)}
              </span>
            </div>
          ) : (
            <p>{highlightSearch(line, isDarkTerminalTheme)}</p>
          )}
        </div>
      );
    });
  };

  const highlightSearch = (textSegment: string, isDarkTerminalTheme: boolean) => {
    // If markdown bold **bold** exists, parse it
    const parts = textSegment.split(/(\*\*.*?\*\*|\*.*?\*)/g);

    return parts.map((part, pIdx) => {
      let isBold = false;
      let isItalic = false;
      let clean = part;

      if (part.startsWith('**') && part.endsWith('**')) {
        isBold = true;
        clean = part.slice(2, -2);
      } else if (part.startsWith('*') && part.endsWith('*')) {
        isItalic = true;
        clean = part.slice(1, -1);
      }

      if (!searchTerm.trim()) {
        return (
          <span
            key={pIdx}
            className={`${isBold ? 'font-bold' : ''} ${
              isItalic ? 'italic' : ''
            } ${
              isBold
                ? isDarkTerminalTheme
                  ? 'text-white'
                  : 'text-[#181105]'
                : ''
            }`}
          >
            {clean}
          </span>
        );
      }

      // If user typed a search term in Scan Mode
      const searchRegex = new RegExp(`(${escapeRegExp(searchTerm.trim())})`, 'gi');
      const searchParts = clean.split(searchRegex);

      return (
        <span
          key={pIdx}
          className={`${isBold ? 'font-bold' : ''} ${isItalic ? 'italic' : ''}`}
        >
          {searchParts.map((sp, sIdx) =>
            sp.toLowerCase() === searchTerm.trim().toLowerCase() ? (
              <mark
                key={sIdx}
                className="bg-[#d4af37] text-[#0a0502] font-black px-1.5 py-0.5 rounded shadow-sm shadow-[#d4af37]/60 border border-[#b8952d]"
              >
                {sp}
              </mark>
            ) : (
              sp
            )
          )}
        </span>
      );
    });
  };

  function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  return (
    <div className="w-full flex flex-col h-full bg-[#151210] border border-[#3a2a1a] rounded-xl overflow-hidden shadow-2xl">
      {/* Top Document Header & Toolbar */}
      <div className="bg-[#0a0502] border-b border-[#3a2a1a] p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#151210] border border-[#3a2a1a] text-[#d4af37]">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                {level.documentType}
              </span>
              <span className="text-[#3a2a1a]">•</span>
              <span className="text-xs font-sans uppercase tracking-wider text-[#8e8271]">
                {level.era}
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-serif font-bold text-white tracking-wide">
              {level.documentTitle}
            </h2>
          </div>
        </div>

        {/* Reading Assistance Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Skim Lens Toggle */}
          <button
            id="btn-toggle-skim-lens"
            onClick={() => {
              sound.playMonocleClick();
              setIsSkimMode(!isSkimMode);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans font-bold uppercase tracking-wider border transition-all ${
              isSkimMode
                ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/30'
                : 'bg-[#1a1614] hover:bg-[#251f1c] text-cyan-400 border-cyan-900/60'
            }`}
            title="Highlight headings & topic sentences for skimming"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Skim Lens</span>
          </button>

          {/* Scan Keyword Search Filter */}
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-[#8e8271] absolute left-2.5 pointer-events-none" />
            <input
              id="input-scan-lens"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Scan keyword/number..."
              className="pl-8 pr-2 py-1.5 bg-[#0a0502] border border-[#3a2a1a] focus:border-[#d4af37] rounded text-xs font-sans text-[#d4af37] placeholder:text-[#8e8271] w-36 sm:w-44 focus:outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2 text-[#8e8271] hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Font Size Adjust */}
          <div className="flex items-center bg-[#0a0502] border border-[#3a2a1a] rounded p-0.5">
            <button
              onClick={() => {
                sound.playMonocleClick();
                setFontSize('normal');
              }}
              className={`px-2 py-0.5 text-xs font-sans rounded ${
                fontSize === 'normal'
                  ? 'bg-[#d4af37] text-black font-bold'
                  : 'text-[#8e8271] hover:text-white'
              }`}
              title="Normal text size"
            >
              A
            </button>
            <button
              onClick={() => {
                sound.playMonocleClick();
                setFontSize('large');
              }}
              className={`px-2 py-0.5 text-xs font-sans rounded ${
                fontSize === 'large'
                  ? 'bg-[#d4af37] text-black font-bold'
                  : 'text-[#8e8271] hover:text-white'
              }`}
              title="Large text size"
            >
              A+
            </button>
          </div>
        </div>
      </div>

      {/* Active Skill Lens Banner Notice */}
      <div className="bg-[#100d0b] border-b border-[#3a2a1a] px-4 py-2 flex items-center justify-between text-xs font-sans">
        <div className="flex items-center gap-1.5 text-[#c4b5a3]">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>
            {activeSkill === 'SKIMMING' ? (
              <span>
                <strong className="text-cyan-400 uppercase tracking-wider">Skimming Lens:</strong> Look for the general thesis, main arguments, and section headers.
              </span>
            ) : activeSkill === 'SCANNING' ? (
              <span>
                <strong className="text-orange-400 uppercase tracking-wider">Scanning Lens:</strong> Look for exact proper nouns, numbers, timestamps, and measurements.
              </span>
            ) : (
              <span>
                <strong className="text-purple-300 uppercase tracking-wider">Vortex Final Boss:</strong> Skim sectors to locate the master anchor, then scan for the override key!
              </span>
            )}
          </span>
        </div>
        {searchTerm && (
          <span className="text-[11px] text-[#d4af37] font-mono">
            Searching for: "{searchTerm}"
          </span>
        )}
      </div>

      {/* Main Document Body */}
      <div className="p-4 sm:p-6 overflow-y-auto flex-1 max-h-[520px] bg-[#0d0a08]">
        <div
          className={`p-6 sm:p-8 rounded-lg shadow-2xl ${getThemeContainerClass()} ${getFontSizeClass()} relative overflow-hidden`}
        >
          {/* Subtle Authentic Dot Matrix Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Era Seal Watermark Background */}
          <div className="absolute top-4 right-4 opacity-15 pointer-events-none text-6xl select-none">
            {level.themeStyle === 'apollo'
              ? '🚀'
              : level.themeStyle === 'egyptian'
              ? '🏺'
              : level.themeStyle === 'roman'
              ? '🏛️'
              : level.themeStyle === 'viking'
              ? '⚔️'
              : level.themeStyle === 'medieval'
              ? '🛡️'
              : level.themeStyle === 'renaissance'
              ? '🎨'
              : level.themeStyle === 'victorian'
              ? '⚙️'
              : level.themeStyle === 'ww1'
              ? '📻'
              : level.themeStyle === 'vortex'
              ? '🌀'
              : '🔥'}
          </div>

          <div className="relative z-10">
            {renderFormattedText(level.documentText)}
          </div>
        </div>
      </div>
    </div>
  );
};
