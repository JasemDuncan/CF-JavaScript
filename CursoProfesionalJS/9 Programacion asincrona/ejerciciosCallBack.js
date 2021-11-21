const { clear } = require('console');
let request = require('request');

request('https://www.google.com', function() {
    console.log("termine la peticion");
});

console.log("Yo sucedo despues");

