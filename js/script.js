function generaNumRandom (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}

let listaFiorito = [];

let x = 0

while(listaFiorito.length < 16){

    x++

    let num = generaNumRandom(1,100);
    if( !listaFiorito.includes(num)){
        listaFiorito.push(num);
    }
}

console.log(listaFiorito)
