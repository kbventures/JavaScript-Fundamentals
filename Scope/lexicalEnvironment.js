/* 

Lexical Environment means where you write your code not how it gets 
executed. 

*/


function findName(){
    function printName(){
        function logMyName(){
            console.log('Logged: Ken Beaudin');
        }
        logMyName()
        return "Ken Beaudin";
    }
    return printName();
}

function sayMyName(){
    return findName()
}

sayMyName();

/*

Each Execution context has its own lexical environment.

In the Global execution context, our lexical environement contains 
findName and sayMyName function.

findName execution context has its own lexical environment which
contains printName function.

printName execution context has its own lexical environment which contains
logMyName function

Lexical environement theres where your code is written and each 
execution context has its own lexical environment. 
*/