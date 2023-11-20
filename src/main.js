import { checkout } from "./components/checkout/checkout.js";
import { loader } from "./components/loader/loader.js";
import { success } from "./components/success/success.js";

function changeContent(hash) {
  let rootDiv = document.getElementById("root")

  const checkoutContainer = checkout()
  const loaderContainer = loader()
  const successContainer = success()

  rootDiv.innerHTML = ""

  switch(hash){
    case '#/':
    case '#/checkout':
      rootDiv.appendChild(checkoutContainer);
    break;
    case '#/loader':
      rootDiv.appendChild(loaderContainer);
    break;
    case '#/succes':
      rootDiv.appendChild(successContainer);
    break;
  }
}

window.addEventListener('load', () => {
  window.location.hash = '#/checkout';
  changeContent(window.location.hash);
});

window.addEventListener('hashchange', () => {
  changeContent(window.location.hash);
});




