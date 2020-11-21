function one (){
    console.log('test0');
}

const prom = new Promise(function (resolve, reject){
    console.log('test1');
    resolve('Test2');
});

prom.then(function (value){
    console.log('Test3');
    console.log(value);
});

one();