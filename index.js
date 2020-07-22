import "./node_modules/bootstrap/dist/js/bootstrap.js";

// Listen for tabs click
var tabEls = document.querySelectorAll('a[data-toggle="pill"]');
tabEls.forEach(function (tabEl) {
  tabEl.addEventListener("shown.bs.tab", function (e) {
    console.log(e.target); // newly activated tab
    console.log(e.relatedTarget); // previous active tab
  });
});
