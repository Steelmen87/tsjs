import {CiyType, governmentBuildingsType} from "./04.test";

export const ages = [18, 20, 1, 100, 90, 14]

export const Predicate = (age: number) => {
    return age > 90;
}
const oldAges = [100];

const courses = [
    {title: "css", price: 110},
    {title: "js", price: 200},
    {title: "react", price: 150},
]
export const chipPredicate = (course: { title: string, price: number }) => {
    return course.price < 160;
}

export function demolishHouseOnTheStreet(city04: CiyType, street: string) {
    city04.houses = city04.houses.filter(house => {
        return house.address.street.title !== street
    })
}

export const getBuildings = (buildings: Array<governmentBuildingsType>, num: number) => {
    return buildings.filter(b => b.staffCount > num)
}