import imageAyah from './images/teacreativelife-soo-chung-MzDMdLxu5d0-unsplash.jpg';
import imageDontKnowIf from './images/markus-winkler-BIRp2p8vR8k-unsplash.jpg';
import imageTwoPeanutHalves from './images/seiya-maeda-__LYlJ8N_jo-unsplash.jpg';

export function buildMenu() {
    const pageTitle = document.createElement('h1');
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('the-menu')
    pageTitle.textContent = 'Menu';
    pageTitle.classList.add('logo')
    content.appendChild(pageTitle)
    // Two Peanut Halves In Tummy Sauce
    const descriptTwoPeanutHalves = "Two peanut halves swimmin' in an organic and ethically sourced acidic tummy sauce. No two tummy sauces are the same. We get them all from a variety local sources."
    const twoPeanutHalves= buildMenuItem("Two Peanut Halves In Tummy Sauce", imageTwoPeanutHalves, descriptTwoPeanutHalves, 45);
    // I don't know if I'm going to make it to THE...
    const descripDontKnowIf = "Oh.. oh.. OHHH.. BLLERRGGGGBGBBBGBGBDSJFLJ";
    const dontKnowIf = buildMenuItem("I Don't Know If I'm Going To Make It To THE...", imageDontKnowIf, descripDontKnowIf, 100)
    // Ayahuasca Abdominal Evacuation
    const descripAyah = "Its like.. cosmic vibrations. You can feel the strings that underpin all of reality vibrating, man. There's like... literally like a symphony of strings vibrating us all into reality mannn. And the spectral creatures impart the knowledge of it all but *BELCH* uh. Its like *GULP*. Ugghhh man..."
    const ayah = buildMenuItem('Ayahuasca Abdominal Evacuation', imageAyah, descripAyah, 100);

    menuContainer.append(twoPeanutHalves, ayah, dontKnowIf, );
    content.append(menuContainer);
}

function buildMenuItem(itemName, pic, description, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const title = document.createElement('h2');
    title.classList.add('menu-item-title');
    title.textContent = itemName;

    const image = document.createElement('img');
    image.classList.add('menu-item-image');
    image.src = pic;

    const shortDescription = document.createElement('p');
    shortDescription.classList.add('menu-item-description');
    shortDescription.textContent = "Description: " + description;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('menu-item-price');
    itemPrice.textContent = price;

    menuItem.append(image, title, shortDescription, itemPrice);

    return menuItem;
}