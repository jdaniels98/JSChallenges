const  { negCheck } = require("../problems/problem5")

describe("negCheck", () => {

    // this test should succeed
    test("should return 3", () => {
        negArray= [3, 4, -5, -3, 2, 15, 0, -1]
        expect(negCheck(negArray)).toBe(3)
    })

    // this test should fail
    test("should return 3", () => {
        negArray= [3, 4, -5, -3, 2, 15, 0, -1, -4]
        expect(negCheck(negArray)).toBe(3)
    })

    // this test should succeed
    test("should return 0", () => {
        negArray= [3, 4, 5, 2, 15, 0, 1, 19]
        expect(negCheck(negArray)).toBe(0)
    })

    // this test should fail
    test("should return 5", () => {
        negArray= [1, 67, -754, -13, 200, 125, 150, -1, -66, 15, -8]
        expect(negCheck(negArray)).not.toBe(5)
    })

    // this test should succeed
    test("should return 13", () => {
        negArray= [-3, -4, -5, -31, -2, -15, -10, -148, -20, -55, -76, -873, -92]
        expect(negCheck(negArray)).toBe(13)
    })

    /*
    2 failed
    3 passed
    */

})