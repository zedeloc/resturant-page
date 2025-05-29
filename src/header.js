export function buildHeader() {
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
        buildHome()
    })

    buttonMenu.addEventListener("click", () => {
        clearContent();
    })

    buttonAbout.addEventListener("click", () => {
        clearContent();
    })
}