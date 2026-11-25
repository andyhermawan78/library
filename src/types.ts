export type SkillType = 'SKIMMING' | 'SCANNING' | 'SKIM & SCAN (FINAL BOSS)';
export type DifficultyType = 'EASY' | 'MEDIUM' | 'HARD' | 'FINAL BOSS';

export interface TaskData {
  id: string;
  skill: SkillType;
  taskTitle: string;
  question: string;
  targetAnswer: string;
  acceptableKeywords: string[];
  options: string[];
  correctOptionIndex: number;
  hint1: string;
  hint2: string;
  celebrationQuote: string;
  readingStrategy: string;
}

export interface LevelData {
  id: number;
  title: string;
  subtitle: string;
  difficulty: DifficultyType;
  era: string;
  themeStyle: 'prehistoric' | 'egyptian' | 'roman' | 'viking' | 'medieval' | 'renaissance' | 'victorian' | 'ww1' | 'apollo' | 'vortex';
  problemDescription: string;
  documentType: string;
  documentTitle: string;
  documentText: string;
  tasks: TaskData[];
  chronoPageName: string;
  chronoPageDescription: string;
  chronoPageIcon: string;
  trivia: {
    title: string;
    fact: string;
    readingTip: string;
  };
  timerSeconds: number;
}

export interface Message {
  id: string;
  sender: 'eldred' | 'player' | 'system';
  text: string;
  isHint?: boolean;
  isVictory?: boolean;
  isPageAcquired?: boolean;
  pageName?: string;
  timestamp: string;
}

export interface GameState {
  currentLevelIndex: number;
  currentTaskIndex: number;
  collectedPages: string[];
  score: number;
  timeRemaining: number;
  isTimerRunning: boolean;
  status: 'intro' | 'playing' | 'page_awarded' | 'victory' | 'game_over';
  currentAttempt: number; // 1 or 2
  inputMode: 'free_text' | 'multiple_choice';
  soundEnabled: boolean;
  highlightSkim: boolean;
  highlightScan: boolean;
  searchTerm: string;
}
