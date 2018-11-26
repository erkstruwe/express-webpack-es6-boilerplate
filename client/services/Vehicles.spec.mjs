import {getMakes} from "./Vehicles.mjs"

describe("Vehicles service", function () {
    describe("getMakes function", function () {
        beforeEach(function () {
            this.fetchSpy = spyOn(global, "fetch").and.returnValue({
                json: () => [{MakeId: 1, MakeName: "Test"}],
            })
        })
        xit("should map the HTTP response", async function () {
            const makes = await getMakes()
            expect(Array.isArray(makes)).toBe(true)
            expect(makes.length).toBe(1)
            expect(makes[0].id).toBe(1)
            expect(makes[0].name).toBe("Test")
        })
    })
})
