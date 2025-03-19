# Luthando Monevo Assessment

## Overview

This project establishes an automation framework for UI testing for a Monevo assessment using Playwright and Cucumber. It provides a structured approach to writing and executing automated tests, ensuring scalability, maintainability, and efficient validation of application functionalities.

## Project Structure

- **package.json**: Contains the project dependencies and scripts.
- **tests/features**: Contains the feature files written in Gherkin syntax.
- **tests/features/step_definitions**: Contains the step definitions for the feature files.
- **tests/pages**: Contains the page object models.
- **tests/support**: Contains support files like hooks.

## Setup

1. **Install Dependencies**:
   Make sure you have Node.js installed. Then, install the project dependencies by running:
   ```sh
   npm install
   ```
2. **Install Browsers**:
  You can install the browsers using this command:
   ```sh
   npx playwright install
   ```
3. **Run Tests**:
   You can run the tests using the following command:
   ```sh
   npm test
   ```

