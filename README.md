# BehindTheSceneGuy - Cinematic Portfolio

A high-end, immersive portfolio website designed for a cinematographer/video editor. Built with modern web technologies to deliver a premium, film-industry inspired user experience.

![Portfolio Preview](./src/assets/p4.PNG)

## 🎥 Project Overview

This website serves as a digital showcase for "BehindTheSceneGuy", featuring a dark, cinematic aesthetic that puts video content front and center. It includes interactive elements, smooth animations, and a seamless media playback experience.

## ✨ Features

-   **Cinematic Design:** A dark-themed UI with gold accents (`#D4AF37`), glassmorphism effects, and rich typography.
-   **Showreel Integration:** Custom-built video player with overlay effects for immediate engagement.
-   **Interactive Portfolio:** Filterable video gallery with a modal player for viewing projects without leaving the page.
-   **Smooth Animations:** Powered by **Framer Motion** for scroll reveals, hover effects, and transitions.
-   **Responsive Layout:** Fully optimized for desktops, tablets, and mobile devices.
-   **WhatsApp Contact Integration:** Direct-to-WhatsApp messaging form for quick client inquiries.
-   **Service Showcase:** Detailed breakdown of services with custom iconography.

## 🛠️ Tech Stack

-   **Framework:** [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mudit-portfolio.git
    cd mudit-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and visit `http://localhost:5173`.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate the optimized files in the `dist` directory. You can preview the build locally using:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/          # Images, Videos, and Icons
├── components/      # Reusable React Components (Hero, Navbar, Showreel, etc.)
├── App.jsx          # Main Application Component
├── index.css        # Global Styles & Tailwind Directives
└── main.jsx         # Entry Point
```

## 🎨 Customization

-   **Colors:** The theme colors (Cinema Black, Brand Gold, etc.) are defined in `tailwind.config.js`.
-   **Content:** Edit the arrays in specific components (e.g., `projects` in `Portfolio.jsx`, `services` in `Services.jsx`) to update content easily.
-   **Contact:** Update the phone number in `Contact.jsx` to route messages to your specific WhatsApp number.

## 📄 License

All rights reserved. BehindTheSceneGuy © 2026.
