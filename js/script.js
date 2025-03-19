let count = 0;
let counter = document.querySelector(".counter");
let entry = document.querySelector(".entries");
document.querySelector(".zikr.one").classList.add("show");

function increment() {
  count = count + 1;
  counter.textContent = count;
}

function save() {
  entry.textContent = entry.textContent + count + " - ";
  count = 0;
  counter.textContent = count;
}

function reset() {
  count = 0;
  counter.textContent = count;
  entry.textContent = null;
}
