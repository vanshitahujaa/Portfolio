# ⚡ Vanshit Ahuja - Interactive Portfolio v2

> **"I stopped applying. I built a system instead."**

A premium, dual-mode portfolio built with **React 19**, **TypeScript**, and **Framer Motion**. It features a "Dark Luxury" aesthetic, real-time GitHub telemetry, and a fully functional CLI for engineers.

[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)

## ✨ Key Features

### 🖥️ Dual Mode Engine
- **Visual Mode**: A high-end glassmorphism UI with smooth animations, geared towards recruiters and non-technical visitors.
- **CLI Mode**: A fully interactive terminal for engineers. Use commands like `ls`, `cat`, and `sudo` to navigate.
- **Switching**: Press `1-6` or click the toggle to switch contexts instantly.

### 🎨 Visual Polish
- **Custom Physics Cursor**: A lag-free, custom-rendered cursor with spring physics and magnetic interactions.
- **Dark Mode Only**: Enforced "Dark Luxury" theme for consistent aesthetics.
- **Glassmorphism**: Premium frosted glass effects on cards and overlays.

### 💼 Founder Mode
A dedicated view (`Mode 3`) showcasing startup experience, business metrics, and freelance packages. Focuses on ROI and shipping products.

### 🚀 Interactive Elements
- **Live GitHub Stats**: Fetches real-time project counts and top languages via GitHub API.
- **Testimonials Carousel**: Auto-rotating social proof with premium styling.
- **Hidden Easter Eggs**: Because why not? (See below)

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animation**: Framer Motion (Spring physics, AnimatePresence)
- **Icons**: Lucide React
- **3D Elements**: Custom CSS 3D transforms (optimized for performance)

## 🥚 Easter Eggs & Cheatsheet

Try these commands in the **CLI** (Home):

| Command | Description |
|---------|-------------|
| `help --secret` | Unlocks the full list of hidden commands |
| `sudo hire-me` | Triggers the "Hiring Mode" (Best way to contact) |
| `matrix` | Enters standard hacker mode |
| `party` | 🎉 Confetti explosion |
| `coffee` | For when you need a break |
| `github` | Links to this source code |

**Keyboard Shortcuts:**
- `1-6`: Switch Modes (Home, About, Founder, etc.)
- `Esc`: Go Back / Close Modals
- `?`: Toggle Keyboard Hints

## 📦 Installation

This project is built with `npm` and `vite`.

```bash
# Clone the repository
git clone https://github.com/vanshitahujaa/Portfolio.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📄 License
MIT License. Feel free to fork and customize!

---
*Built with ❤️ (and caffeine) by Vanshit Ahuja.*
