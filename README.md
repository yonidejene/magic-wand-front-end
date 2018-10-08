## Getting Started

To install all dependencies run

`yarn install`

Then start the project with

`yarn start`

## Folder Structure

All component logic is in /components.

All logic related to pages is in /pages. If you're creating a new route then you should add a component here.

The routes are in index.js of the root folder and use react-router-v4.

Feel free to re-organize this if it's not working for you.

## Components Library

This project uses a modified version of [Ant Design](https://ant.design/docs/react/introduce).
If you want to change the overall theme defaults, you can modify the config-overrides.js file. You need to recompile to see changes.

## Component Styling

Ant Design components and DOM elements are modified using a CSS in JS solution called [Styled Components](https://www.styled-components.com/). Please read the documentation especially how it handles specificity with &&& and referencing the main component with &.

## API Calls

All API calls should be handled by [Axios](https://www.npmjs.com/package/axios).

## Code Style

[Prettier](https://prettier.io/) is ran on-commit, which means you can write code in whatever style you want and it will be automatically formatted according to the common style when you run `git commit`. [ESLint](https://eslint.org/) is also included, although all stylistic rules are disabled since Prettier takes care of those.
