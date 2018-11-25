// https://vpic.nhtsa.dot.gov/api/

export const Vehicles = {
    async getMakes() {
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
    },

    async getModelsByMakeId(makeId) {
        // TODO: https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json
        return [
            {id: 1, name: "V8 Vantage"},
            {id: 2, name: "V12 Ultra"},
        ]
    },

    async imageUrl(query) {
        // TODO: https://contextualwebsearch.com/api/Search/ImageSearchAPI?q=Aston%20Martin%20Vantage%20V8&count=1&autoCorrect=false
        return "https://www.tuningnews.net/news/071019/mansory_aston_martin_vantage_v8.jpg"
    }
}
