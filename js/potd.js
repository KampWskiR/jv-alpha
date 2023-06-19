const textElement = document.getElementById('rainbow');
const text = textElement.innerText;
textElement.innerHTML = '';
for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.innerText = text[i];
  span.style.animationDelay = `${i * 0.1}s`;
  span.classList.add('rainbow-animation');
  textElement.appendChild(span);
}