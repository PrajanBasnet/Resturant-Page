import FoodBg from "./img/back.jpg"
import "./css/menu.css"
let mainContent = document.querySelector("#content");

function centerText() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Astra Restrurant <b>Menu</b>"
    mainContent.appendChild(h1)
}
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "centerDiv");

function centerContent() {

    const card = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "Nepali Thakali food"
    const img = new Image()
    img.src = FoodBg;
    card.setAttribute("class", "card");
    card.appendChild(img)
 card.appendChild(p)
    newDiv.appendChild(card);
    mainContent.appendChild(newDiv);


}

function Menu() {
    mainContent.innerHTML = "";
    centerText()
    centerContent()
   


}

export { Menu }