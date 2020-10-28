/* 

Variable Environment

Which variables reside inside the execution context is deinfed by the
variable environement. All variables in you code has memory allocation
in-memory heap but which variables are attached to execution context
is defined by variable environment.

*/


function two(){
    var isValid;
    console.log('Value isValid from two func: '+isValid);
}

function one(){
    var isValid = true;
    two();
    console.log('Value isValid from one func: '+isValid);
}

var isValid = false;
one();
console.log('Value of isValid from global variable env: '+isValid);

/*

Value of isValid
from two() --undefined
from one() --true
from global --false

*/

