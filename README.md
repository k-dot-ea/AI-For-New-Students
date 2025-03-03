# Project Title

This project is an AI chatbot web application designed for new students at the University of Hull. Its purpose is to make life easier for new students integrating into the university and the city. The chatbot, engineered using WatsonX provided by IBM, offers necessary information about the university, courses, important websites, the city, and other essential resources that may be important for a new student. The application is built to be easily scalable and extendable to accommodate different universities, ensuring that it can serve a broader audience in the future. This flexibility allows for quick adaptations to meet the specific needs of various educational institutions, making it a versatile tool for enhancing the student experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/k-dot-ea/AI-For-New-Students.git
   ```
2. Navigate to the project directory:
   ```bash
   cd yourproject
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the application, run:
```bash
npm run dev
```
Then open your browser and navigate to `http://localhost:5173`.

## Features

- **WatsonX Chatbot Integration**: The application integrates the WatsonX chatbot, configured with an `integrationID`, `region`, and `serviceInstanceID`. The chatbot opens by default and features a responsive layout. The `WebChatCustomElement` is used to render the chatbot, with animations managed through the `viewChangeHandler` function. The styling for the chatbot is defined in the CSS, ensuring it fits seamlessly within the application.
- **Video Playback**: The application includes a video player that plays a video sourced from the assets. The video is set to autoplay, loop, and play inline.
- **Pause/Play Functionality**: A pause button allows users to toggle between pausing and playing the video. The button's appearance changes based on the video's state.
- **Dynamic SVG Icon**: The pause button features a dynamic SVG icon that visually indicates whether the video is currently playing or paused.
- **Modular Structure**: The application is organized into separate components, including `Body`, `VideoSection`, `Video`, and `PauseButton`, promoting modularity and maintainability.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deployment to GitHub Pages

To deploy this application to GitHub Pages, follow these steps:

1. Install the `gh-pages` package:
   ```bash
   npm install --save gh-pages
   ```

2. Add the following properties to the `package.json` file:
   ```json
   "homepage": "https://k-dot-ea.github.io/AI-For-New-Students/",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy the application:
   ```bash
   npm run deploy
   ```
This will deploy the application to the GitHub Pages site specified in the `homepage` property.