const  { countVowel } = require("../problems/problem3")

describe("countVowel", () => {

    // this test should succeed
    test("should return 9", () => {
        const string = "There should be nine vowels"
        expect(countVowel(string)).toBe(9)
    })

    // this test should fail
    test("should return 9", () => {
        const string = "There should be nine vowels"
        expect(countVowel(string)).not.toBe(9)
    })

    // this test should fail
    test("should return 9", () => {
        const string = "There might be even more than nine vowels"
        expect(countVowel(string)).toBe(58)
    })

    // this test should succeed
    test("should return 9", () => {
        const string = "There should be a lot more than nine vowels this time"
        expect(countVowel(string)).toBeLessThan(90)
    })

    // this test should succeed
    test("should return 9", () => {
        const string = "There should be a lot more than nine vowels this time"
        expect(countVowel(string)).not.toBeLessThan(10)
    })

    /*
    2 failed
    3 passed
    */

})