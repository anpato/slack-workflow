const methods = require('./index')
describe('My Test', function () {
    beforeEach(()=> {
        jest.setTimeout(4000)
    })

    it('should count to 10',async ()=> {
        const nums = await methods.countTo10()
        expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10])
    })

    it('should return string of name', () =>{
        expect(methods.logName()).toBe("Name")
    })

    it('should do fib', ()=> {
        const fib = methods.fib(100)
        expect(fib).toBe(354224848179262000000)
    })
});