import { Menu, mainContent } from "./menu.js";
import { About } from "./about.js";
import "./css/styles.css"

const newDiv = document.createElement("div");
const nav = document.querySelector("nav");

function linkTags(text,link){
    const aTag = document.createElement("a");
    const aContent = document.createTextNode(`${text}`)

    aTag.appendChild(aContent);
    aTag.setAttribute('href',`${link}`);
    aTag.addEventListener("click",()=>{

        console.log("Working")
        if(text === "Menu"){

            Menu()
        }else if(text === "About"){
            About()
            
        }else if(text === "Home"){
            mainContent.innerHTML = "";
        } 
    })
    newDiv.setAttribute("class","container")
    newDiv.appendChild(aTag);
    
    nav.appendChild(newDiv)
}

linkTags("Home","#");
linkTags("Menu","#");
linkTags("About","#");

