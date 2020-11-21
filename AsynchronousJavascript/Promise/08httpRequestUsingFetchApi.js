/* http://www.omdbapi.com/

Here is your key: b5e584b

Please append it to all of your API requests,

OMDb API: 
http://www.omdbapi.com/?i=tt3896198&apikey=b5e584b


*/

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b5e584b')
//     .then(response => console.log(response));

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b5e584b')
    .then(response => response.json())
    .then(data => console.log(data));