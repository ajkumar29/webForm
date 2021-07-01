## Instructions

To test the production build, please open the `build` folder and open `index.html` in your browser.

To test in development mode, please run `npm i` to install the necessary packages.\
You can then run `npm start` to run in development mode.

To run the DOM tests, please use the `npm test` to open jest test runner - detailed below.
To run the end to end tests, please use the `npm run e2e` after executing `npm start` in another terminal - detailed below.

To rebuild production build, please use `npm run build`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the jest test runner in the interactive watch mode.

### `npm run e2e`

Launches the cypress test runner.\
This will run the end to end testing.\
Please make sure you are running the application on [http://localhost:3000](http://localhost:3000) by executing `npm start` before launching cypress. \
Should you wish to change the port number, please update cypress.json file to point to the new port.

### `npm run build`

(I have already run this and included the build folder for your viewing. Please see `build` folder and open `index.html` in your browser to test the production build code).

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Once you have run this command, please open the `build` folder and open `index.html` in your browser to test the production build code.
