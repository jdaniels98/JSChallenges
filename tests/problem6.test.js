const  { setCheck } = require("../problems/problem6")

describe("setCheck", () => {

    // this test should fail
    test("should return true", () => {
        setArray = ["1", "2", "1", "1", "1", "3"]
        expect(setCheck(setArray)).toBe(true)
    })

    // this test should succeed
    test("should return true", () => {
        setArray = ["1", "1", "1", "1", "1", "1"]
        expect(setCheck(setArray)).toBe(true)
    })

    // this test should succeed
    test("should return false", () => {
        setArray = ["test", "text", "test", "test", "test", "test"]
        expect(setCheck(setArray)).toBe(false)
    })

    // this test should fail
    test("should return false", () => {
        setArray = ["test", "test", "test", "test", "test", "test"]
        expect(setCheck(setArray)).toBe(false)
    })

    // this test should succeed
    test("should return false", () => {
        setArray = ["test", "test", "test", "test", "test", "test"]
        expect(setCheck(setArray)).not.toBe(false)
    })

    /*
    2 failed
    3 passed
    */

})