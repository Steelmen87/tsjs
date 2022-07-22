import {DimychTransformator, ManType, people} from "./05";

beforeEach(()=>{
    let people: Array<ManType> = [
        {name: "Andrei Ivanov", age: 33},
        {name: "Alex Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 24},
    ]
})
test('people-> devs', () => {
    let devs = people.map(DimychTransformator)
    expect(devs.length).toBe(3)
    expect(devs[0].stack[0]).toBe('css,html')
})