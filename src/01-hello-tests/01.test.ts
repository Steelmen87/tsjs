import {multiplication, sentence, splitIntoWords, sumNumber} from './01'

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {

    const result1 = sumNumber(a, b)
    const result2 = sumNumber(b, c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test('multiplication should be correct', () => {

    const result1 = multiplication(a, b)
    const result2 = multiplication(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})
test('splitIntoWords should be correct', () => {
    const sent2 = "Js - the best programming language."
    const result2 = splitIntoWords(sent2)

    expect(result2.length).toBe(6)
    expect(result2[0]).toBe('j s')
})