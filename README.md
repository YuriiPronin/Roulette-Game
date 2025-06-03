# 🎰 Roulette Game — Test Task

## 📌 Project Overview
This project replicates the roulette mechanic from [clash.gg/double](https://clash.gg/double).  
It features automatic spins every 60 seconds, a smoothly animated wheel, and a live results counter for the last 100 spins.

## 🧑‍💻 Tech Stack
- **Next.js 14 App Router**
- **Tailwind CSS** — for styling
- **TypeScript** — with type safety
- **js-cookie** — for client-side persistence
- **SVG assets** — for crisp resolution
- **Custom logic** — no external animation libraries

## ⚙️ Functionality
- 🔁 Spins every 60 seconds, simulating a real-time roulette experience.
- 🎯 Result is chosen randomly on each spin.
- 🍪 Cookies store results and feed the “LAST 100” header block (with FIFO logic).
- 🎨 Fully animated wheel with gradient edge fade.
- 🧪 Static mock data for user bets (red, green, grey, joker).
- 💬 Middle status bar implemented visually from Figma; logic left as placeholder due to lack of specs.

## 🧠 Design & Logic Notes
- The “LAST 100” block dynamically updates from cookies, considering only the last 100 results.
- Components are modular, reusable, and decoupled for maintainability.
- ❌ No backend/API — all user data is mocked in `/mocks/`
- ❌ No adaptive layout — not specified in design or requirements.
- ✅ Components are ready for future interactivity (e.g., betting, buttons) if needed.

## 🚀 How to Run Locally
npm install
npm run dev


📦 Live Demo & Repo
- Demo: [https://roulette-game-sable.vercel.app/]
- Repo: [https://github.com/YuriiPronin/Roulette-Game]