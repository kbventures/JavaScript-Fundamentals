const calculateSquare = require('../src/calculateSquare2');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


// We can't add several expect with a single return statement
// describe('calculateSquare2', function(){
//     this.timeout(4000);
//     it('should resolve with number 4 if passed 2', function(){
//         expect(calculateSquare(2)).to.eventually.be.above(5);
//         return expect(calculateSquare(2)).to.eventually.be.equal(4);
//     })

// })


// We can't add serval expects by using done/notify/done. In thise case
// 2 case will resolve even though there are only one and they will both fail
// 'Error: done() called multiple times

// describe('calculateSquare2', function(){
//     this.timeout(4000);
//     it('should resolve with number 4 if passed 2', function(done){
//         expect(calculateSquare(2)).to.eventually.be.above(5).notify(done);
//         expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
//     })
// })


// This is a way to test multiple expect/assertions for a test
describe('calculateSquare2', function(){
    this.timeout(4000);

    it('should resolve with number 4 if passed 2', function(){
        return calculateSquare(2).then(result => {
            expect(result).to.be.above(3);
            expect(result).to.be.equal(4);
        })
    });


    it('should return a rejected promise when passed a string', function(){
        return calculateSquare('string').catch((reason) => {
            expect(reason).to.be.not.equal(null);
            expect(reason.message).to.equal('Argument of type number is expected');
        })
    });
})


