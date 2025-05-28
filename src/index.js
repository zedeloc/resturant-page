import "./styles.css"
import "./reset.css"

import { Header } from "./greeting.js"



const content = document.querySelector("#content");


function buildHeader() {
    const header = document.querySelector('header');
    const nav = document.createElement('nav');

    // small logo for header
    const restaurantLogoDivSmall = document.createElement('div');
    const logoSmall = document.createElement('h2');
    const logoPhraseSmall = document.createElement('p');
    // nav buttons
    const buttonHome = document.createElement('button')
    buttonHome.classList.add('button-home', 'nav-button');
    buttonHome.textContent = 'Home';
    // 
    const buttonMenu = document.createElement('button')
    buttonMenu.classList.add('button-menu', 'nav-button');
    buttonMenu.textContent = 'Menu';
    // 
    const buttonAbout = document.createElement('button')
    buttonAbout.classList.add('button-about', 'nav-button');
    buttonAbout.textContent = 'About';
    // resturant logo small
    restaurantLogoDivSmall.classList += "logo";
    logoSmall.textContent = "Vomít"
    logoPhraseSmall.textContent = "Gastric delights inspired by gastric events...";
    restaurantLogoDivSmall.append(logoSmall, logoPhraseSmall);
    header.append(restaurantLogoDivSmall, nav);

    nav.append(buttonHome, buttonMenu, buttonAbout)
    buttonHome.addEventListener("click", () => {
        clearContent();
        loadHome()
    })

    buttonMenu.addEventListener("click", () => {
        clearContent();
    })

    buttonAbout.addEventListener("click", () => {
        clearContent();
    })
}



// big logo
const restaurantLogoDiv = document.createElement('div');
const logo = document.createElement('h1');
const logoPhrase = document.createElement('p');


// Story

function loadHome() {
    restaurantLogoDiv.classList += "logo";
    logo.textContent = "Vomít";
    logoPhrase.textContent = "Gastric delights inspired by gastric events...";


    const story = document.createElement('p');
    story.classList = 'story'
    story.textContent = "Vomít prides itself in providing an intense and overwhelming dining experience that will make you expel any doubt. Our food will settle and brew such a sensation that you'll wish to re-experience our cuisine. In fact, most of our customers get to experience our meals twice."
    restaurantLogoDiv.append(logo, logoPhrase);
    content.append(restaurantLogoDiv, story);
}

buildHeader()
loadHome();

// header logo small












function clearContent() {
    content.replaceChildren();
}
// broken due to making Functions for each page and the header. 
// buttonHome.addEventListener("click", () => {
//     clearContent();
//     loadHome()
// })

// buttonMenu.addEventListener("click", () => {
//     clearContent();
// })

// buttonAbout.addEventListener("click", () => {
//     clearContent();
// })


