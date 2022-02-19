function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Itsar", "Bentala", "Akalendra"], " ");
  return element;
}

document.body.appendChild(component());
