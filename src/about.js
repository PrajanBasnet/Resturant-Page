import "./css/about.css"

let mainContent = document.querySelector("#content");

function About(){
    mainContent.innerHTML = "";
    const newDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("h3");
    h1.innerHTML = "Contact Astra Resturant "
    p.innerHTML = "Phone Number: 9813121234"

    newDiv.setAttribute("class","about");
    newDiv.appendChild(h1)
    newDiv.appendChild(p)

    mainContent.appendChild(newDiv)
}

export { About}