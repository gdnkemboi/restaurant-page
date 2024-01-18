function loadContactsPage() {
  const contentTag = document.querySelector("div#content");
  contentTag.innerHTML = "";

  const contactsTitle = document.createElement("h2");
  contactsTitle.textContent = "Get in Touch";

  const location = document.createElement("h5");
  location.textContent = "Location:";

  const locationList = document.createElement("ul");
  const locationContent = [
    "Poppy's",
    "123 Main Street",
    "Cityville, Stateburg 54321",
  ];

  for (let i = 0; i < locationContent.length; i++) {
    const li = document.createElement("li");

    li.textContent = locationContent[i];

    locationList.appendChild(li);
  }

  const phone = document.createElement("h5");
  const phoneContent = document.createElement("p");
  phone.textContent = "Phone:";
  phoneContent.textContent =
    "For reservations or inquiries, please call us at  +254-727 678 797";

  const email = document.createElement("h5");
  const emailContent = document.createElement("p");
  email.textContent = "Email:";
  emailContent.textContent =
    "Have questions or special requests? Reach out to us at enquiry@poppys.com";

  const operatingHours = document.createElement("h5");
  operatingHours.textContent = "Operating Hours:";

  const operatingHoursList = document.createElement("ul");
  const times = [
    "Monday to Friday: 11:00 AM - 9:00 PM",
    "Saturday: 12:00 PM - 10:00 PM",
    "Sunday: 1:00 PM - 8:00 PM",
  ];

  for (let i = 0; i < times.length; i++) {
    const li = document.createElement("li");

    li.textContent = times[i];

    operatingHoursList.appendChild(li);
  }

  contentTag.appendChild(contactsTitle);
  contentTag.appendChild(location);
  contentTag.appendChild(locationList);
  contentTag.appendChild(phone);
  contentTag.appendChild(phoneContent);
  contentTag.appendChild(email);
  contentTag.appendChild(emailContent);
  contentTag.appendChild(operatingHours);
  contentTag.appendChild(operatingHoursList);
}

export { loadContactsPage };
