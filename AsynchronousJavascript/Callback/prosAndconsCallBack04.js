/*
PROS
Simplicity
Popularity

CONS
Lack of readability
Call back hell

*/


// Examples
// React

console.log(this.state.counter);// prints 1
const newState = { counter: 2};
setState(newState, callback);
console.log(this.state.counter); // still prints 1


// Vanilla JS

const button = document.querySelector('.button');
button.addEventListener('click', function(event){
    alert('Button has been clicked');
});


// JQuery
$('#coolthing').click(function(){
    alert('Handler for click event has been called.');
});

// mysql npm package

connection.query('SELECT 1 + 1 AS solution',
    function(error, results, fields){
        if(error) throw error;
        console.log('The solution is: ', results[0].solution);
    }
);


