import {StudentType} from "../02/02";
import {addSkill, doseStudentLivInCty, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dmitri",
        age: 34,
        isActive: false,
        address: {
            streetTitle: "Syrganove",
            city: {
                title: "Moscow",
                countryTitle: "Bel"
            }
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id: 2, title: "React"},
            {id: 3, title: "css"},
        ]
    }
})

test('new tech skill should be add', () => {
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    //id  - определён
    expect(student.technologies[3].id).toBeDefined()
})
test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})
test('student live in city', () => {
    let result = doseStudentLivInCty(student,"Moscow")
    expect(result).toBe(true)
})