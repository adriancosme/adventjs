import { findNaughtyStep } from "."

describe("Challenge #3: 😏 The naughty elf", () => {
    it('Should return "e"', () => {
        const original = 'abcd'
        const modified = 'abcde'
        expect(findNaughtyStep(original, modified)).toEqual("e")
    })

    it('Should return "f"', () => {
        const original = 'stepfor'
        const modified = 'stepor'
        expect(findNaughtyStep(original, modified)).toEqual("f")
    })

    it("Should return ''", () => {
        const original = 'abcde'
        const modified = 'abcde'
        expect(findNaughtyStep(original, modified)).toEqual("")
    })
})