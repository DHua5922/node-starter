# React-Starter

Starting project for Node.

## IMPORTANT

When starting a new project, make sure to update files in `config`, `.github/workflows`, `docker-compose.yml`, and `README.md`.

## Technologies

- TypeScript
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## File Structure

- In the root, there should be `services`, `config`, `controllers`, `models`, `routes`, `middleware`, and `utilities` folders.
- In the `controllers` folder, there should be files in which each function has `req` and `res` as parameters. This is where all requests and responses are handled. Name each file after a noun in lowercase.
- In `config` folder, environment variables and database configuration are stored here. For environment variables, use `config.dev.env` for development, `config.env` for default, and `config.prod.env` for production. For database configuration, store it in a file named `database`.
- In `models` folder, configuration for database tables are stored here. Each model representing a database table should be in a separate file. Models should be named using camel case style, and each filename should match the model name.
- In `routes` folder, all API links are mapped to controller functions.
- In `utilities` folder, anything, such as helper class or helper functions, that will help do a particular action should be stored here.
- In `services` folder, functions for working with databases should be stored here.
- In `middleware` folder, everything, such as authentication and authorization, that works with middleware should be stored here.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
