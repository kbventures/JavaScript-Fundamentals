
// This version would generate and "Uncought error"
async function f0(){
    const response = await fetch('https://some-host.com/wrong-url');
}

f0();




async function f(){
    try{
    const response = await fetch('https://some-host.com/wrong-url');
    } catch (e){
    console.log('Some error: '+e);
}
}

f();


// since every async function returns a promise, catch will work
async function f1(){

    const response = await fetch('https://some-host.com/wrong-url');

}

f1().catch(e=> alert('Custom error: '+ e));