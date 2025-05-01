import "./styles.css"

const newDiv = document.createElement("div");

function linkTags(text,link){
    const aTag = document.createElement("a");
    const aContent = document.createTextNode(`${text}`)

    aTag.appendChild(aContent);
    aTag.setAttribute('href',`${link}`);
    
    newDiv.setAttribute("class","container")
    newDiv.appendChild(aTag);
    
    const nav = document.querySelector("nav");
    nav.appendChild(newDiv)
}

linkTags("Home","#");
linkTags("Menu","#");
linkTags("About","#");

