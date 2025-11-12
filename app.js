import { loadWords } from './modules/dataManager.js';
import { initFlashcards, showCard, updateProgress } from './modules/flashcards.js';
import { setupEventListeners } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  const words = await loadWords();
  initFlashcards(words);
  setupEventListeners();
  updateProgress(); // початковий 0/10
});