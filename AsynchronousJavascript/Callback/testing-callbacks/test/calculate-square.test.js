
const calculateSquare = require('../calculate-square.js');
const expect = require('chai').expect;

describe('calculateSquare', function () {
    // demonstration of error if setup of sync test for asyn function
    it('should return 4 if passed 2', function () {
        calculateSquare(2, function (error, result) {
            console.log("Testing Incorrest way");
            expect(result).to.equal( 4);

        });
    });


    // asynchronous testing
    it('should return 4 if passed 2', function (done) {
        calculateSquare(2, function (error, result) {
            console.log("Testing correct");
            expect(result).to.equal( 4);
            done();
        });
    });

    it('should return an error if passed string', function (done) {
        calculateSquare('string', function (error, result) {
            expect(error).to.not.equal(null);
            expect(error.message).to.equal('Argument of type number is expected');
            done();
        });
    });    
});




