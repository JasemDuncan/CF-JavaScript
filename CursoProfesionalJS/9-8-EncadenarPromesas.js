// let p1 = new Promise((resolve,reject) => setTimeout(reject, 100, "error en la primera promesa")); //Para revisar un error

function PrimeraPromesa(){
    return new Promise((resolve,reject) => setTimeout(resolve, 500, "Mensaje de la primera promesa"));
};

function SegundaPromesa(r2){
    console.log(r2);
    return new Promise((resolve, reject)=> setTimeout(resolve, 600, "Segundo hola mundo"));     
};

// 1era opcion mas clara
PrimeraPromesa().then(SegundaPromesa).then(function(r){console.log(r)});

// 2da opcion menos clara
// PrimeraPromesa().then(function(r){
//     SegundaPromesa().then(function(){

//     })
// })

// function finalizado(){
//     console.log("Todo finalizo");
// };

