# Refactor this HTML to React

!WARNING!: There will be alot of copying and pasting on this one. That's ok!

## Introduction

One of the basic and incredibly useful things that react can do for us is encapsulate the logic for a UI element in a react component. Your task is to look at this page and turn it into a data-driven react app. We've provided some helpful data for you in `fma-data.ts`. If the information in there is slightly off from what is in the html, don't worry about it, **use that data as your source of truth**.

To see what the app you create should look like, please run `npm i` to install all the necessary dependencies, and then run `npm run dev` in order to run the html app in your browser.

## Learning Objectives

This assignment should prove that a student is able to:

- Set up a new React project
- Set up Linting in a new React Project
- Use JSX to conditionally render a UI from data
- Do styling in a React App
- Use expressions in JSX
- Build functional components without state
- Build class components without state
- Understand how to use a data structure like an array to build the UI for the application using react
- Write some clean react code

## In order to pass this assignment you should

Note:
_You can copy and paste these checklists into your new repository and fill them out to make sure that you solved everything we are asking for_

### Standard Requirements

- [] Setup eslint
- [] Pass all linting checks
- [] Format code with prettier
- [] State should not be duplicated
- [] Variables should be named logicially
- [] No unneccessary console logs
- [] No commented out blocks of code (Code comments are fine)
- [] Setup a github repository with your submission as the `main` branch, you will submit a link to this for grading (Not a Zip File)

### Assignment Specific Requirements

- [x] Set up a react app using Vite
- [x] draw out your component tree in excalidraw
  - note: See [This Video](https://www.loom.com/share/13ad514f0d804dfeac6c1e487b2ae3dd) on how to submit
- [x] Get your react app to look EXACTLY the same as this html project
- [x] Use props to customize components that are being used
- [x] Use conditional rendering to render odd rows as dark and even rows as light with the "light" | "dark" class names
- [x] Abstract any REPEATED UI into Components
- [x] Use per-component CSS imports

  For example if you have a `CharacterCard.css` you can have an import that looks like so

```jsx
import "./some-css-file";

function CharacterCard() {
  // code goes here
}
```

- [x] Have at least one Class Component that uses props
- [x] Have at least one Functional Component that uses props
- [x] Transform the original data to get the data you want for each component
  - The characters in the table should be sorted by votes as shown in the html app
  - The characters table should only show the first top 5 characters
  - The character cards should show all characters, and does not need to be sorted
  - We should be passing our array of characters (the data array) from the top to the children
  - You can transform that data either before or after sending it to the child component
