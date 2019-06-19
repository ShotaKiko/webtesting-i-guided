const { add } = require('./calculator.js');

// test away!
describe('the add function', () => {
    //test runner
    it('should add two values', () => {
        const result = add(2,2)

        //assertion
        expect(result).toBe(4)
        expect(add(-1, 4)).toBe(3)
        expect(add(0, 6)).toBe(6)
    })

    it('should return 0 as a default when no arguments are provided', () => {
        expect(add()).toBe(0)
    })

    it('should return the passed in value if only one arg is provided', () => {
        expect(add(22)).toBe(22)
        expect(add(3)).toBe(3)
    })

    it('should be able to add any number of values', () => {
        expect(add(1, 2, 3)).toBe(6)
        expect(add(1, 2, 3, 10, 12)).toBe(28)
    })

    it('should accept an array as an argument', () => {
        expect(add([1,2,3,4])).toBe(10)
        expect(add([])).toBe(0)
        expect(add([4])).toBe(4)
    })
})