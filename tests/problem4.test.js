const  { checkDivide } = require("../problems/problem4")

describe("checkDivide", () => {

    // this test should succeed
    test("should return 50", () => {
        expect(checkDivide(5, 10)).toBe(50)
    })

    // this test should succeed
    test("should return 2", () => {
        expect(checkDivide(10, 5)).toBe(2)
    })

    // this test should succeed
    test("should not return 5", () => {
        expect(checkDivide(12, 5)).not.toBe(5)
    })

    // this test should fail
    test("should return 2", () => {
        expect(checkDivide(12, 7)).toBe(2)
    })

    // this test should fail
    test("should return 15", () => {
        expect(checkDivide(200, 10)).toBe(15)
    })

    /*
    2 failed
    3 passed
    */
    
})