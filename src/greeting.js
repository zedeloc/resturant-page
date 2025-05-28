class Header {
    header = document.querySelector('header');
    nav = document.createElement('nav');
    // small logo for header
    restaurantLogoDivSmall = document.createElement('div');
    logoSmall = document.createElement('h2');
    logoPhraseSmall = document.createElement('p');
    // nav buttons
    buttonHome = document.createElement('button')
    buttonMenu = document.createElement('button')
    buttonAbout = document.createElement('button')
    // resturant logo small
    makeLogo() {
        this.restaurantLogoDivSmall.classList += "logo";
        this.logoSmall.textContent = "Vomít"
        this.logoPhraseSmall.textContent = "Gastric delights inspired by gastric events...";
        this.restaurantLogoDivSmall.append(logoSmall, logoPhraseSmall);
        
    };

    buildHeader() {
        (() => {
            this.buttonHome.classList.add('button-home', 'nav-button');
            this.buttonHome.textContent = 'Home';
        });
        (() => {
            this.buttonMenu.classList.add('button-menu', 'nav-button');
            this.buttonMenu.textContent = 'Menu';
        });
        (() => {
                this.buttonAbout.classList.add('button-about', 'nav-button');
                this.buttonAbout.textContent = 'About';
        });
        (() => {this.nav.append(buttonHome, buttonMenu, buttonAbout)
        this.header.append(restaurantLogoDivSmall, nav)})();
    }
}

export { Header };