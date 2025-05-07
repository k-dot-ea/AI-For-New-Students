# Testing Documentation for AI-For-New-Students Project

## Overview

This document describes the testing setup, frameworks used, and how testing is configured and executed in the AI-For-New-Students project.

## Testing Frameworks and Libraries

- **Jest**: Jest is the primary testing framework used for running unit and integration tests. It provides a test runner, assertion library, and mocking capabilities.
- **React Testing Library (@testing-library/react)**: Used for testing React components by simulating user interactions and verifying component behavior.
- **Jest DOM (@testing-library/jest-dom)**: Provides custom Jest matchers to test the state of the DOM, such as checking if an element is visible or has specific text content.

## Configuration

- The project uses **Vite** as the build tool and React as the UI library.
- Jest configuration is located in `jest.config.cjs` to support CommonJS module format, as the project uses `"type": "module"` in `package.json`.
- The Jest config specifies:
  - `testEnvironment` as `jest-environment-jsdom` to simulate a browser-like environment for testing React components.
  - `transform` using `babel-jest` to transpile modern JavaScript and JSX syntax.
  - `moduleNameMapper` to mock CSS imports using `identity-obj-proxy`.
  - `setupFilesAfterEnv` points to `src/setupTests.js` for additional setup.

## Setup File (`src/setupTests.js`)

- This file imports `@testing-library/jest-dom` using CommonJS `require` syntax:
  ```js
  require('@testing-library/jest-dom');
  ```
- This setup enables custom DOM matchers globally in all test files.

## Running Tests

- Tests are run using the command:
  ```
  npm test
  ```
- This runs Jest in non-watch mode by default.
- Test files are typically named with `.test.jsx` or `.test.js` extensions and located alongside components.

## Common Issues and Solutions

- **SyntaxError: Cannot use import statement outside a module**  
  This occurs if `src/setupTests.js` uses ES module `import` syntax while Jest expects CommonJS.  
  **Solution:** Use `require('@testing-library/jest-dom')` in `src/setupTests.js`.

- **Jest config module format mismatch**  
  Since the project uses ES modules, Jest config is provided as `jest.config.cjs` using CommonJS exports.

## Summary

This testing setup ensures React components are tested in a simulated browser environment with helpful DOM assertions. Jest and React Testing Library provide a robust and developer-friendly testing experience.

---

For any questions or further assistance, please reach out to the development team.
