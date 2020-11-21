// Syntatic sugar for Promises

function getSpecificNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(42),2000);
    });
}

async function f() {
    const specificNumber = await getSpecificNumber();
    console.log(specificNumber);
}

f();

// We can use async/await wherever we have promises.
// Example below will get you same result

function f2(){
    getSpecificNumber()
        .then(specificNumber => console.log(specificNumber));
}

f2();


// Fetch returns a promise so we can use .then
function getRandomDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(value=>console.log(value.message))
}

getRandomDogImage();



// Same result using async await
async function getRandomDogImage1(){
    let response = await fetch('https://dog/ceo/api/breeds/image/random')
    let value = await response.json();
    console.log(value.message);
}

getRandomDogImage1();

// await only works inside an asynchronous function
// The following won't work

function getRandomDogImage2(){
    let response = await fetch('https://dog/ceo/api/breeds/image/random')
    let value = await response.json();
    console.log(value.message);
}

getRandomDogImage2();



// This example will work in the chrome console but it 
// will not work in node.js
function getSpecificNumber1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(42), 2000);
    });
}

const number = await getSpecificNumber1();
console.log(number);



// This version will work in node.js and dev console
function getSpecificNumber2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(42), 2000);
    });
}

(async function(){
const number = await getSpecificNumber2();
console.log(number);
})();