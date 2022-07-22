import {createMessages, DimychTransformator, getStreetsTitleOfGovermentBuildings, ManType, people} from "./05";
import {CiyType} from "../04/04.test";
let city05: CiyType;
beforeEach(() => {
    city05 = {
        title: "",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address:
                    {
                        number: 100,
                        street: {
                            title: "White street"
                        }
                    }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address:
                    {
                        number: 100,
                        street: {
                            title: "Happy street"
                        }
                    }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address:
                    {
                        number: 101,
                        street: {
                            title: "Happy street"
                        }
                    }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 180,
                    street: {
                        title: "Central str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 180,
                    street: {
                        title: "South str"
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})
test('people-> devs', () => {
    let devs = people.map(DimychTransformator)
    expect(devs.length).toBe(3)
    expect(devs[0].stack[0]).toBe('css,html')
})
test('list of streets titles of goverments ', () => {
    let streets = getStreetsTitleOfGovermentBuildings(city05.governmentBuildings)
    expect(streets[0]).toBe("Central str")
    expect(streets[1]).toBe("South str")
})
test('createMessages ', () => {
    let messages = createMessages(city05.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street")
})



