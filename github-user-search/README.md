# Working with APIs: GitHub User Search Application

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
  - Install Axios for making HTTP requests, which will be used to interact with the GitHub API:
  ```bash
  npm install axios
  ```

### Step 3: Prepare the Application Structure
* __Application Structure:__
  - Inside the `src` folder you should only have:
    - `App.jsx`: The entry component for the application.
    - `components/`: Directory that holds all our components.
    - `services/`: Directory for services such as API calls.

### Step 4: Configure Environment for API Calls
* __Environment Setup:__
  - Set up environment variables to store sensitive information such as API keys (if necessary for GitHub API):
    - Create a `.env` file in the root directory.
    - Add environment variables `VITE_APP_GITHUB_API_KEY` to the `.env` file for a _Github_ API key in cases where it is needed. Usually this is not needed unless you have reached Github limits.
    - <to be edited> Use `import.meta.env.VITE_APP_GITHUB_API_KEY` in your API service files.

### Step 5: Initial Test Run
* __Run the Application:__
  - Ensure that your setup works by running the application:
  ```bash
  npm run dev
  ```