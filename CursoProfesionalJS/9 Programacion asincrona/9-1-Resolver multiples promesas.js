// let p1 = new Promise((resolve,reject) => setTimeout(reject, 100, "error en la primera promesa")); //Para revisar un error
let p1 = new Promise((resolve,reject) => setTimeout(resolve, 500, "hola mundo"));
let p2 = new Promise((resolve, reject)=> setTimeout(resolve, 600, "Segundo hola mundo")); 

function finalizado(){
    console.log("Todo finalizo");
}

// p2.then(function(resultado){
//     console.log(resultado);
// });

// p1.then(function(r1){
//     console.log(r1);
//     p2.then(function(r2){
//         console.log(r2);
//         finalizado();
//     })
// });

Promise.all([p1,p2]).then(function(resultados){
    console.log(resultados);
    finalizado();
}).catch(err=>console.log(err));