document.addEventListener("DOMContentLoaded", () => {
    // 1. Data Structure: Array of pairs (Term and Concept)
    const cardData = [
        { id: 1, text: "Stack" }, { id: 1, text: "LIFO" },
        { id: 2, text: "Queue" }, { id: 2, text: "FIFO" },
        { id: 3, text: "Array" }, { id: 3, text: "Contiguous Memory" },
        { id: 4, text: "Linked List" }, { id: 4, text: "Nodes & Pointers" },
        { id: 5, text: "Hash Table" }, { id: 5, text: "Key-Value Pairs" },
        { id: 6, text: "Binary Tree" }, { id: 6, text: "Root, Left, Right" },
        { id: 7, text: "Graph" }, { id: 7, text: "Vertices & Edges" },
        { id: 8, text: "Recursion" }, { id: 8, text: "Base Case" }
    ];

    // 2. State Variables
    let cards = [];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let attempts = 0;
    let matchedPairs = 0;
    
    let timerInterval;
    let secondsElapsed = 0;
    let timerStarted = false;

    // 3. DOM Elements
    const grid = document.getElementById("memory-grid");
    const attemptsDisplay = document.getElementById("attempts");
    const timeDisplay = document.getElementById("time");
    const matchesDisplay = document.getElementById("matches");
    const gameOverPanel = document.getElementById("game-over-panel");
    const restartBtn = document.getElementById("restart-btn");

    // 4. Initialization
    function initGame() {
        // Reset State
        grid.innerHTML = "";
        cards = shuffle([...cardData]);
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
        attempts = 0;
        matchedPairs = 0;
        secondsElapsed = 0;
        timerStarted = false;
        clearInterval(timerInterval);
        
        // Reset UI
        attemptsDisplay.innerText = attempts;
        matchesDisplay.innerText = matchedPairs;
        timeDisplay.innerText = "00:00";
        gameOverPanel.classList.add("hidden");

        // Generate Board
        cards.forEach((data) => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.dataset.id = data.id;

            cardElement.innerHTML = `
                <div class="card-face card-front"></div>
                <div class="card-face card-back">${data.text}</div>
            `;

            cardElement.addEventListener("click", flipCard);
            grid.appendChild(cardElement);
        });
    }

    // 5. Core Game Logic
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }

        this.classList.add("flipped");

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        attempts++;
        attemptsDisplay.innerText = attempts;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.id === secondCard.dataset.id;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        
        matchedPairs++;
        matchesDisplay.innerText = matchedPairs;
        resetBoard();

        if (matchedPairs === cardData.length / 2) {
            endGame();
        }
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetBoard();
        }, 1200); // 1.2s delay forces the user to memorize the layout
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    // 6. Utility Functions
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            secondsElapsed++;
            const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
            const seconds = String(secondsElapsed % 60).padStart(2, "0");
            timeDisplay.innerText = `${minutes}:${seconds}`;
        }, 1000);
    }

    function endGame() {
        clearInterval(timerInterval);
        gameOverPanel.classList.remove("hidden");
        saveProgress();
    }

    // 7. Data Persistence (Requirement: LocalStorage)
    function saveProgress() {
        const moduleData = {
            completed: true,
            attempts: attempts,
            timeInSeconds: secondsElapsed,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem("module_memory_stats", JSON.stringify(moduleData));
    }

    // 8. Event Listeners
    restartBtn.addEventListener("click", initGame);

    // Bootstrap
    initGame();
});