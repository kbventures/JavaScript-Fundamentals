function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            throw new Error('Argument of type number is expected');
        }
        const result = number * number;
        callback(result);
    }, 1000);
}



module.exports = calculateSquare;