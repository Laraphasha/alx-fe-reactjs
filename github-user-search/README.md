# Working with APIs: GitHub User Search Application

## Project Structure
* github-user-search/
  - src/
    - components/
      - Search.jsx
    - services/
      - githubService.js
    - App.jsx
    - index.css
    - main.jsx
  - .env
  - eslint.config.js
  - index.html
  - package.json
  - postcss.config.js
  - README.md
  - tailwind.config.js
  - vite.config.js


## Setting Up
### Step 1: Create a New React Project
* __React Project Setup:__
  - Open your terminal and set up a new React application using Create React App:
  ```bash
  npm create vite@latest github-user-search -- --template react
  cd github-user-search
  ```

### Step 2: Install Necessary Packages
* __Dependencies Installation:__
  - Install [Axios](https://axios-http.com/docs/intro) for making HTTP requests, which will be used to interact with the GitHub API:
  ```bash
  npm install axios
  ```
  - Install [React Router](https://reactrouter.com/start/declarative/installation) to use for routing in our app:
  ```bash
  npm i react-router
  ```
  - Install [Tailwind CSS](https://v3.tailwindcss.com/docs/guides/vite) for styling.
  ```bash
  npm install -D tailwindcss@3 postcss autoprefixer
  ```

### Step 3: Prepare the Application Structure
* __Application Structure:__
  - Inside the `src` folder you should only have:
    - `main.jsx`: The component that connects HTML page with React components.
      - render the `<App />` component using the `BrowserRouter` element to introduce routing to the app. See [React Router installation guide](https://reactrouter.com/start/declarative/installation).
      - Now to [configure routes](https://reactrouter.com/start/declarative/routing):
        - The root ('/') path is going to be the `<App />` component as it is the entry(root) component.
        - The index element for the root path (i.e. when you hit the root("/") element) will be the `<Home />` component.
      - Add `import './index.css';` to your `main.jsx` file to allow `@tailwind` to take effect in your main, App, and subsequent components.
    - `App.jsx`: The entry component for the application.
      - Inside the _App.jsx_ file, create a simple react component that renders the text `Hello World`. See [React Components](https://www.w3schools.com/react/react_components.asp) on how to create a simple react component.
    - `components/`: Directory that holds all our components.
      - `Search.jsx`: The main component of the app. This component will render the search bar that will be used for searching for Github users.
        - Create a form with an input field and a submit button. See [HTML form input types](https://www.w3schools.com/hTml/html_form_input_types.asp).
    - `services/`: Directory for services such as API calls.
      - `githubService.js`: This is the file where the API call to the Github API is made.
        - import axios.
        - define the base URL = "https://api.github.com/users".
        - create an async function _fetchGithubUser_.
          - Use the __try-catch__ block for better error handling.
          - in the _try_ section:
            - use [axios.get()](https://www.educative.io/answers/how-to-make-an-axios-get-request) method to request a specific user (https://api.github.com/users/{user}).
              - configure the headers to use Authorisation whic is assigned the environmental variable for Github token `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`.
            - store this in a constant _response_.
            - return the _response_ after the _axios_ call.
          - in the catch section:
            - For now just console log the error and return null.
    - `index.css`: The main styling sheet for the project. Tailwind will be propagated through here.
      - Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
  - `postcss.config.js`: a config file which is part of the tailwind config.
  - `tailwind.config.js`: a cofig file for our styling framework [Tailwind CSS](https://v3.tailwindcss.com/docs/guides/create-react-app).
    - initiate the config file by running this command:
    ```bash
    npx tailwindcss init -P
    ```
    - __Configure your template paths__: Add the paths to all of your template files in your `tailwind.config.js` file:
    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

### Step 4: Configure Environment for API Calls
* __Environment Setup:__
  - Set up environment variables to store sensitive information such as API keys (if necessary for GitHub API):
    - Create a `.env` file in the root directory.
    - Add environment variables `VITE_APP_GITHUB_API_KEY` to the `.env` file for a _Github_ API key in cases where it is needed. GitHub API doesn't require a token for public user search, but if you hit the rate limit, you can generate a [personal access token](https://github.com/settings/tokens) and use it.
    - <to be edited> Use `import.meta.env.VITE_APP_GITHUB_API_KEY` in your API service files.

### Step 5: Run
* __Run the Application:__
  - Ensure that your setup works by running the application:
  ```bash
  npm run dev
  ```