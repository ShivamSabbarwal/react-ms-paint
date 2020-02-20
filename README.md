# React MS Paint

![Screen Shot](./screenshot.png "Screeshot")

## Overview

React MS Paint is a small SPA replica of the Original Mircosoft Paint. This version of MS paint is written in React.js and uses the HTML5 Canvas for the drawing functionality.

## Features

- Color selection
- Pencil tool
- Flood Fill tool
- Canvas Resizing

## Installation & Starting Up

    npm i
    npm start

## To-Do

- Implement Flood Fill Tool
- Implement resize canvas

## Used libraries

- React
- node-sass

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Technical Interview Question - Flood Fill

Your task is to create an extremely simple version of the Microsoft Paint application. The application has the following requirements:

    • It must be built using React and run in the browser.
    • The app should support two tools: pencil, and flood fill.
    • Those tools will need to support some kind of color picker. We would suggest using an open source package for this.
    • The canvas should be made up of squares, and be of configurable size. The user should be able to input their desired dimensions for the canvas. You aren’t required to maintain the drawing state when the user changes the canvas size.
    • The user should be able to use the pencil tool to colour individual squares by clicking on them.
    • You do not need to implement any kind of drag-to-colour feature like is supported by the real pencil tool. (The user will have to click on each square to colour it.)
    • The flood fill tool, should allow the user to fill in all connected squares of the same colour with another colour.

Please feel free to ask us any questions or use whatever resources you can find. Please don’t spend more than a couple hours on this task. We are most interested in the structure and quality of your code, more than the completion of the functionality.
