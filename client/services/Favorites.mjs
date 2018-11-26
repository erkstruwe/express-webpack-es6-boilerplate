export function load() {
    return JSON.parse(localStorage.getItem("favorites"))
}

export function save(favorites) {
    return localStorage.setItem("favorites", JSON.stringify(favorites))
}
