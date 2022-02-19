import _ from "lodash";

function component() {
  const element = document.createElement("div");

  //   Lodash, now imported by this script
  element.innerHTML = _.join(["Itsar", "Bentala", "Akalendra"], " ");
  return element;
}

document.body.appendChild(component());
