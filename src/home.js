import splotch from "./images/splotch.png";
import restaurantPic from "./images/restaurant/panagiotis-falcos-kqcsKoE4eik-unsplash.jpg";

export function buildHome() {
    const restaurantLogoDiv = document.createElement('div');
    const logo = document.createElement('h1');
    const logoPhrase = document.createElement('p');
    const splotchLogoLarge = document.createElement('img');
    const imageRest = document.createElement('img')
    imageRest.classList.add('image-homepage');
    imageRest.src = restaurantPic
    splotchLogoLarge.classList.add('splotch-logo-large');
    splotchLogoLarge.src = splotch;

    restaurantLogoDiv.classList += "logo";
    logo.textContent = "Vomít";
    logoPhrase.textContent = "Gastric delights inspired by gastric events...";


    const story = document.createElement('p');
    story.classList = 'story'
    story.textContent = "Vomít prides ourselves in providing an intense and overwhelming dining experience that will make you expel any doubt. Our food will settle and brew such a sensation that you'll wish to re-experience our cuisine. In fact, most of our customers get to experience our meals twice.";
    logo.append(splotchLogoLarge)
    restaurantLogoDiv.append(logo, logoPhrase);
    content.append(restaurantLogoDiv, imageRest, story);
}
