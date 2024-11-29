## Introduction

This is a code challenge with specific requirements which are:
 
1. Write some code to consume the json hosted on the web service.
2. Output a list of all the cats in alphabetical order under a heading of the gender of their owner.
3. Output must be presentable on a web browser.
4. Submissions will only be accepted via GitHub or Bitbucket.

## Tech Stack

#### Client:
React, Typescript

#### Styling:
Material UI, CSS

#### Testing:
React Testing Library, Cypress

#### Tools:
Prettier, ESLint

#### DevOps:
Github Actions, Netlify

## CI/CD Pipeline

1. Whenever a code is pushed into the main branch the GitHub Actions workflow is triggered.
2. Within the workflow, there are a couple of things the Actions check in order for the workflow to pass, these are:
   - ESLint
   - React Testing Library
   - Cypress Component Testing
3. While the workflow is simulataneously running, the public file on the folder is pushed and deployed to Netlify.
4. This is deployed but not published which means tests should be checked as each deployment generates a unique URL before publishing the work.
5. Once everything is ticked off, deployment can be published.

## Run Locally

Clone the project or download the zip

```bash
  git clone https://github.com/wksung/coding-challenge-web.git
```

Go to the project directory

```bash
  cd coding-challenge-web
```

Install dependencies

```bash
  npm install
```

Change the .env.example file to .env and update the following

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `REACT_APP_API_URL` | `string` | **Required**. URL which was provided in the code challenge from the start to the final / |

Start the server

```bash
  npm start
```

## Run Tests Locally

If you'd like to run your tests locally for both Cypress & React Testing Library:

Run all react tests in RTL

```bash
  npm test a -- --verbose
```

Run all Cypress tests

```bash
  npx cypress run --component
```

## Live Site

Or if you prefer, please visit [here](https://code-challenge-web-29112024.netlify.app) for the demo.