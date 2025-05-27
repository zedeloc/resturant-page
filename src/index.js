import "./styles.css"
import "./reset.css"

import { pooped } from "./greeting.js"

console.log(pooped);

const content = document.querySelector("#content");
const header = document.querySelector('header');
const nav = document.createElement('nav');
// big logo
const restaurantLogoDiv = document.createElement('div');
const logo = document.createElement('h1');
const logoPhrase = document.createElement('p');
// small logo for header
const restaurantLogoDivSmall = document.createElement('div');
const logoSmall = document.createElement('h2');
const logoPhraseSmall = document.createElement('p');
// nav buttons
const buttonHome = document.createElement('button')
buttonHome.classList += 'button-home';
buttonHome.textContent = 'Home';
// 
const buttonMenu = document.createElement('button')
buttonMenu.classList += 'button-menu';
buttonMenu.textContent = 'Menu';
// 
const buttonAbout = document.createElement('button')
buttonAbout.classList += 'button-about';
buttonAbout.textContent = 'About';

nav.append(buttonHome, buttonMenu, buttonAbout)
// Story
const story = document.createElement('p');
story.classList = 'story'
story.textContent = "Vomít prides itself in providing an intense and overwhelming dining experience that will make you expel any doubt. Our food will settle and brew such a sensation that you'll wish to re-experience our cuisine. In fact, most of our customers get to experience our meals twice."

restaurantLogoDiv.classList += "logo";
restaurantLogoDivSmall.classList += "logo";
logo.textContent = "Vomít";
logoSmall.textContent = "Vomít"
logoPhrase.textContent = "Gastric delights inspired by gastric events...";
logoPhraseSmall.textContent = "Gastric delights inspired by gastric events...";



restaurantLogoDiv.append(logo, logoPhrase);
content.append(restaurantLogoDiv, story);

restaurantLogoDivSmall.append(logoSmall, logoPhraseSmall);
header.append(restaurantLogoDivSmall, nav);

// Story

