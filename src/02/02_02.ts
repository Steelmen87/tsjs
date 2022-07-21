type StreetType = {
    title: string
}
type addressType = {
    number: number
    street: StreetType
}
export type HouseType = {
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
    citizensNumber: 1000000
}