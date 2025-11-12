const WORDS_KEY = 'flashcard_words';
const PROGRESS_KEY = 'flashcard_progress';

export async function loadWords() {
  const response = await fetch('../data/words.json');
  const words = await response.json();
  return words.map(w => ({ ...w, known: false }));
}

export function loadProgress() {
  return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
}

export function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function saveWords(words) {
  localStorage.setItem(WORDS_KEY, JSON.stringify(words));
}