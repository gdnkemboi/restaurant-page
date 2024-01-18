function loadMenuPage() {
    const contentTag = document.querySelector("div#content");
    contentTag.innerHTML = ""

    const menuTitle = document.createElement("h2")
    menuTitle.textContent = "Explore Our Culinary Creations"

    const appetizersTag = document.createElement("h5")
    const appetizersTagContent = document.createElement("p")
    appetizersTag.textContent = "Appetizers:"
    appetizersTagContent.textContent = "Start your culinary journey with our delectable selection of appetizers, perfect for sharing or savoring on your own."

    const mainCoursesTag = document.createElement("h5")
    const mainCoursesTagContent = document.createElement("p")
    mainCoursesTag.textContent = "Main Courses:"
    mainCoursesTagContent.textContent = "Indulge in our diverse range of main courses, crafted with passion and precision. From savory seafood to mouthwatering meats, there's something for every palate."

    const vegTag = document.createElement("h5")
    const vegTagContent = document.createElement("p")
    vegTag.textContent = "Vegetarian Delights:"
    vegTagContent.textContent = "Our vegetarian options are a celebration of fresh, seasonal produce. Experience the vibrant flavors of thoughtfully crafted plant-based dishes."

    const dessertsTag = document.createElement("h5")
    const dessertsTagContent = document.createElement("p")
    dessertsTag.textContent = "Desserts:"
    dessertsTagContent.textContent = "Conclude your meal on a sweet note with our irresistible dessert menu. Each dessert is a work of art, made to satisfy your sweet cravings."

    const beveragesTag = document.createElement("h5")
    const beveragesTagContent = document.createElement("p")
    beveragesTag.textContent = "Beverages:"
    beveragesTagContent.textContent = "Quench your thirst with our selection of beverages, including handcrafted cocktails, fine wines, and refreshing non-alcoholic options."

    contentTag.appendChild(menuTitle)
    contentTag.appendChild(appetizersTag)
    contentTag.appendChild(appetizersTagContent)
    contentTag.appendChild(mainCoursesTag)
    contentTag.appendChild(mainCoursesTagContent)
    contentTag.appendChild(vegTag)
    contentTag.appendChild(vegTagContent)
    contentTag.appendChild(dessertsTag)
    contentTag.appendChild(dessertsTagContent)
    contentTag.appendChild(beveragesTag)
    contentTag.appendChild(beveragesTagContent)
}

export {loadMenuPage}