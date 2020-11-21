// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     passport: 'passpord',
//     database: 'ecommerce_website'
// });

// connection.connect();

// function getUsers(callback){
//     connection.query('SELECT * FROM users', function(error, results, fields){
//         if(error){
//             callback(error);
//         }
//         callback(null, result);
//     });
// }

// getUsers(function(error, users){
//     if(error){
//         console.log(error);
//     }
//     console.log('List of users: ');
//     users.forEach(function (user){
//         console.log(`${user.user_id}. ${user.firstname} ${user.lastname}`);
//     });
// });


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passport: 'passpord',
    database: 'ecommerce_website'
});



// function capitalizePromise(text){
//     return new Promise(function (resolve, reject){
//         if(typeof text !== 'string'){
//             return reject(new Error('Argument of type string is expected'));
//         }
//         const result = text[0].toUpperCase() + text.substr(1);
//         return resolve(result);
//     })
// }

connection.connect();

function getUsers(){
    return new Promise(function (resolve, reject){
        connection.query('SELECT * FROM users', function(error, results, fields){
            if(error){
                return reject(error);
            }
            return resolve(results);
        });

    })
}


getUsers()
    .then(function (users){
        console.log('List of users');
        users.forEach(function(user){
            console.log(`${user.user_id}. ${user.firstname} ${user.lastname}`);
        });
    
}).catch(function(error){
    console.log(error);
});









// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     passport: 'passpord',
//     database: 'ecommerce_website'
// });

// connection.connect();

// function getUsers(callback){
//     connection.query('SELECT * FROM users', function(error, results, fields){
//         if(error){

//         }
//         callback(null, result);
//     });
// }

// getUsers(function(error, users){
//     if(error){
//         console.log(error);
//     }
//     console.log('List of users: ');
//     users.forEach(function (user){
//         console.log(`${user.user_id}. ${user.firstname} ${user.lastname}`);
//     });
// });