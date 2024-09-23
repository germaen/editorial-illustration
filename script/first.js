let dnaSequence = 'ATCGATCGGTACA';
let typedText = '';
let index = 0;
let scrollSpeed = 1;
const maxLength = 1000; 

function startTyping() {

const typeContainer = document.getElementById('typeout');
console.log(typeContainer);

const interval = setInterval(() => {
console.log(interval);

const span = document.createElement('span');

    span.textContent = dnaSequence[index];
    span.addEventListener('mouseover', () => {
            span.textContent = '?';
        });

        typeContainer.appendChild(span);

        typedText += dnaSequence[index];
        index++;
        
        if (index >= dnaSequence.length) {
            index = 0;
        }
        if (typedText.length >= maxLength) {
            clearInterval(interval);
        }

        if (typeContainer.scrollHeight > window.innerHeight){
            window.scrollBy(0, scrollSpeed);
        }
    }, 10);
}

window.onload = startTyping;
