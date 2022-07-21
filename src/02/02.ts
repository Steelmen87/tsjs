type TechnologiesType = {
    id: number
    title: string
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: "Dmitri",
    age: 34,
    isActive: false,
    address: {
        streetTitle: "Syrganove",
        city: {
            title: "Minsk",
            countryTitle: "Bel"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "React"},
        {id: 3, title: "css"},
    ]
}
// console.log(student.technologies[2].title)