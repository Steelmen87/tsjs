import {makeHairStyle, moveUser, upgradeLaptop, UserType, UserWithLaptopType} from "./10_01";


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