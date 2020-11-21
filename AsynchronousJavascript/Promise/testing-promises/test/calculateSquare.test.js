const calculateSquare = require('../src/calculateSquare');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


// We use return because these are asynchronous test

// describe('calculateSquare', function(){
//     it('should resolve with number 4 if passed 2', function(){
//         return expect(calculateSquare(2)).to.eventually.be.equal(4);
//     })
//     it('should become fufilled when passed 2', function(){
//         return expect(calculateSquare(2)).to.be.fulfilled;
//     })
//     it('should become rejected if passed a string instead of a nuber', function(){
//         return expect(calculateSquare('string')).to.be.rejected;
//     })
// })


// If you can't use return in your test you can use a another way: 

describe('calculateSquare', function(){
    it('should resolve with number 4 if passed 2', function(done){
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    })
    it('should become fufilled when passed 2', function(done){
        expect(calculateSquare(2)).to.be.fulfilled.notify(done);
    })
    it('should become rejected if passed a string instead of a nuber', function(done){
        expect(calculateSquare('string')).to.be.rejected.notify(done);
    })
})

// If you remove return, dones and notify then the test will always pass
// because the test is no long asynchronous.  The test doesn't wait for
// the promise to return

