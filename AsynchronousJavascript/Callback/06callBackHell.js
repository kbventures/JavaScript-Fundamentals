/*

// This will not have the intented effect
// Instead of waiting for 1sec after each is done
// It displays all of them after one second
// Javascript engines makes note to run all three functions
// in one second from the moment they are processed


function calculateSquare(number,callback){
    setTimeout(function(){
        if(typeof number !== 'number'){
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    },1000);
}

calculateSquare(1, function(error,result){
    console.log(result);
});

calculateSquare(2, function(error,result){
    console.log(result);
});

calculateSquare(3, function(error,result){
    console.log(result);
});


FIX Coming next: 
*/ 



function calculateSquare(number,callback){
    setTimeout(function(){
        if(typeof number !== 'number'){
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    },1000);
}

calculateSquare(1, function(error,result){
    console.log(result);
    calculateSquare(2, function(error,result){
        console.log(result);
        calculateSquare(3, function(error,result){
            console.log(result);
            calculateSquare(4, function(error,result){
                console.log(result);
                calculateSquare(5, function(error,result){
                    console.log(result);
                    calculateSquare(6, function(error,result){
                        console.log(result);
                        
                    });
                });
            });
            
        });
    });
});



