import { buildHome } from "./home.js";
import { buildMenu } from "./menu.js";
import { buildContact } from "./contact.js";
import splotch from "./images/splotch.png";
export { buildContact, buildHome, buildMenu }

export function buildHeader() {
    const header = document.querySelector('header');
    const nav = document.createElement('nav');

    // small logo for header
    const restaurantLogoDivSmall = document.createElement('div');
    const logoSmall = document.createElement('h2');
    const logoPhraseSmall = document.createElement('p');
    const splotchLogo = document.createElement('img')
    splotchLogo.classList.add('splotch-logo');
    splotchLogo.src = splotch;
    // nav buttons
    const buttonHome = document.createElement('button')
    buttonHome.classList.add('button-home', 'nav-button');
    buttonHome.textContent = 'Home';
    // 
    const buttonMenu = document.createElement('button')
    buttonMenu.classList.add('button-menu', 'nav-button');
    buttonMenu.textContent = 'Menu';
    // 
    const buttonContact = document.createElement('button')
    buttonContact.classList.add('button-contact', 'nav-button');
    buttonContact.textContent = 'Contact';
    // resturant logo small
    restaurantLogoDivSmall.classList += "logo";
    logoSmall.textContent = "Vomít"
    logoPhraseSmall.textContent = "Gastric delights inspired by gastric events...";
    logoSmall.append(splotchLogo)
    restaurantLogoDivSmall.append(logoSmall, logoPhraseSmall);
    header.append(restaurantLogoDivSmall, nav);

    nav.append(buttonHome, buttonMenu, buttonContact)
    buttonHome.addEventListener("click", () => {
        clearContent();
        buildHome()
    })

    buttonMenu.addEventListener("click", () => {
        clearContent();
        buildMenu();
        
    })

    buttonContact.addEventListener("click", () => {
        clearContent();
        buildContact();
    })
}

function clearContent() {
    content.replaceChildren();
}