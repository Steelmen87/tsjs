type UsersType = {
    [key: string]: { id: number, name: string }
}
export const users: UsersType = {
    '181': {id: 181, name: 'Dimuch'},
    '1212': {id: 1212, name: 'Natasha'},
    '331321': {id: 331321, name: 'Sveta'},
    '1': {id: 1, name: 'Valera'},
}
let user = {id: 100500, name: "John"}
users[user.id] = user
//delete users[user.id]
users[user.id].name = 'SVataaa'

export const UserArray = [
    {id: 181, name: 'Dimuch'},
    {id: 1212, name: 'Natasha'},
    {id: 331321, name: 'Sveta'},
    {id: 1, name: 'Valera'},
]