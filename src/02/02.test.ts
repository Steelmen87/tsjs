import {CiyType} from "./02_02";

let city: CiyType;
beforeEach(() => {
    city = {
        title: "",
        houses: [
            {
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
test('test city should contains 3 houses', () => {
    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");
})
test('test city governmentBuildings', () => {
    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central str");
})