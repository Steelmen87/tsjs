export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }

}
type LaptopType = { title: string }
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type  WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city
        }
    }

}

export function upgradeLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }

}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...books]
    }

}

export function changeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: u.books.map(b => b === 'JS' ? book : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== oldBook)
    }
}
export function addCompaniesBook(u: UserWithLaptopType & WithCompaniesType, newCompanies: string) {
    return {
        ...u,
        companies: [...u.companies, {id:3,title:newCompanies}]
    }
}
