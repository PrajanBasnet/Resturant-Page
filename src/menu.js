import FoodBg from "./img/back.jpg"
import "./css/menu.css"
let mainContent = document.querySelector("#content");

function centerText() {
    const h1 = document.createElement("h1");
    const p = document.createElement("h2");
    p.innerHTML = "Best Food and Best Experience "
    h1.innerHTML = "Astra Restrurant <b>Menu</b> "
    mainContent.appendChild(h1)
    mainContent.appendChild(p)
}



function centerContent() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "centerDiv");
    
    const card = document.createElement("div");
    const order = document.createElement("button");
    const price = document.createElement("button");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    
    p.textContent = "Thakali food, a traditional Nepali meal, typically includes rice, dal (lentil soup), tarkari (vegetable curry), and meat (masu)"
    h2.textContent = "Nepali Thakali food"
    
    const img = new Image()
    img.src = FoodBg;
    
    order.innerHTML = "Order"
    order.setAttribute("id","order")
    price.setAttribute("id","price")
    img.setAttribute("id","foodImg")
    card.setAttribute("class", "card");
    
    
    card.appendChild(img)
    card.appendChild(h2)
    card.appendChild(p)
    card.appendChild(order)
    mainContent.appendChild(card);
    // mainContent.appendChild(newDiv);

}

function Menu() {
    mainContent.innerHTML = "";
    centerText()
    centerContent()
    centerContent()
    centerContent()

    centerContent()

    
    
}

export { Menu , mainContent }