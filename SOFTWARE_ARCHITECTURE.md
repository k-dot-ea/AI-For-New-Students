# Software Architecture for AI-For-New-Students React Project

## Overview

This project is a React single-page application built with Vite. It integrates IBM Watson Assistant for chat functionality and is deployed on GitHub Pages.

## Architecture Components

1. **Entry Point**
   - `src/main.jsx`: Renders the root `App` component into the DOM.

2. **Root Component**
   - `src/App.jsx`
     - Integrates IBM Watson `WebChatCustomElement` for chat.
     - Renders `IndexElements` component which contains the main UI.

3. **Main UI Container**
   - `src/indexElements.jsx`
     - Contains `Navbar` and `Body` components.

4. **Navbar** (`src/components/navbar/navbar.jsx`)
   - `LogoNavbar`: Displays the logo.
   - `MenuButton`: Toggles menu visibility.
   - `RefreshButton`: Refresh functionality.
   - `MenuPanel`: Displays menu options.
   - Manages menu state and click outside behavior.

5. **Body** (`src/components/body/body.jsx`)
   - `VideoSection`: Displays video content.
   - `ContentSection`: Displays textual and other content.

6. **Assets and Styling**
   - CSS files under `src/assets` and component-specific CSS files.
   - Static assets like images and videos under `src/assets/images` and `src/assets/video-library`.

7. **Deployment**
   - Built with Vite.
   - Configured for GitHub Pages deployment with base path in `vite.config.js`.
   - Uses `gh-pages` branch for hosting.

## Design Diagram

```plaintext
+-------------------+
|   src/main.jsx    |  Entry point
+---------+---------+
          |
          v
+-------------------+
|     App.jsx       |  Root component
| +---------------+ |
| | WebChatCustom | |  IBM Watson Chat
| +---------------+ |
|         |         |
| +---------------+ |
| | IndexElements | |  Main UI container
| +---------------+ |
+---------+---------+
          |
          v
+-------------------+
|  IndexElements.jsx | 
| +-------+ +------+ |
| |Navbar | | Body | |  Navbar and Body components
| +-------+ +------+ |
+---------+---------+
          |          

+-------------------+   +---------------------+
| Navbar.jsx        |   | Body.jsx            |
| - LogoNavbar      |   | - VideoSection      |
| - MenuButton      |   | - ContentSection    |
| - RefreshButton   |   +---------------------+
| - MenuPanel       |
+-------------------+
```

This architecture follows a modular, component-based design typical of React applications, with clear separation of concerns and external integration.
