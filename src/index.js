import "./styles.css";
import "./reset.css";

import { buildHome } from "./home.js";
import { buildHeader } from "./header.js";
import { buildMenu } from "./menu.js";
import { buildAbout } from "./about.js";

const content = document.querySelector("#content");

buildHeader();
buildHome();

function clearContent() {
    content.replaceChildren();
}

