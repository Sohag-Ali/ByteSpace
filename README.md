# 🚀 ByteSpace - Modern E-Learning & Digital Course Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ByteSpace%20on%20Vercel-003BE2?style=for-the-badge&logo=vercel&logoColor=white)](https://bytespace-lilac.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-e70488?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**ByteSpace** is a high-performance, visually stunning e-learning platform that empowers learners to unlock their digital potential and provides creators a space to share expert-guided courses. Built with Next.js 16 App Router, React 19, Tailwind CSS v4, and Framer Motion, ByteSpace offers a seamless, interactive user experience with responsive design across desktop, tablet, and mobile devices.

🌐 **Live Website:** [https://bytespace-lilac.vercel.app/](https://bytespace-lilac.vercel.app/)

---

## ✨ Features

- 🎨 **Modern & Vibrant Design:** Unique grid-pattern backgrounds, sleek glassmorphism floating cards, bold color accents (`#003BE2` vibrant blue & `#CBFC01` electric lime).
- ⚡ **Next.js 16 App Router:** Server-side rendering, optimized dynamic metadata titles (`ByteSpace | Page Name`), and lightning-fast page transitions.
- 📱 **100% Fully Responsive Layout:** Pixel-perfect user experience optimized for both mobile viewports and large desktop screens without compromise.
- 🎓 **Interactive Course Directory:** Search, explore, and view detailed course breakdowns with creator credentials and student ratings.
- 👥 **Creator Platform:** Showcase top course creators with follower stats, course counts, and enrollment highlights.
- ✨ **Fluid Micro-Animations:** Ambient background shapes, floating badges, and interactive hover effects powered by Framer Motion.
- 🔒 **Authentication Interfaces:** Modern, user-friendly Sign In and Registration pages.
- 🚫 **Custom 404 Error Page:** A tailored 404 Not Found experience matching ByteSpace's signature grid background and theme.

---

## 🛠️ Tech Stack & Tools

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linter & Formatter:** [Biome](https://biomejs.dev/)
- **Deployment Platform:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
bytespace/
├── public/                  # Static assets (logos, icons, shapes, hero visuals)
├── src/
│   ├── app/                 # Next.js App Router pages & dynamic layouts
│   │   ├── courses/         # Course directory & dynamic course details [id]
│   │   ├── creators/        # Creators showcase page
│   │   ├── login/           # Authentication Sign-In page
│   │   ├── register/        # Account registration page
│   │   ├── not-found.tsx    # Custom 404 Not Found page
│   │   ├── layout.tsx       # Root layout with dynamic metadata template
│   │   └── page.tsx         # Home page entry
│   ├── components/          # Reusable UI component modules
│   │   ├── auth/            # Authentication forms & UI
│   │   ├── common/          # Common UI components (Logo, etc.)
│   │   ├── courses/         # Course cards & grid layouts
│   │   ├── creators/        # Creator cards & CTA blocks
│   │   ├── home/            # Home page hero, features, & stats sections
│   │   ├── layout/          # Dynamic Navbar & Footer
│   │   └── ui/              # Primitive buttons & inputs
│   └── lib/                 # Utility functions & helpers
├── package.json             # Project dependencies and scripts
├── next.config.ts           # Next.js configuration
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run ByteSpace locally on your machine:

### Prerequisites

Ensure you have **Node.js 18+** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/Sohag-Ali/ByteSpace.git
cd bytespace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app live locally.

---

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server after building:

```bash
npm start
```

---

## 🎨 Code Quality & Formatting

ByteSpace uses **Biome** for fast linting and code formatting:

```bash
# Check code quality
npm run lint

# Format codebase
npm run format
```

---

## 🔗 Links

- **Live Deployment:** [ByteSpace on Vercel](https://bytespace-lilac.vercel.app/)
- **Repository:** [Sohag-Ali/ByteSpace](https://github.com/Sohag-Ali/ByteSpace)

---

Developed with ❤️ for **ByteSpace**.
