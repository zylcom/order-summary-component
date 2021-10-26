# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

- Desktop

  ![desktop](https://user-images.githubusercontent.com/67725925/138818073-289780cd-b4ff-4cb2-9ee6-1ae999937fbf.png)

- Mobile

  ![mobile](https://user-images.githubusercontent.com/67725925/138818286-65891cb3-7acc-4d15-8d86-5cd61b8d59f3.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/order-summary-component-use-flexbox-css-7JIsmWNP4](https://www.frontendmentor.io/solutions/order-summary-component-use-flexbox-css-7JIsmWNP4)
- Live Site URL: [https://zylcom.github.io/order-summary-component/](https://zylcom.github.io/order-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

```js
window.addEventListener("click", (e) => {
  if (!e.target.matches(".change")) {
    for (let i = 0; i < dropdownContents.length; i++) {
      let openDropdown = dropdownContents[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
```

### Useful resources

- [w3schools](https://www.w3schools.com) - This helped me to understand the syntax.
- [Bootstrap](https://icons.getbootstrap.com) - This is an icon i use.

## Author

- Website - [My Portfolio](https://zylcom.github.io/)
- Frontend Mentor - [@zylcom](https://www.frontendmentor.io/profile/zylcom)
- Instagram - [@sabil_272](https://instagram.com/sabil_272)
- Facebook - [Sabil](https://www.facebook.com/sabilillah272)
- Github - [zylcom](https://github.com/zylcom)
