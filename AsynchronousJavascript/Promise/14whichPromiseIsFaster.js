var askJohn = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('Yep, I got one extra pen.'), 3000);
    });
}

var askEugene = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('Sorry man, got only one.'), 5000);
    });
}

var askSusy = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('Sure, I have a pen for you!'),2000);
    });
}


// Retuns first response..
Promise.race([askJohn(), askEugene(), askSusy()])
    .then(value=>{console.log(value);})

var askEugene=()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject('Sorry man, got only one.'),1000);
    })
}

Promise.race([askJohn(), askEugene(), askSusy()])
    .then(value=>{console.log(value);})
    .catch(reason =>{
        console.log('Rejected: ' + reason);
    })

    //Promise.race will result in the first fufilled or reject scenario
    // As an example if we add the following which is processed without a timer
    // it will be be processed before all other promises
    // and rejected promise because it it processsed FIRST.

    // var askAtTheShop = () = { return Promise.resolve
    //('we always have pens. You can buy one for 1$);)