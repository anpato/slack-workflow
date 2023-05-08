const methods = require('./index')
describe('My Test', function () {
    it('should count to 10', ()=> {
        const nums = methods.countTo10()
        expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10])
    })

    it('should return string of name', () =>{
        expect(methods.logName()).toBe("Name")
    })
});