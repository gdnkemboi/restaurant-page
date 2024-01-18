import { loadHomePage } from "./homePage";
import { loadMenuPage } from "./menuPage";
import { loadContactsPage } from "./contactsPage";

loadHomePage();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  loadHomePage();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
  loadMenuPage();
});

const contactsBtn = document.querySelector("#contacts");
contactsBtn.addEventListener("click", () => {
  loadContactsPage();
});