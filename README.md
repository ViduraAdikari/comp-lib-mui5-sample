# Sample component library build with MUI v5
This library is to be build using rollup and will be installed as a npm packakge to another Reactjs app.

## Usage 

how to use the installed library can be found in this repo:
https://github.com/ViduraAdikari/consumer-comp-lib-mui5-sample.git


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Build Scripts

In the project directory, you can run:

### `buildRoolUp`

Build app using rollup.\
output of rollup build located in `/dist` folder.

### `package`

package module to install on another React app.\
output of the package will be located in `root` folder. \
you can change the version of the package by changing "version": "x.x.x" in package.json

#### How to install?
1. Copy Absolute path of comp-lib-mui5-sample-x.x.x \
2. Open terminal for consumer app and run `npm i [copied absolute path]`
3. For usage [check consumer app here](https://github.com/ViduraAdikari/consumer-comp-lib-mui5-sample.git).
---

## Other Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
