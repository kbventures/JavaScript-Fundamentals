function printNumber1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('printNumber1 is done');
            resolve(1);
        },1000);
    });
}

function printNumber2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('printNumber2 is done');
            resolve(2);
        },1000);
    });
}

// Sequential execution
async function oneByOne(){
    const number1 = await printNumber1;
    const number2 = await printNumber2;
    console.log(number1, number2);
}

oneByOne();

// in example above we have a delay of one second 
// they are therefore run sequentially

//Parallel execution
async function inParallel(){
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    const number1 = await promise1;
    const number2 = await promise2; 
    console.log(number1, number2);
}

inParallel();

// In the parallel example we get the result at the same time.
// We can write this function diferently using destructuring

async function inParallel1(){
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    csont [number1, number2]=[await promise1, await promise2];
    console.log(number1, number2);
}

inParallel1();

// or this way... 


async function inParallel2(){
    const promise1 = printNumber1();
    const promise2 = printNumber2();

    console.log(await promise1, await promise2;
}

inParallel2();
