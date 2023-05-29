# Etch-a-Sketch

## Live Demo

[Click me to see the Live Demo!](https://xbiotech.github.io/Etch-a-Sketch)

[![Etch-a-Sketch](https://i.gyazo.com/4520268b0bb707dbc53c6398a7b473ac.gif?autoplay=1&loop=1)](https://gyazo.com/4520268b0bb707dbc53c6398a7b473ac)

## Welcome! :wave:

Thanks for checking out my Project.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Learning resources](#learning-resources)
  - [Feedback](#got-feedback-for-me)

## Overview

### The project

simple kept Etch-a-Sketch project like from the childhood days.

This project was created as part of the Odin Project curriculum, an open-source web development education platform. The purpose of this project was to learn and practice new web development skills.

## My process

### Built with

- HTML5
- CSS
- Grid
- JavaScript

### What I learned

- more DOM Manipulation

I added some small code snippets below to illustrate my workwise

```javascript
//for loop to create and append grid
for (let i = 0; i < numOfRows * numOfColumns; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
  //...
}

//function that changes grid size depending on slider value
slider.addEventListener("input", function () {
  const numOfRows = slider.value;
  const numOfColumns = slider.value;
  createGrid(numOfRows, numOfColumns);
});
```

### Learning resources

- [The Odin Project](https://www.theodinproject.com/)
- [W3Schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)

## Got feedback for me?

I'm always down for some feedback! I'm constantly striving to improve my coding skills and take them to the next level, so if you have any thoughts or suggestions, don't hesitate to hit me up via email or Discord.

Thanks a ton for your help, and let's blast off together :rocket:

- E-Mail - [Dennis Schneider](mailto:biotech9261@gmail.com)
- Discord - [BioTech](https://discord.com/users/343126401450377217)
