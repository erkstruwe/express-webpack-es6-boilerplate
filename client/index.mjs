import "babel-polyfill"
import "bootstrap/scss/bootstrap.scss"

import {load, save} from "./services/Favorites"
import {template} from "./services/Template"
import {getMakes} from "./services/Vehicles"

import modelHtml from "./templates/model.html"

document.addEventListener("DOMContentLoaded", () => {
    // Favorites service
    save([{makeId: 440, modelId: 1684}]) // TODO: overwriting value on each page load. set after user interaction instead.
    const favorites = load()
    document.getElementById("favorites").innerHTML = JSON.stringify(favorites) // TODO: don't just show as JSON string.

    // Template service
    document.getElementById("test").innerHTML = template(modelHtml)({id: 1, name: "Test model"})

    // Vehicle service
    getMakes()
        .then((makes) => {
            const makesList = document.getElementById("makes")
            for (const make of makes) {
                makesList.innerHTML += `<li>${make.id}: ${make.name}</li>`
            }
        })
})
