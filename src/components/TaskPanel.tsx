import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Send,
  List,
  Edit3,
  Lightbulb,
} from 'lucide-react';
import { LevelData, TaskData } from '../types';
import { sound } from '../utils/audio';

interface TaskPanelProps {
  level: LevelData;
  taskIndex: number;
  onAnswerSubmit: (answer: string) => void;
  isEvaluating: boolean;
  evaluationResult: {
    isCorrect: boolean;
    feedback: string;
    hint: string;
    skillTip: string;
  } | null;
  attemptCount: number;
  onNextTaskOrPage: () => void;
  isTaskComplete: boolean;
}

export const TaskPanel: React.FC<TaskPanelProps> = ({
  level,
  taskIndex,
  onAnswerSubmit,
  isEvaluating,
  evaluationResult,
  attemptCount,
  onNextTaskOrPage,
  isTaskComplete,
}) => {
  const currentTask: TaskData = level.tasks[taskIndex];
  const [typedAnswer, setTypedAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [mode, setMode] = useState<'typed' | 'choice'>('choice');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEvaluating || isTaskComplete) return;

    const answer = mode === 'choice' ? selectedOption : typedAnswer;
    if (!answer || !answer.trim()) return;

    sound.playMonocleClick();
    onAnswerSubmit(answer.trim());
  };

  const getSkillBadgeColor = (skill: string) => {
    switch (skill) {
      case 'SKIMMING':
        return 'bg-cyan-950/50 border-cyan-500/60 text-cyan-400 shadow-cyan-500/10';
      case 'SCANNING':
        return 'bg-amber-950/50 border-[#d4af37]/70 text-[#d4af37] shadow-[#d4af37]/10';
      default:
        return 'bg-purple-950/50 border-purple-500 text-purple-300 shadow-purple-500/20 animate-pulse';
    }
  };

  return (
    <div className="w-full bg-[#151210] border border-[#3a2a1a] rounded-xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between">
      <div>
        {/* Level Problem Context Box */}
        <div className="bg-[#1a1614] border border-[#3a2a1a] rounded-lg p-3 sm:p-4 mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <AlertCircle className="w-4 h-4 text-[#d4af37]" />
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#d4af37]">
              Timeline Glitch & Mission Objective
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#c4b5a3] leading-relaxed font-serif">
            {level.problemDescription}
          </p>
        </div>

        {/* Task Tabs Header */}
        <div className="flex items-center justify-between gap-2 border-b border-[#3a2a1a] pb-3 mb-4">
          <div className="flex items-center gap-2">
            {level.tasks.map((t, idx) => (
              <div
                key={t.id}
                className={`px-3 py-1 rounded text-xs font-sans font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  idx === taskIndex
                    ? 'bg-[#d4af37] text-[#0a0502] shadow-md shadow-[#d4af37]/20'
                    : idx < taskIndex || isTaskComplete
                    ? 'bg-[#2a1a0a] border border-[#d4af37]/60 text-[#d4af37]'
                    : 'bg-[#0a0502] border border-[#3a2a1a] text-[#8e8271]'
                }`}
              >
                {idx < taskIndex || (idx === taskIndex && isTaskComplete) ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                ) : (
                  <span className="w-3.5 h-3.5 rounded-full bg-[#3a2a1a] flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                )}
                <span>
                  {level.tasks.length === 1
                    ? 'Final Challenge'
                    : `Task ${idx + 1}`}
                </span>
              </div>
            ))}
          </div>

          {/* Skill Tag */}
          <div
            className={`px-3 py-1 rounded border text-xs font-sans font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 ${getSkillBadgeColor(
              currentTask.skill
            )}`}
          >
            <Sparkles className="w-3 h-3" />
            <span>Target: {currentTask.skill}</span>
          </div>
        </div>

        {/* Challenge Question */}
        <div className="mb-5">
          <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-2 flex items-start gap-2">
            <span className="text-[#d4af37] font-mono">Q:</span>
            <span>{currentTask.question}</span>
          </h3>

          {/* Reading Strategy Helper Pill */}
          <div className="inline-flex items-center gap-1.5 bg-[#0a0502] border border-[#3a2a1a] rounded px-3 py-1 text-xs font-sans text-[#c4b5a3]">
            <Lightbulb className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {currentTask.skill === 'SKIMMING'
                ? 'Strategy: Skim headings, first sentence, and conclusion.'
                : currentTask.skill === 'SCANNING'
                ? 'Strategy: Scan for exact numbers, proper nouns, and measurements.'
                : 'Strategy: Skim to locate sector, scan for override key in brackets!'}
            </span>
          </div>
        </div>

        {/* Input Format Selector */}
        {!isTaskComplete && (
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-sans uppercase tracking-wider text-[#8e8271]">
              Answer Mode:
            </span>
            <div className="flex items-center bg-[#0a0502] border border-[#3a2a1a] rounded p-0.5">
              <button
                type="button"
                onClick={() => {
                  sound.playMonocleClick();
                  setMode('choice');
                }}
                className={`px-2.5 py-1 text-xs font-sans font-bold uppercase tracking-wider rounded flex items-center gap-1 transition-colors ${
                  mode === 'choice'
                    ? 'bg-[#d4af37] text-[#0a0502]'
                    : 'text-[#8e8271] hover:text-[#e0d6cc]'
                }`}
              >
                <List className="w-3 h-3" />
                <span>Multiple Choice</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playMonocleClick();
                  setMode('typed');
                }}
                className={`px-2.5 py-1 text-xs font-sans font-bold uppercase tracking-wider rounded flex items-center gap-1 transition-colors ${
                  mode === 'typed'
                    ? 'bg-[#d4af37] text-[#0a0502]'
                    : 'text-[#8e8271] hover:text-[#e0d6cc]'
                }`}
              >
                <Edit3 className="w-3 h-3" />
                <span>Free Typing</span>
              </button>
            </div>
          </div>
        )}

        {/* Answer Selection or Input Form */}
        {!isTaskComplete ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'choice' ? (
              <div className="space-y-2">
                {currentTask.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    type="button"
                    onClick={() => {
                      sound.playMonocleClick();
                      setSelectedOption(opt);
                    }}
                    className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm font-sans transition-all flex items-start gap-3 ${
                      selectedOption === opt
                        ? 'bg-[#2a1a0a] border-2 border-[#d4af37] text-white shadow-lg shadow-[#d4af37]/15'
                        : 'bg-[#0a0502] hover:bg-[#1a1614] border-[#3a2a1a] text-[#c4b5a3]'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        selectedOption === opt
                          ? 'bg-[#d4af37] text-[#0a0502]'
                          : 'bg-[#1a1614] border border-[#3a2a1a] text-[#8e8271]'
                      }`}
                    >
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="flex-1 font-serif text-sm sm:text-base leading-snug">{opt}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <textarea
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  placeholder={`Type your ${currentTask.skill.toLowerCase()} answer in your own words...`}
                  rows={3}
                  className="w-full bg-[#0a0502] border border-[#3a2a1a] focus:border-[#d4af37] rounded-lg p-3 text-sm font-serif text-white placeholder:text-[#8e8271] focus:outline-none transition-all resize-none"
                />
              </div>
            )}

            {/* Attempt Tracker & Submit Button */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <div className="text-xs font-sans uppercase tracking-wider text-[#8e8271]">
                Attempt:{' '}
                <span className="text-[#d4af37] font-bold">
                  {attemptCount + 1} of 2
                </span>
              </div>

              <button
                type="submit"
                disabled={
                  isEvaluating ||
                  (mode === 'choice' ? !selectedOption : !typedAnswer.trim())
                }
                className="px-6 py-2.5 bg-[#d4af37] hover:bg-[#b8952d] disabled:opacity-40 text-[#0a0502] font-sans font-bold uppercase tracking-wider rounded text-xs sm:text-sm shadow-lg shadow-[#d4af37]/20 flex items-center gap-2 transition-all transform active:scale-95 cursor-pointer"
              >
                {isEvaluating ? (
                  <span>Consulting Eldred...</span>
                ) : (
                  <>
                    <span>Submit Verification</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Task Completed Box */
          <div className="bg-[#1a1614] border border-[#d4af37]/60 rounded-xl p-4 sm:p-5 text-[#e0d6cc] animate-fadeIn">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
              <h4 className="font-serif font-bold text-white text-base sm:text-lg">
                Task Complete! Chrono-Anchor Stabilized.
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#c4b5a3] mb-3 italic font-serif">
              "{evaluationResult?.feedback || currentTask.celebrationQuote}"
            </p>
            <div className="p-3 bg-[#0a0502] border border-[#3a2a1a] rounded-lg text-xs font-sans text-[#c4b5a3] mb-4">
              <strong className="text-[#d4af37] font-semibold uppercase tracking-wider">
                Reading Strategy Mastered:{' '}
              </strong>
              {currentTask.readingStrategy}
            </div>

            <button
              onClick={() => {
                sound.playMonocleClick();
                onNextTaskOrPage();
              }}
              className="w-full py-3 bg-[#d4af37] hover:bg-[#b8952d] text-[#0a0502] font-sans font-extrabold uppercase tracking-widest rounded-lg text-sm shadow-lg shadow-[#d4af37]/25 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
            >
              <span>
                {taskIndex < level.tasks.length - 1
                  ? `Proceed to Task 2: ${level.tasks[1].skill}`
                  : `Claim Chrono-Page: ${level.chronoPageName}`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Real-time Hint / Feedback Message Area */}
      {evaluationResult && !evaluationResult.isCorrect && !isTaskComplete && (
        <div className="mt-4 p-3.5 bg-[#2a1010] border border-rose-800/60 rounded-lg text-rose-200 text-xs sm:text-sm animate-shake">
          <div className="flex items-center gap-1.5 font-bold font-sans uppercase tracking-wider text-rose-300 mb-1">
            <HelpCircle className="w-4 h-4 text-rose-400" />
            <span>Eldred's Feedback & Guidance:</span>
          </div>
          <p className="italic font-serif mb-2 text-sm">"{evaluationResult.feedback}"</p>
          {evaluationResult.hint && (
            <div className="p-2.5 bg-[#0a0502] border border-[#3a2a1a] rounded text-xs font-serif text-[#d4af37]">
              <strong className="font-sans uppercase tracking-wider">Hint:</strong> {evaluationResult.hint}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
