let words = [];
let currentIndex = 0;
let knownCount = 0;

export function initFlashcards(wordList) {
  words = wordList;
  currentIndex = 0;
  knownCount = 0;
  showCard();
}

export function showCard() {
  const card = document.getElementById('flashcard');
  const front = card.querySelector('.front');
  const back = card.querySelector('.back');

  if (currentIndex >= words.length) {
    endSession();
    return;
  }

  const word = words[currentIndex];
  front.textContent = word.english;
  back.textContent = word.ukrainian;

  // Скидаємо перевертання
  card.classList.remove('flipped');
}

export function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

export function markAsKnown() {
  if (words[currentIndex]) {
    words[currentIndex].known = true;
    knownCount++;
    nextCard();
  }
}

export function nextCard() {
  currentIndex++;
  setTimeout(showCard, 600); // після анімації
}

export function updateProgress() {
  const progress = Math.round((knownCount / words.length) * 100);
  document.getElementById('progress-bar').style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `${knownCount} / ${words.length}`;
}

function endSession() {
  document.querySelector('.buttons').style.display = 'none';
  document.getElementById('restart-btn').style.display = 'block';
  document.getElementById('flashcard').innerHTML = '<div class="front">Вітаю! Вивчено все!</div>';
}