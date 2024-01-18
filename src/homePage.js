function loadHomePage() {
  const contentTag = document.querySelector("div#content");
  contentTag.innerHTML = ""

  const welcomeTitle = document.createElement("h3");
  welcomeTitle.textContent = "Welcome to Poppy's,";

  const welcomeContent = document.createElement("p");
  welcomeContent.textContent =
    "where culinary delights meet a warm and inviting atmosphere. Our passion for exceptional food and memorable dining experiences is at the heart of everything we do.";

  const chefTag = document.createElement("h5");
  chefTag.textContent = "Chef's Specials";

  const chefTagContent = document.createElement("p");
  chefTagContent.textContent =
    "Explore our chef's latest creations, designed to tantalize your taste buds and showcase the best of our culinary expertise.";

  const eventsTag = document.createElement("h3");
  eventsTag.textContent = "Events";

  const eventsTagContent = document.createElement("p");
  eventsTagContent.textContent =
    "Stay updated on upcoming events, special promotions, and themed nights that add an extra layer of excitement to your dining experience.";

  const reservationsTag = document.createElement("h5");
  reservationsTag.textContent = "Reservations";

  const reservationsTagContent = document.createElement("p");
  reservationsTagContent.textContent =
    "Secure your spot at our tables by making a reservation online. We look forward to hosting you and ensuring a memorable dining experience.";

  contentTag.appendChild(welcomeTitle);
  contentTag.appendChild(welcomeContent);
  contentTag.appendChild(chefTag);
  contentTag.appendChild(chefTagContent);
  contentTag.appendChild(eventsTag);
  contentTag.appendChild(eventsTagContent);
  contentTag.appendChild(reservationsTag);
  contentTag.appendChild(reservationsTagContent);
}

export { loadHomePage } ;
