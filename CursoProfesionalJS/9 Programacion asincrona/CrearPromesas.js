// let promesa = new Promise(function(resolve,reject){
//     resolve(10)
//     reject("Alog salio mal");
// });

let request = require("request");
// Crear promesas
function leerPagina(url){
    return new Promise(function(resolve,reject){
        request(url,function(error,response){
            if(error) return reject(error);

            resolve(response);
        });
    });
}
// USar Promesas
let promesa=leerPagina("https://www.google.com");
promesa.then(r=> console.log("finalice en promesas")).catch(err=> console.log(err));