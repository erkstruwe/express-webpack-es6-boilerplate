import "babel-polyfill"
import "bootstrap/scss/bootstrap.scss"

import {Vehicles} from "./services/Vehicles"
import {template} from "./services/Template"

import modelTemplate from "./templates/model.html"

document.addEventListener("DOMContentLoaded", () => {
    // Storage (TODO: not a service yet)
    localStorage.setItem("favorites", JSON.stringify([{makeId: 440, modelId: 1684}])) // TODO: overwriting value on each page load. set after user interaction instead.
    const favorites = JSON.parse(localStorage.getItem("favorites"))
    document.getElementById("favorites").innerHTML = JSON.stringify(favorites) // TODO: don't just show as JSON string.

    // Template service
    document.getElementById("test").innerHTML = template(modelTemplate)({id: 1, name: "Test model"})

    // Vehicle service
    Vehicles.getMakes()
        .then((makes) => {
            const makesList = document.getElementById("makes")
            for (const make of makes) {
                makesList.innerHTML += `<li>${make.id}: ${make.name}</li>`
            }
        })
})
