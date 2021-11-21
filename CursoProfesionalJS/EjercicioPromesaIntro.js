let request= require('request-promise');
const { domainToASCII } = require('url');

let promesa=request('https://www.google.2222');

promesa.then(function(){ console.log("Termine la peticion") });
promesa.catch(function(err){console.log(err)});
promesa.finally(function(err){console.log("Finalice")});  //para cerrar la base de domainToASCII, archivo
console.log("Yo sucedo despues");

/*
    fullfiled: 0 Comlpetada, significa que la promesa se completo con exito. THEN
    rejected: 0 Rechazada, significa que la promesa no se completó con exito. CATCH
    pending: 0 Pendiente que es el estado de a promesa cuando la operacion no ha terminado, aqui decimos que la promesa no se ha
    settLed: 0 Finalizada, cuando la promesa terminó ya sea con éxito o con algun error.
*/