import bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.js";
// import bootstrap from "bootstrap";
import "./sass/main.scss"; // Import our scss file

import "./kitchen";
var nextPlaceOrderBtn = document.getElementById("next-place-order-btn");
const promocodeForm = document.getElementById("promocode-form");

// Listen for tabs click
var tabEls = document.querySelectorAll('a[data-toggle="pill"]');
tabEls.forEach(function (tabEl, index) {
  tabEl.addEventListener("shown.bs.tab", function (e) {
    // console.log(e.target); // newly activated tab
    // console.log(e.relatedTarget); // previous active tab
    if (e.target.id === "billing-address-tab") {
      nextPlaceOrderBtn.textContent = "Next";
    } else if (e.target.id === "shipping-address-tab") {
      nextPlaceOrderBtn.textContent = "Next";
    } else if (e.target.id === "payment-methods-tab") {
      nextPlaceOrderBtn.textContent = "Place order";
    }
    nextPlaceOrderBtn.dataset.tabIndex = index;
  });
});

nextPlaceOrderBtn.addEventListener("click", function (e) {
  const currentTabIndex = parseInt(e.target.dataset.tabIndex);
  var tab;
  if (currentTabIndex === tabEls.length - 1) {
    tab = new bootstrap.Tab(tabEls[0]);
    e.target.dataset.tabIndex = 0;
  } else {
    tab = new bootstrap.Tab(tabEls[currentTabIndex + 1]);
    e.target.dataset.tabIndex = currentTabIndex + 1;
  }
  tab.show();
});

function createPromocodeFeedback(isValid) {
  if (isValid) {
    return `
    <div style="display: block;" class="valid-feedback">
    Promocode applied
    </div>
    `;
  } else {
    return `
    <div style="display: block;" class="invalid-feedback">
    No such promocode found
    </div>
    `;
  }
}

// Event listener for promocode submit
promocodeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const enteredPromocode = promocodeForm[0].value.toUpperCase();
  if (enteredPromocode.length) {
    if (enteredPromocode === "EASYSHOP20") {
      // correct
      // check if feedback already exists
      const oldFeedback = promocodeForm.querySelector('[class$="-feedback"');
      console.log(oldFeedback);
      if (oldFeedback) {
        // replace if exists
        oldFeedback.remove();
      }
      // else append
      promocodeForm
        .querySelector(".input-group")
        .insertAdjacentHTML("beforeend", createPromocodeFeedback(true));
      // add styles to input
      promocodeForm[0].classList.remove("is-invalid");
      promocodeForm[0].classList.add("is-valid");
    } else {
      // not correct
      // check if feedback already exists
      const oldFeedback = promocodeForm.querySelector('[class$="-feedback"');
      console.log(oldFeedback);
      if (oldFeedback) {
        // replace if exists
        oldFeedback.remove();
      }
      // else append
      promocodeForm
        .querySelector(".input-group")
        .insertAdjacentHTML("beforeend", createPromocodeFeedback(false));
      promocodeForm[0].classList.remove("is-valid");
      promocodeForm[0].classList.add("is-invalid");
    }
  }
});
