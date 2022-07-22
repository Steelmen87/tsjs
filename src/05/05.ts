import {governmentBuildingsType, HouseType} from "../04/04.test";

export type ManType = {
    name: string
    age: number
}
export const people: Array<ManType> = [
    {name: "Andrei Ivanov", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 24},
]
export const DimychTransformator = (man: ManType) => ({
    stack: ['css,html', 'js', 'React'],
    firstName: man.name.split(' ')[0], lastName: man.name.split(' ')[1]
})

export const getStreetsTitleOfGovermentBuildings = (buildings: Array<governmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}
export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}