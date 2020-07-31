import bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.js";
// import bootstrap from "bootstrap";
import "./sass/main.scss"; // Import our scss file

const colorList = document.querySelector(".color-list");
const grays = [
  { name: "white", color: "#fff" },
  { name: "gray-100", color: "#f7f7fc" },
  { name: "gray-200", color: "#f3f3f9" },
  { name: "gray-300", color: "#e0e0f2" },
  { name: "gray-400", color: "#dfdfeb" },
  { name: "gray-500", color: "#9e9fb4" },
  { name: "gray-600", color: "#737491" },
  { name: "gray-700", color: "#5a5b75" },
  { name: "gray-800", color: "#4a4b65" },
  { name: "gray-900", color: "#37384e" },
  { name: "black", color: "#000" },
];

const colorListHtml = grays.map(
  (color) => `
<div class="color-list__item" style="background-color: ${color.color}">
  ${color.name}
</div>
`
);
colorList.innerHTML = colorListHtml;
