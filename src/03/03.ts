import {student, StudentType} from "../02/02";
import {governmentBuildingsType, HouseType} from "../02/02_02";

export function sum(a: number, b: number) {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}
export const doseStudentLivInCty = (student: StudentType, city: string) => {
    return student.address.city.title === city
}
export const addMoneyToBudget = (governmentBuildingsType: governmentBuildingsType, number: number) => {
    governmentBuildingsType.budget += number
}
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}