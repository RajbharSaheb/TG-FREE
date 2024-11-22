// Typing effect
const typingText = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");
let typingIndex = 0;
const typingSpeed = 50;

function type() {
  if (typingIndex < typingText.textContent.length) {
    typingText.textContent = typingText.textContent.substring(0, typingIndex + 1);
    typingIndex++;
    setTimeout(type, typingSpeed);
  }
}

type();

// Shutdown button effect
const shutdownBtn = document.getElementById("shutdown-btn");

shutdownBtn.addEventListener("click", () => {
  alert("Don't worry, it's just a prank!");
});
