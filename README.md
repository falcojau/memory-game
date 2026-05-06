# Memory Game

A classic color-matching memory game built as a frontend exercise.

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
