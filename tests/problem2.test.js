const  { sumOfArray } = require("../problems/problem2")

describe("sumOfArray", () => {

    // this test should succeed
    test("should return 100", ()  => {
        const testArray = [10, 15, 30, 45]
        expect(sumOfArray(testArray)).toBe(100)
    })

    // this test should fail
    test("should return 100", ()  => {
        const testArray = [10, 20, 30, 40, 50]
        expect(sumOfArray(testArray)).toBe(100)
    })

    // this test should suceed
    test("should not return 550", ()  => {
        const testArray = [12, 60, 450, 4, 15]
        expect(sumOfArray(testArray)).not.toBe(550)
    })

    // this test should succeed
    test("should return 541", ()  => {
        const testArray = [1, 2, 3, 4, 5]
        expect(sumOfArray(testArray)).not.toBeGreaterThan(50)
    })

    // this test should fail
    test("should be greater than 50", ()  => {
        const testArray = [1, 2, 3, 4, 5]
        expect(sumOfArray(testArray)).toBeGreaterThan(25)
    })

    /*
    2 failed
    3 passed
    */
   
})