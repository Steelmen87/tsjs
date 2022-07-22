import {ages, chipPredicate, demolishHouseOnTheStreet, getBuildings, Predicate} from "./04";

test('old 90', () => {
    let AGE = ages
    let old = AGE.filter(Predicate)
    expect(old.length).toBe(1);
    expect(old[0]).toBe(100);
})
test('chipCurses', () => {
    const courses = [
        {title: "css", price: 110},
        {title: "js", price: 200},
        {title: "react", price: 150},
    ]
    let chip = courses.filter(chipPredicate)
    expect(chip.length).toBe(2);
    expect(chip[0].title).toBe("css");
})
test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 1, title: "Milk", isDone: true},
        {id: 1, title: "Oil", isDone: false},
        {id: 1, title: "Sugar", isDone: true},
    ]
    let completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe("Milk");
})
type StreetType = {
    title: string
}
type addressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: addressType
}
export type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: addressType
}
export type CiyType = {

    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}
let city04: CiyType;
beforeEach(() => {
    city04 = {

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
test('Houses should be destroyed', () => {
    demolishHouseOnTheStreet(city04,"Happy street")
    expect(city04.houses.length).toBe(1)
    expect(city04.houses[0].id).toBe(1)

})
test('Buildings', () => {
    let buildings = getBuildings(city04.governmentBuildings,500)
    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")

})


