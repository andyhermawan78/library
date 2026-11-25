import { LevelData, TaskData } from '../types';

export interface EvaluationResult {
  isCorrect: boolean;
  feedback: string;
  hint: string;
  skillTip: string;
}

export async function evaluateAnswer(
  level: LevelData,
  task: TaskData,
  userAnswer: string,
  attempt: number
): Promise<EvaluationResult> {
  const normalizedUser = userAnswer.trim().toLowerCase();
  
  // 1. Check local match against acceptable keywords
  const matchedKeyword = task.acceptableKeywords.some((kw) =>
    normalizedUser.includes(kw.toLowerCase()) || kw.toLowerCase().includes(normalizedUser)
  );

  // If user matched closely locally or picked option, try API for richer Eldred dialogue
  try {
    const res = await fetch('/api/eldred/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        levelId: level.id,
        levelTitle: level.title,
        taskType: task.skill.toLowerCase(),
        question: task.question,
        userAnswer: userAnswer,
        expectedAnswer: task.targetAnswer,
        keyKeywords: task.acceptableKeywords,
        attemptNumber: attempt,
        levelText: level.documentText,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (!data.useFallback && typeof data.isCorrect === 'boolean') {
        return {
          isCorrect: data.isCorrect,
          feedback: data.feedback || (data.isCorrect ? task.celebrationQuote : getFallbackTease(task.skill, attempt)),
          hint: data.hint || (attempt === 1 ? task.hint1 : task.hint2),
          skillTip: data.skillTip || task.readingStrategy,
        };
      }
    }
  } catch (e) {
    // network issue, use local fallback
  }

  // 2. Intelligent local fallback evaluation
  const isCorrect = matchedKeyword || isFuzzyMatch(normalizedUser, task.targetAnswer.toLowerCase());

  if (isCorrect) {
    return {
      isCorrect: true,
      feedback: task.celebrationQuote,
      hint: '',
      skillTip: task.readingStrategy,
    };
  } else {
    const hint = attempt === 1 ? task.hint1 : task.hint2;
    const tease = getFallbackTease(task.skill, attempt);
    return {
      isCorrect: false,
      feedback: tease,
      hint: hint,
      skillTip: task.readingStrategy,
    };
  }
}

function isFuzzyMatch(userStr: string, targetStr: string): boolean {
  if (!userStr || !targetStr) return false;
  // strip punctuation
  const cleanUser = userStr.replace(/[^a-z0-9 ]/g, ' ').trim();
  const cleanTarget = targetStr.replace(/[^a-z0-9 ]/g, ' ').trim();
  
  if (cleanTarget.includes(cleanUser) && cleanUser.length >= 4) return true;
  if (cleanUser.includes(cleanTarget)) return true;

  // Word overlap
  const userWords = cleanUser.split(/\s+/).filter(w => w.length > 3);
  const targetWords = cleanTarget.split(/\s+/).filter(w => w.length > 3);
  
  let matches = 0;
  for (const w of userWords) {
    if (targetWords.includes(w)) matches++;
  }

  return userWords.length > 0 && matches / userWords.length >= 0.5;
}

function getFallbackTease(skill: string, attempt: number): string {
  const teases1 = [
    `*Eldred adjusts his glowing monocle with a dramatic sigh.* "Focus, young Sleuth! That is not what the text states. Remember your ${skill.toLowerCase()} strategy and look again!"`,
    `*Eldred floats higher, shaking his translucent head.* "Close, perhaps in an alternate multiverse, but not in this timeline! Try once more."`,
    `*Eldred taps his spectral cane against the bookshelf.* "Patience, scholar! Don't guess wildly—let the text guide your eyes."`,
  ];

  const teases2 = [
    `*Eldred sighs theatrically, polishing his monocle.* "Alas! The temporal static got the better of you on this attempt. Let me illuminate the exact passage for your education!"`,
    `*Eldred chuckles softly.* "By the lost library of Alexandria, reading takes practice! Here is the truth of this timeline."`,
  ];

  const list = attempt === 1 ? teases1 : teases2;
  return list[Math.floor(Math.random() * list.length)];
}
