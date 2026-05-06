# Memory Game

A classic color-matching memory game built as a frontend exercise.

<img width="498" height="561" alt="Memory Game Screenshot" src="https://github.com/user-attachments/assets/31eaf70e-4575-4670-9e07-f34d5dc4a1b0" />


## How it works

Flip cards to reveal their hidden color. Match all 15 pairs to win. The game tracks your moves and time, and saves your best score for the session.

## Features

- 15 color pairs shuffled randomly on every game
- Move counter and live timer
- Best score saved with **sessionStorage** (persists across resets within the same tab)
- Restart button to play again without losing your session record

## Tech stack

- **Vanilla JavaScript** — DOM manipulation, events, sessionStorage API
- **Sass** — styles compiled via Vite
- **Vite** — dev server and build tool
- **GitHub Actions** — automated deployment to GitHub Pages

## Live demo

[falcojau.github.io/memory-game](https://falcojau.github.io/memory-game/)
