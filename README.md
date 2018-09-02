## Getting Started 
To install all dependencies run

`yarn install`

Then start the project with

`yarn start`

## Components Library
This project uses a modified version of [Ant Design](https://ant.design/docs/react/introduce). 
If you want to change the overall theme defaults, you can modify the config-verrides.js file. 

## Component Styling
Ant Design components and DOM elements are modified using a CSS in JS solution called [Styled Components](https://www.styled-components.com/). 

## API Calls
All API calls should be handled by [Axios](https://www.npmjs.com/package/axios). 

## Code Style
[Prettier](https://prettier.io/) is ran on-commit, which means you can write code in whatever style you want and it will be automatically formatted according to the common style when you run `git commit`.[ESLint](https://eslint.org/) is also included, although all stylistic rules are disabled since Prettier takes care of those.
