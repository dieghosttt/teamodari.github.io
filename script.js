const reasons = [
    "Por tu sonrisa.",
    "Porque siempre me apoyas.",
    "Porque eres única.",
    "Porque nunca había conocido a alguien como tú.",
    "Por hacerme feliz.",
    "Por tu humor.",
    "Por tu apoyo.",
    "Por tu belleza.",
    "Por hacerme reír.",
    "Por tu paciencia.",
    "Por tu amor.",
    "Por tu honestidad.",
    "Por tu compañía.",
    "Por tu forma de ser.",
    "Por cuidarme.",
    "Por escucharme.",
    "Por entenderme.",
    "Por hacerme sentir amado.",
    "Por motivarme.",
    "Por hacerme sentir seguro.",
    "Por hacerme sentir feliz.",
    "Por completarme.",
    "Por hacerme sentir especial.",
    "Por hacerme sentir único.",
    "Por hacerme sentir querido.",
    "Por hacerme sentir importante.",
    "Por valorarme.",
    "Por escucharme siempre.",
    "Por comprenderme.",
    "Por apoyarme.",
    "Por ser mi felicidad.",
    "Por ser mi amor.",
    "Por ser mi todo.",
    "Por ser mi inspiración.",
    "Por ser lo que siempre soñé.",
    "Por creer siempre en mi",
    "Por no dejarme solito",
    "Por siempre estar a mi lado",
    "Por amarme",
    "Por ayudarme a ser mejor persona aunque no te des cuenta"
];

let currentReasonIndex = 0;
const reasonText = document.getElementById('reason-text');
const showReasonBtn = document.getElementById('show-reason-btn');
const resetBtn = document.getElementById('reset-btn');
const backgroundMusic = document.getElementById('background-music');
const counter = document.getElementById('counter');

showReasonBtn.addEventListener('click', () => {
    if (currentReasonIndex < reasons.length) {
        reasonText.style.opacity = 0;
        setTimeout(() => {
            reasonText.textContent = reasons[currentReasonIndex];
            reasonText.style.opacity = 1;
            currentReasonIndex++;
            counter.textContent = `Razón ${currentReasonIndex} de ${reasons.length}`;
        }, 300);
    } else {
        reasonText.textContent = "Esas solo son algunas de tantas razones por las que te amo, mi princesa 💗";
        showReasonBtn.textContent = "Te amo mi princesa hermosa";
        showReasonBtn.disabled = true;
        resetBtn.classList.remove('hidden');
        createConfetti();
    }
    createHearts(5);
});

resetBtn.addEventListener('click', () => {
    currentReasonIndex = 0;
    reasonText.textContent = "Hecho con mucho amor por Diego <3";
    showReasonBtn.textContent = "Ver razón";
    showReasonBtn.disabled = false;
    resetBtn.classList.add('hidden');
    counter.textContent = `Razón 0 de ${reasons.length}`;
});

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💗';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 2 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

function createConfetti() {
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

document.addEventListener('click', (event) => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }
    createHearts(5); // Crea un corazón cada vez que se hace clic
});