import sqlChallenges from '../data/sql-queries.js';

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    let score = 0;

    const queryDisplay = document.getElementById('query-display');
    const queryTitle = document.getElementById('query-title');
    const submitBtn = document.getElementById('submit-btn');
    const feedbackArea = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const scoreDisplay = document.getElementById('score');
    const indexDisplay = document.getElementById('current-index');

    function loadChallenge() {
        const challenge = sqlChallenges[currentIndex];
        queryTitle.innerText = challenge.title;
        indexDisplay.innerText = currentIndex + 1;
        feedbackArea.classList.add('hidden');
        submitBtn.disabled = false;

        // Split template by '___' to insert inputs
        const parts = challenge.template.split('___');
        queryDisplay.innerHTML = '';
        
        parts.forEach((part, i) => {
            queryDisplay.appendChild(document.createTextNode(part));
            if (i < parts.length - 1) {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'sql-input';
                input.dataset.index = i;
                input.autocomplete = "off";
                queryDisplay.appendChild(input);
            }
        });
    }

    function checkAnswer() {
        const challenge = sqlChallenges[currentIndex];
        const inputs = document.querySelectorAll('.sql-input');
        let allCorrect = true;

        inputs.forEach((input, i) => {
            const userVal = input.value.trim().toUpperCase();
            const correctVal = challenge.blanks[i].toUpperCase();

            if (userVal === correctVal) {
                input.classList.add('input-correct');
                input.classList.remove('input-error');
            } else {
                input.classList.add('input-error');
                input.classList.remove('input-correct');
                allCorrect = false;
            }
        });

        submitBtn.disabled = true;
        feedbackArea.classList.remove('hidden');
        
        const msg = document.getElementById('feedback-message');
        const expl = document.getElementById('explanation');

        if (allCorrect) {
            score++;
            scoreDisplay.innerText = score;
            msg.innerText = "Correct! Query valid.";
            msg.style.color = "#27ae60";
        } else {
            msg.innerText = "Syntax Error or Logic Mismatch.";
            msg.style.color = "#c0392b";
        }
        expl.innerText = challenge.explanation;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < sqlChallenges.length) {
            loadChallenge();
        } else {
            document.querySelector('.query-card').classList.add('hidden');
            document.getElementById('game-over').classList.remove('hidden');
            saveProgress();
        }
    });

    function saveProgress() {
        localStorage.setItem('module_sql_stats', JSON.stringify({
            completed: true,
            score: score,
            total: sqlChallenges.length,
            timestamp: new Date().toISOString()
        }));
    }

    submitBtn.addEventListener('click', checkAnswer);
    loadChallenge();
});