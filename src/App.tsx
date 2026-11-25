import React, { useState, useEffect } from 'react';
import { GAME_LEVELS } from './data/gameData';
import { LevelData, TaskData } from './types';
import { Header } from './components/Header';
import { EldredAvatar } from './components/EldredAvatar';
import { DocumentViewer } from './components/DocumentViewer';
import { TaskPanel } from './components/TaskPanel';
import { IntroScreen } from './components/IntroScreen';
import { ChronoPageModal } from './components/ChronoPageModal';
import { CodexModal } from './components/CodexModal';
import { TriviaModal } from './components/TriviaModal';
import { SkillGuideModal } from './components/SkillGuideModal';
import { VictoryScreen } from './components/VictoryScreen';
import { evaluateAnswer } from './utils/evaluator';
import { sound } from './utils/audio';

export default function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(0);
  const [collectedPages, setCollectedPages] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(90);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<
    'intro' | 'playing' | 'page_awarded' | 'victory'
  >('intro');
  const [currentAttempt, setCurrentAttempt] = useState<number>(0); // 0 = not tried, 1 = failed once
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [isTaskComplete, setIsTaskComplete] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    isCorrect: boolean;
    feedback: string;
    hint: string;
    skillTip: string;
  } | null>(null);

  // Eldred personality state
  const [eldredMood, setEldredMood] = useState<
    'witty' | 'impatient' | 'impressed' | 'teasing' | 'teaching'
  >('witty');
  const [eldredDialogue, setEldredDialogue] = useState<string>(
    `"Greetings, text-sleuth! The Chronos Nexus has fractured. Let us restore the first timeline!"`
  );

  // Modals state
  const [isCodexOpen, setIsCodexOpen] = useState<boolean>(false);
  const [isSkillGuideOpen, setIsSkillGuideOpen] = useState<boolean>(false);
  const [isTriviaOpen, setIsTriviaOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const currentLevel: LevelData = GAME_LEVELS[currentLevelIndex] || GAME_LEVELS[0];
  const currentTask: TaskData = currentLevel.tasks[currentTaskIndex] || currentLevel.tasks[0];

  // Initialize level timer when level starts or advances
  useEffect(() => {
    if (gameStatus === 'playing') {
      setTimeRemaining(currentLevel.timerSeconds);
      setIsTimerRunning(true);
      setIsTaskComplete(false);
      setEvaluationResult(null);
      setCurrentAttempt(0);

      // Set initial Eldred greeting for this level
      setEldredMood('teaching');
      setEldredDialogue(
        `"Welcome to Level ${currentLevel.id}: ${currentLevel.title}! Notice the ${currentLevel.documentType}. Your first mission is ${currentTask.skill}. Let's see your eyes in action!"`
      );
    }
  }, [currentLevelIndex, gameStatus]);

  // Countdown timer effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeRemaining > 0 && gameStatus === 'playing') {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time expired bonus warning
            setEldredMood('impatient');
            setEldredDialogue(
              `*Eldred taps his spectral foot.* "Time is stretching thin! Don't dawdle on every syllable—trust your skimming and scanning!"`
            );
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeRemaining, gameStatus]);

  const handleStartGame = () => {
    setCurrentLevelIndex(0);
    setCurrentTaskIndex(0);
    setCollectedPages([]);
    setScore(0);
    setGameStatus('playing');
  };

  const handleAnswerSubmit = async (userAnswer: string) => {
    setIsEvaluating(true);
    const attemptNumber = currentAttempt + 1;

    try {
      const result = await evaluateAnswer(
        currentLevel,
        currentTask,
        userAnswer,
        attemptNumber
      );

      setEvaluationResult(result);

      if (result.isCorrect) {
        sound.playCorrect();
        setIsTaskComplete(true);
        setEldredMood('impressed');
        setEldredDialogue(result.feedback);

        // Award points based on speed and attempt
        const speedBonus = Math.max(0, Math.floor(timeRemaining * 1.5));
        const attemptPoints = attemptNumber === 1 ? 100 : 60;
        setScore((prev) => prev + attemptPoints + speedBonus);
      } else {
        sound.playIncorrect();
        if (attemptNumber >= 2) {
          // Max attempts reached: reveal answer and let student move forward to learn
          setIsTaskComplete(true);
          setEldredMood('teasing');
          setEldredDialogue(
            `*Eldred sighs theatrically.* "Alas! The correct answer is: '${currentTask.targetAnswer}'. Study how the keywords connect, and remember this for the next era!"`
          );
          setScore((prev) => prev + 30);
        } else {
          // Allow attempt 2
          setCurrentAttempt(1);
          setEldredMood('teasing');
          setEldredDialogue(result.feedback);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleNextTaskOrPage = () => {
    if (currentTaskIndex < currentLevel.tasks.length - 1) {
      // Proceed to Task 2 in the same level
      const nextTaskIdx = currentTaskIndex + 1;
      setCurrentTaskIndex(nextTaskIdx);
      setIsTaskComplete(false);
      setEvaluationResult(null);
      setCurrentAttempt(0);

      const nextTask = currentLevel.tasks[nextTaskIdx];
      setEldredMood('witty');
      setEldredDialogue(
        `"Now, switch mental gears! You just did ${currentTask.skill}, so now prepare for Task 2: ${nextTask.skill}!"`
      );
    } else {
      // Level completed! Award Chrono-Page
      sound.playPageAcquired();
      const updatedPages = [...collectedPages, currentLevel.chronoPageName];
      setCollectedPages(updatedPages);
      setGameStatus('page_awarded');
    }
  };

  const handleAdvanceLevel = () => {
    if (currentLevelIndex >= GAME_LEVELS.length - 1) {
      // Completed all 10 levels! Enter Victory Epilogue
      setGameStatus('victory');
    } else {
      // Advance to next level
      setCurrentLevelIndex((prev) => prev + 1);
      setCurrentTaskIndex(0);
      setGameStatus('playing');
    }
  };

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    sound.setEnabled(nextVal);
  };

  return (
    <div className="min-h-screen bg-[#0a0502] text-[#e0d6cc] font-sans selection:bg-[#d4af37] selection:text-[#0a0502] flex flex-col justify-between">
      {/* Game Header (visible during play) */}
      {gameStatus !== 'intro' && gameStatus !== 'victory' && (
        <Header
          currentLevel={currentLevel}
          collectedPages={collectedPages}
          score={score}
          timeRemaining={timeRemaining}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onOpenCodex={() => setIsCodexOpen(true)}
          onOpenSkillGuide={() => setIsSkillGuideOpen(true)}
          onOpenTrivia={() => setIsTriviaOpen(true)}
          onRestart={handleStartGame}
        />
      )}

      {/* Main Game Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5">
        {gameStatus === 'intro' && (
          <IntroScreen onStartGame={handleStartGame} />
        )}

        {gameStatus === 'playing' && (
          <div className="space-y-4">
            {/* Holographic Eldred Dialogue Bar */}
            <EldredAvatar
              mood={eldredMood}
              currentDialogue={eldredDialogue}
              isEvaluating={isEvaluating}
              currentLevel={currentLevel.id}
              pagesCollected={collectedPages.length}
            />

            {/* Split Screen Layout: Left Document, Right Task */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Document Pane (7 cols on desktop) */}
              <div className="lg:col-span-7 flex">
                <DocumentViewer
                  level={currentLevel}
                  activeSkill={currentTask.skill}
                />
              </div>

              {/* Challenge & Input Pane (5 cols on desktop) */}
              <div className="lg:col-span-5 flex">
                <TaskPanel
                  level={currentLevel}
                  taskIndex={currentTaskIndex}
                  onAnswerSubmit={handleAnswerSubmit}
                  isEvaluating={isEvaluating}
                  evaluationResult={evaluationResult}
                  attemptCount={currentAttempt}
                  onNextTaskOrPage={handleNextTaskOrPage}
                  isTaskComplete={isTaskComplete}
                />
              </div>
            </div>
          </div>
        )}

        {gameStatus === 'victory' && (
          <VictoryScreen
            score={score}
            totalTimeElapsed={900 - timeRemaining}
            onRestart={handleStartGame}
            onOpenCodex={() => setIsCodexOpen(true)}
          />
        )}
      </main>

      {/* Modals */}
      {gameStatus === 'page_awarded' && (
        <ChronoPageModal
          level={currentLevel}
          totalCollected={collectedPages.length}
          onContinue={handleAdvanceLevel}
        />
      )}

      {isCodexOpen && (
        <CodexModal
          collectedPages={collectedPages}
          onClose={() => setIsCodexOpen(false)}
        />
      )}

      {isSkillGuideOpen && (
        <SkillGuideModal onClose={() => setIsSkillGuideOpen(false)} />
      )}

      {isTriviaOpen && (
        <TriviaModal
          level={currentLevel}
          onClose={() => setIsTriviaOpen(false)}
        />
      )}

      {/* Subtle Elegant Footer */}
      <footer className="w-full py-3.5 px-4 text-center text-xs font-sans uppercase tracking-widest text-[#8e8271] border-t border-[#3a2a1a] bg-[#0a0502]">
        <p>
          The Chronos Library Heist • Grade 10 English Language Arts • Skimming & Scanning Mastery • Powered by Google AI Studio
        </p>
      </footer>
    </div>
  );
}
