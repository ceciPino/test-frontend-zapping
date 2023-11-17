import { checkout } from "./components/checkout/checkout.js";
import { loader } from "./components/loader/loader.js";
import { success } from "./components/success/success.js";

function changeContent() {
    let rootDiv = document.getElementById("root")

    const checkoutContainer = checkout()
    const loaderContainer = loader()
    const successContainer = success()

    rootDiv.innerHTML = ""
    rootDiv.appendChild(successContainer)
}

changeContent();