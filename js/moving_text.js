// Wrap every letter in a span
var textWrapper = document.querySelector(".ml6 .letters");

var skills = [
  "Coder 💻",
  "Web Developer🌐",
  "TechGeek 👨‍💻📱",
  "Crypto Trader 📈💸",
  "Photographer 📸",
  "Traveler 🏍️🚗",
  "Designer🎨🖌️",
  "Music Lover 🎶🎧",
];

var counter = 0;
var inst = setInterval(change, 1300);

function change() {
  textWrapper.innerText = skills[counter];
  counter++;
  if (counter >= skills.length) {
    counter = 0;
  }
}
