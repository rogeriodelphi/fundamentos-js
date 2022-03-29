// null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:
// undefined também é o valor retornado por uma função que não tem cláusula return. 


// let input = null;

// if (input === null) {
//  console.log('não há informação');
// } else {
//  console.log(input);
// }


let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined


console.log(null == undefined); // true
console.log(null === undefined); // false