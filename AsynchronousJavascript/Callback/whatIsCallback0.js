/* 

Callback is any function that passes a function as an
 an argument to another function, and then invoked from within that function.


 A programming language is said to have First-class functions when functions in that 
language are treated like other varibles. For example, in such a language, a function
can be passed as an argument to other functions, can be returned by another function and
can be assigned as a value to a varible. 

*/


function print(number){
    console.log(number);
}

const numbers =[1,2,3,4];
numbers.forEach(print);