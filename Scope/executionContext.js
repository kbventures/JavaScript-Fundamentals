/* 

Reference:
https://medium.com/@digitaldaswani/scopes-in-javascript-cd3ddd5a17d1

Execution Context

Each a function is called an execution context  is created created like below.

In the case below they are "stacked on each other":


printName()
findName()
sayMyname()

Everytime javascript sees () bracket, that is an invocation
of the function it creates an execution context and adds it
to the call stack. 


*/


function printName(){
    return console.log("ken Beaudin");
}

function findName(){
    return printName();
}

function sayMyName(){
    return findName();
}

sayMyName();

/* 
Whenever javascript sees the these () bracket that is an
invocation of the function it creates an execution context and
adds it to the call stack. Here sayMyName is invoked, so javascript 
creates an execution context of sayMyName and add it to the call stack, 
the sayMyName function calls findName function and an execution
context is being created for findName function which is added to call 
stack finally printName is called so its execution context is also added
to the stack. When printName function execution is finished by returning 
the name it is popped off from the stack and then findName is popped 
off and then sayMyName is popped off.


printName()
findName()
sayMyname()
global()

Whenever javascript engine runs over code, It creates a global execution context 
under which our code gets executed. The global execution context is popped off from the 
stack when our last line of the code gets executed. For the global execution context, 
we can say that it is the first thing that is pushed to call stack by javascript engine and 
is the last execution context to be popped off from the stack.

The most important line I want to say is that: whenever any code is executed 
it is executed inside an execution context.


*/