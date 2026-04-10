# Interview Arcade

> A gamified technical interview prep platform featuring 10 interactive mini-games covering DSA, SQL, OOP, aptitude, and more. Built with vanilla HTML, CSS, and JavaScript. No backend, no setup — just open and play.

---

## What is this?

Interview Arcade is an incomplete project built for a hackathon event. Your job as a participant is to **fork this repo, implement one or more modules, and submit a pull request.**

Each module is a self-contained mini-game that helps students practice a specific interview topic — playfully.

---

## Tech Stack

- HTML, CSS, JavaScript (vanilla only)
- localStorage for data persistence
- No frameworks, no backend, no external dependencies

---

## Project Structure

```
Interview Arcade/
├── index.html           # Homepage
├── modules.html         # Module listing page
├── dashboard.html       # Progress dashboard
├── pages/               # One HTML file per module
├── games/               # Game logic JS files
├── data/                # Static question/data files
├── scripts/             # Shared utilities (storage, main)
├── styles/              # CSS files
└── features.txt         # What each module should do
```

---

## Modules

| # | Module | Topic |
|---|--------|-------|
| 1 | Tic Tac Toe + OOP Quiz | OOP concepts |
| 2 | Memory Card Game | Technical terminology |
| 3 | Aptitude Quiz | Logical reasoning / MCQs |
| 4 | Resume Keyword Matcher | Job readiness |
| 5 | SQL Fill in the Blanks | SQL queries |
| 6 | Image Riddles | Visual problem solving |
| 7 | DSA Match the Following | Data structures & algorithms |
| 8 | Debug the Code | Code debugging |
| 9 | Feedback System | Platform feedback |
| 10 | Progress Dashboard | Score tracking |

---

## How to Participate

1. **Fork** this repository to your GitHub account
2. **Clone** your fork locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/Interview-Arcade.git
   ```
3. Open `features.txt` — read what your chosen module should do
4. Implement the module in the corresponding `pages/` and `games/` files
5. Test it by opening `index.html` directly in a browser
6. **Submit a Pull Request** to the original repo

---

## Rules

- Use only vanilla HTML, CSS, and JavaScript
- No backend or external database allowed
- Use `localStorage` if you need to persist data
- Each module must work independently
- Keep code clean and well-commented
- One PR per participant — mention which module you implemented

---

## PR Description Template

When submitting your pull request, include:

```
Module implemented: <name>
What it does: <one line>
Files changed: <list>
Tested in browser: Yes / No
```

---

## Running Locally

No server needed. Just open `index.html` in any browser.

```bash
# If you prefer a local server
npx serve .
# or
python -m http.server 8000
```

---

*Play. Learn. Crack Interviews.*
