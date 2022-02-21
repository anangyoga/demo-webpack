import _ from "lodash";
import "./style.css";
import Squidward from "./squidward.png";

function component() {
  const element = document.createElement("div");

  //   Lodash, now imported by this script
  element.innerHTML = _.join(["Itsar", "Bentala", "Akalendra"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Squidward;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
