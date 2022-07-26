import DestructuredAssignment from './Destructured_Assignment'

export type propsType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}
let props: propsType;
beforeEach(() => {
    props = {
        name: 'Kosmos',
        age: 32,
        lessons: [
            {title: '1'},
            {title: '2'},
        ],
        address: {
            street: {
                title: 'No name'
            }
        }
    }
})
test('Destructured assignment', () => {
    /*
    let age = props.age
    let lessons = props.lesson*/
    const {age:a, lessons:l} = props
    expect(a).toBe(32)
    expect(l.length).toBe(2)
})