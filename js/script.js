const cancel = document.querySelector(".cancel");
const proceed = document.querySelector(".proceed");
const change = document.querySelector(".change");
const dropdownContents = document.querySelectorAll(".dropdown-contents");
const content = document.querySelector("#content");
const [week, month, year] = document.querySelectorAll(".dropdown-contents p");
const priceDesc = document.querySelector(".price-desc");
const plan = document.querySelector(".plan");

// payment confirmation button
cancel.addEventListener("mouseover", () => {
  proceed.classList.add("cancel");
});

cancel.addEventListener("mouseout", () => {
  proceed.classList.remove("cancel");
  proceed.classList.add("proceed");
});

// toggle change button
change.addEventListener("click", () => {
  content.classList.toggle("show");
});

// close menu when user click outside the menu
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

// change price
week.addEventListener("click", () => {
  priceDesc.innerHTML = week.textContent;
  plan.textContent = 'Weekly Plan'
});

month.addEventListener("click", () => {
    priceDesc.innerHTML = month.textContent;
    plan.textContent = 'Monthly Plan'
});

year.addEventListener("click", () => {
    priceDesc.innerHTML = year.textContent;
    plan.textContent = 'Annual Plan'
});
