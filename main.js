const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseOutput = document.getElementById("surpriseOutput");

const surprises = [
  "You found the secret button. Curiosity stats: +10.",
  "Fun fact: CSS is basically witchcraft with brackets.",
  "Today’s mission: ship something small and real.",
  "You’re building a homepage. The homepage is building you back."
];

function getRandomItem(items) {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

if (surpriseBtn && surpriseOutput) {
  surpriseBtn.addEventListener("click", () => {
    surpriseOutput.textContent = getRandomItem(surprises);
  });
}
