const calculateSquare = require('../src/calculateSquare1');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

// describe('calculateSquare', function(){
//     it('should resolve with number 4 if passed 2', function(){
//         return expect(calculateSquare(2)).to.eventually.be.equal(4);
//     })

// })

// we changed the calculateSquare time out from 1000 to 3000
// then when we run test again we get this error Error: Timeout of 2000ms exceeded. 
// Mocha allows only 2 seconds(2000ms)
// It is possible to increase this limit. 'this.timeout(ms);
// This fix is needed for every test

describe('calculateSquare1', function(){
    it('should resolve with number 4 if passed 2', function(){
        this.timeout(3000);
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
    })

    // This test would fail
    // it('should resolve with number 4 if passed 2', function(){
    //     return expect(calculateSquare(2)).to.eventually.be.equal(4);
    // })

})


// The example below will fix all the time outs with one line of code:


// describe('calculateSquare', function(){
//     this.timeout(4000);
//     it('should resolve with number 4 if passed 2', function(){
//         return expect(calculateSquare(2)).to.eventually.be.equal(4);
//     })


//     it('should resolve with number 9 if passed 3', function(){
//         return expect(calculateSquare(3)).to.eventually.be.equal(9);
//     })

// })