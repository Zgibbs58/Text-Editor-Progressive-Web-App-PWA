# Text-Editor-Progressive-Web-App-PWA

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Deployed Link](https://tranquil-stream-56712-b9712153b3bf.herokuapp.com/)

## Description
This is a text editor that is setup with themes that color code text recognized as syntax. It is a single page application that meets PWA criteria and can be downloaded to function like a native app. Using a combination of multiple packages including: webpack, babel, codemirror, idb, and more to store data in the browser and allow the app to work offline. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Installation


To set up the project and run it locally on your machine, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Install the required dependencies using:

```
npm install
```

4. Run the build and start the server concurrently :

```
npm run start:dev
```

## Usage

- Create, edit, and save notes or code snippets.
- Data is automatically saved to IndexedDB when you click off the DOM window.
- Retrieve your saved content when you reopen the text editor.
- Install the application as a PWA for easy access.

![Walkthrough Gif](./assets/textEditorGif.gif)

## Technologies
[Webpack](https://www.npmjs.com/package/webpack)

[indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

[Workbox](https://www.npmjs.com/package/workbox-webpack-plugin)

[Babel](https://babeljs.io/)


## License
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.


