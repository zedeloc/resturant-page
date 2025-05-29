export function buildHome() {
    const restaurantLogoDiv = document.createElement('div');
    const logo = document.createElement('h1');
    const logoPhrase = document.createElement('p');

    restaurantLogoDiv.classList += "logo";
    logo.textContent = "Vomít";
    logoPhrase.textContent = "Gastric delights inspired by gastric events...";


    const story = document.createElement('p');
    story.classList = 'story'
    story.textContent = "Vomít prides itself in providing an intense and overwhelming dining experience that will make you expel any doubt. Our food will settle and brew such a sensation that you'll wish to re-experience our cuisine. In fact, most of our customers get to experience our meals twice."
    restaurantLogoDiv.append(logo, logoPhrase);
    content.append(restaurantLogoDiv, story);
}
