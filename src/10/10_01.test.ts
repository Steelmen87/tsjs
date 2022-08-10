import {
    addCompaniesBook,
    addNewBooks,
    changeBook,
    makeHairStyle,
    moveUser, removeBook,
    upgradeCompanies, upgradeCompaniesArray,
    upgradeLaptop, upType,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'John',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
    expect(user.hair).toBe(32)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'John',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'}
    }
    const movedUser = moveUser(user, 'Kiev')
    expect(movedUser).not.toBe(user)
    expect(movedUser.address.city).toBe('Kiev')
    expect(movedUser.laptop).toBe(user.laptop)

})
test('upgrade laptop to Mac', () => {
    let user: UserWithLaptopType = {
        name: 'John',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const upgradeUserLaptop = upgradeLaptop(user, 'MacBook')

    expect(upgradeUserLaptop.laptop).not.toBe(user.laptop)
    expect(upgradeUserLaptop.laptop.title).toBe('MacBook')

})
test('add new books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'John',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'react', 'css']
    }
    const upgradeUserBooks = addNewBooks(user, ['www', 'Http'])
    expect(upgradeUserBooks.books.length).toBe(5)
    expect(upgradeUserBooks.books).not.toBe(user.books)
    expect(upgradeUserBooks.books[4]).not.toBe('www')
    expect(upgradeUserBooks.laptop.title).toBe('ZenBook')

})
test('Change js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'John',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'react', 'css']
    }
    const upgradeUserBooks = changeBook(user, 'TS')
    expect(upgradeUserBooks.books.length).toBe(3)
    expect(upgradeUserBooks.books[0]).toBe('TS')


})
test('Companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'John',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT_INCUBATOR'}]
    }
    const upgradeUserBooks = addCompaniesBook(user, 'Google')
    expect(upgradeUserBooks.companies.length).toBe(3)
    expect(upgradeUserBooks.companies[2].title).toBe('Google')


})
test('Update Companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'John',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT_INCUBATOR'}]
    }
    const upgrCompanies = upgradeCompanies(user, 1, 'Google') as UserWithLaptopType & WithCompaniesType
    expect(upgrCompanies.companies[0].title).toBe('Google')
    expect(upgrCompanies.address).toBe(user.address)


})

test('Update Companies Array', () => {

    let companies:upType = {
        'Dimach': [{id: 1, title: 'Epam'}, {id: 2, title: 'IT_INCUBATOR'}],
        'Viktor': [{id: 2, title: 'IT_INCUBATOR'}]
    }
    let copy = upgradeCompaniesArray(companies, 'Dimach', 1, 'Google')
    expect(copy['Dimach']).not.toBe(companies['Dimach'])
    expect(copy['Dimach'][0].title).toBe('Google')
})