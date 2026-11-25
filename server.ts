import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Eldred AI evaluation endpoint
app.post('/api/eldred/evaluate', async (req, res) => {
  try {
    const {
      levelId,
      levelTitle,
      taskType, // 'skimming' | 'scanning' | 'boss_combined'
      question,
      userAnswer,
      expectedAnswer,
      keyKeywords,
      attemptNumber, // 1 or 2
      levelText,
    } = req.body;

    const ai = getAi();
    if (!ai) {
      // Return null to let client utilize its local smart evaluator
      return res.json({ useFallback: true });
    }

    const systemPrompt = `You are "Eldred," the ghostly, slightly sarcastic, witty, and mildly impatient Chronos-Librarian from "The Chronos Library Heist," an interactive Grade 10 English reading game.
Your job is to assess the student's answer for a ${taskType.toUpperCase()} task in Level ${levelId}: "${levelTitle}".

Task Focus:
- Skimming: Reading for the gist / central thesis / main idea. Look for core comprehension of the overall point.
- Scanning: Searching for specific facts, numbers, names, terms, or exact data.

Context Text:
${levelText?.slice(0, 1500) || ''}

Question Asked: "${question}"
Target / Expected Answer: "${expectedAnswer}"
Key Keywords expected: ${JSON.stringify(keyKeywords || [])}
Student's Answer: "${userAnswer}"
Attempt: ${attemptNumber || 1} of 2

Instructions:
1. Determine if the student's answer is logically CORRECT (true to the text and question) or INCORRECT.
   - For scanning: Must match the specific fact/number/name/detail closely (allow minor spelling or phrasing variations).
   - For skimming: Must capture the main idea/gist accurately even if phrased in their own words.
2. In character as Eldred (ghostly, witty, sarcastic, wearing a monocle):
   - If CORRECT: Offer a brief, clever compliment or quip praising their reading technique (mention skimming or scanning explicitly).
   - If INCORRECT (Attempt 1): Gently tease them in character, tell them clearly why it's not quite right, and give a helpful reading strategy hint pointing them where/how to look without giving the exact answer directly.
   - If INCORRECT (Attempt 2): Tease them affectionately ("Ah, by the lost scrolls of Alexandria..."), state the correct answer clearly, and explain the reading technique they missed.

Respond ONLY with valid JSON:
{
  "isCorrect": boolean,
  "feedback": "Eldred's in-character dialogue",
  "hint": "Strategy hint (or empty string if correct)",
  "skillTip": "Short 1-sentence tip on skimming or scanning technique"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: `Evaluate this Grade 10 student answer according to the system rules.`,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        temperature: 0.6,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({
      useFallback: false,
      isCorrect: !!parsed.isCorrect,
      feedback: parsed.feedback || '',
      hint: parsed.hint || '',
      skillTip: parsed.skillTip || '',
    });
  } catch (err: any) {
    console.error('Gemini evaluate error:', err);
    return res.json({ useFallback: true, error: err?.message });
  }
});

// Eldred direct banter / dialogue endpoint
app.post('/api/eldred/banter', async (req, res) => {
  try {
    const { userMessage, currentLevel, pagesCollected } = req.body;
    const ai = getAi();
    if (!ai) {
      return res.json({
        response: `*Eldred adjusts his spectral monocle.* "Hurry along, young scholar! We have Chrono-Pages to recover. Remember: skim for the big picture, scan for the needles in the haystack!"`,
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: userMessage || 'Hello Eldred',
      config: {
        systemInstruction: `You are Eldred, the ghostly, eccentric, sarcastic Chronos-Librarian from "The Chronos Library Heist." The player is currently on Level ${currentLevel} and has collected ${pagesCollected}/10 Chrono-Pages.
Respond in 1-3 sentences with witty, educational librarian humor, encouraging their skimming and scanning skills.`,
        temperature: 0.7,
      },
    });

    return res.json({ response: response.text || '' });
  } catch (err: any) {
    return res.json({
      response: `*Eldred glares through his monocle.* "The temporal static is thick! Focus on your reading skills!"`,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`The Chronos Library Heist running on http://localhost:${PORT}`);
  });
}

startServer();
