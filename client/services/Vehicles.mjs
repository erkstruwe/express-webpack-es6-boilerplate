// https://vpic.nhtsa.dot.gov/api/

export async function getMakes() {
    return fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
        .then((response) => response.json())
        .then((response) => {
            return response["Results"].map((make) => {
                return {
                    id: make.MakeId,
                    name: make.MakeName,
                }
            })
        })
}

export async function getModelsByMakeId(makeId) {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`)
    const json = response.json()
    return json
}

export async function imageUrl(query) {
    // TODO: https://contextualwebsearch.com/api/Search/ImageSearchAPI?q=Aston%20Martin%20Vantage%20V8&count=1&autoCorrect=false
    return "https://www.tuningnews.net/news/071019/mansory_aston_martin_vantage_v8.jpg"
}
