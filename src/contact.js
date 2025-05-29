import splotch from "./images/splotch.png";

export function buildContact() {
    const restaurantLogoDiv = document.createElement('div');
    const logo = document.createElement('h1');
    const logoPhrase = document.createElement('p');
    const splotchLogoLarge = document.createElement('img');
    splotchLogoLarge.classList.add('splotch-logo-large');
    splotchLogoLarge.src = splotch;

    restaurantLogoDiv.classList += "logo";
    logo.textContent = "Vomít";
    logoPhrase.textContent = "Gastric delights inspired by gastric events...";

    logo.append(splotchLogoLarge)
    restaurantLogoDiv.append(logo, logoPhrase);
    content.append(restaurantLogoDiv, createContactForm());



}

function createContactForm() {
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-form');
    const contactUs = document.createElement('h2');
    contactUs.textContent = "Contact Us!";
    const ralph = document.createElement('p');
    ralph.classList.add('contact-name');
    ralph.textContent = "Ralph Hearty";
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "(123) 456-7890";
    const address = document.createElement('p');
    address.textContent = "987 Sick Street";
    const cityState = document.createElement('p');
    cityState.textContent = "Upchuck, Vermont 99999"

    contactForm.append(contactUs, ralph, phoneNumber, address, cityState)
    return contactForm
}