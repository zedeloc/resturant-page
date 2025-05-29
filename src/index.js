import "./styles.css";
import "./reset.css";

import { buildHeader, buildAbout, buildHome, buildMenu } from "./header.js";


const content = document.querySelector("#content");

buildHeader();
buildHome();



