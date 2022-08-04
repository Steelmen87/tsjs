export type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType
beforeEach(() => {
    users = {
        '181': {id: 181, name: 'Dimuch'},
        '1212': {id: 1212, name: 'Natasha'},
        '331321': {id: 331321, name: 'Sveta'},
        '1': {id: 1, name: 'Valera'},
    }
})


test('Should be',()=>{
    users['1'].name = 'Ekaterina'
    expect(users['1'].name).toBe('Ekaterina')
    expect(users['1']).toStrictEqual({id: 1, name: 'Ekaterina'})
})