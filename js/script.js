function runTypingEffect() {
    const text = 'I am Sai Sriya';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;//(in ms)
    typeText(text,typingElement,typingDelay)
}
function typeText(text, typingElement,delay) {
    for (let i = 0; i < text.length; i++){
        setTimeout(() => { 
            typingElement.textContent += text.charAt(i);
        },delay*i)
    }
}
document.addEventListener('DOMContentLoaded', runTypingEffect);
