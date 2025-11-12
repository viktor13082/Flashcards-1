import { flipCard, markAsKnown, nextCard, updateProgress } from './flashcards.js';

export function setupEventListeners() {
  document.getElementById('flashcard').addEventListener('click', flipCard);
  document.getElementById('know-btn').addEventListener('click', () => {
    markAsKnown();
    updateProgress();
  });
  document.getElementById('repeat-btn').addEventListener('click', () => {
    nextCard();
    updateProgress();
  });
  document.getElementById('restart-btn').addEventListener('click', () => {
    location.reload();
  });
}