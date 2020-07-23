import "./node_modules/bootstrap/dist/js/bootstrap.js";
var nextPlaceOrderBtn = document.getElementById("next-place-order-btn");

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
