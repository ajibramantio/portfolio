# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, loading states, and an interactive user experience.

## Features

- 🎨 **Modern Design**: Clean, minimalist design with dark theme
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ✨ **Smooth Animations**: Scroll-triggered animations and transitions
- ⚡ **Loading States**: Elegant loading screen on initial load
- 🎯 **Interactive Navigation**: Smooth scrolling with active section highlighting
- 🖼️ **Image Protection**: Background image implementation for profile photo

## Tech Stack

- **React 19.2.3** - UI library
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **React Scripts 5.0.1** - Build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd expertise-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── About/          # About section
│   ├── Contact/        # Contact section with social links
│   ├── Footer/         # Footer component
│   ├── Hero/           # Hero section with profile
│   ├── Loading/        # Loading spinner component
│   ├── Navbar/         # Navigation bar
│   ├── Projects/       # Experiences/Projects section
│   └── Skills/         # Skills section
├── assets/             # Images and static assets
├── App.jsx             # Main application component
└── index.js            # Entry point
```

## Deployment

This project can be deployed to:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting service**: Upload the `build` folder

## License

This project is private and personal.
