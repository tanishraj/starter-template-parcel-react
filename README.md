# Parcel React Starter Template

A starter template for React projects utilizing the power of Parcel bundler and JavaScript.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Author](#author)
- [License](#license)

## Description

This project serves as a starter template for React applications. It leverages Parcel as the build tool, providing a fast and zero-configuration bundling experience. The template is set up with JavaScript and includes essential development tools for linting and formatting.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/tanishraj/starter-template-parcel-react.git
   cd parcel_react
   ```

2. Install dependencies:
   ```
   yarn install
   ```

## Scripts

This project comes with several npm scripts to help with development, building, and maintaining code quality:

- **start**: Starts the development server on port 1234 and opens the application in the default browser.

  ```
  yarn start
  ```

- **cache:clean**: Cleans the Parcel cache, removes the dist folder, and cleans the yarn cache.

  ```
  yarn cache:clean
  ```

- **build**: Builds the project for production.

  ```
  yarn build
  ```

- **serve**: Serves the application on port 5678 and opens it in the default browser.

  ```
  yarn serve
  ```

- **lint**: Runs ESLint to check for code style issues.

  ```
  yarn lint
  ```

- **lint:fix**: Runs ESLint to fix code style issues and then formats the code.

  ```
  yarn lint:fix
  ```

- **format**: Runs Prettier to format all files.
  ```
  yarn format
  ```

## Dependencies

- **react**: ^18.2.0
- **react-dom**: ^18.2.0

## Dev Dependencies

- **@parcel/compressor-brotli**: ^2.12.0
- **@parcel/compressor-gzip**: ^2.12.0
- **eslint**: ^8.2.0
- **eslint-config-airbnb**: 19.0.4
- **eslint-config-prettier**: ^9.1.0
- **eslint-plugin-import**: ^2.25.3
- **eslint-plugin-jsx-a11y**: ^6.5.1
- **eslint-plugin-prettier**: ^5.1.3
- **eslint-plugin-react**: ^7.28.0
- **eslint-plugin-react-hooks**: ^4.3.0
- **parcel**: ^2.12.0
- **prettier**: ^3.2.5
- **process**: ^0.11.10

## Author

Tanishraj

## License

ISC

---

This project uses Parcel for bundling, ESLint for code linting, and Prettier for code formatting. It's set up with React 18 and includes configurations for optimal development experience.

For more information on how to use Parcel with React, visit the [Parcel documentation](https://parceljs.org/recipes/react/).

To learn more about React, check out the [React documentation](https://reactjs.org/).

Happy coding!
