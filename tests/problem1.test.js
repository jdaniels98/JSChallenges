const  { longestWord } = require("../problems/problem1")

describe("longestWord", () => {
    
    // this test should succeed
    test("should return developer", ()  => {
        const testArray = ["i", "developer", "food", "floor"]
        expect(longestWord(testArray)).toBe("developer")
    })

    // this test should succeed
    test("should return a value with length 5", ()  => {
        const testArray = ["i", "dog", "brood", "food"]
        expect(longestWord(testArray)).toHaveLength(5)
    })

    // this test should fail
    test("should return a value with length 5", ()  => {
        const testArray = ["i", "dog", "brood", "food", "testing"]
        expect(longestWord(testArray)).toHaveLength(5)
    })

    // this test should succeed
    test("should not return with a value of 2", ()  => {
        const testArray = ["i", "dog", "brood", "food"]
        expect(longestWord(testArray)).not.toHaveLength(2)
    })
    
    // this test should succeed
    test("should not return with a value of 4", ()  => {
        const testArray = ["i", "dog", "ate", "food"]
        expect(longestWord(testArray)).not.toHaveLength(4)
    })

    /*
    2 failed
    3 passed
    */
   
})