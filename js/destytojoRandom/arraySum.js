/*
Is duoto array reikia apskaiciuoti suma, kuri yra sudaryta is pirmo ir paskutinio to array nariu.
*/


const a = [4, 5];
const b = [1, 2, 3, 4];
const c = [99, 77, 55, 33, 22, 11, -11, -22, -33];
const d = [-17, 55, 4, 5];
const e = [-17, 55, 1, 2, 3, 4];
const f = [-17, 55, 99, 77, 55, 33, 22, 11, -11, -22, -33];

function suma(list) {
    return list[0] + list[list.length - 1];
}

console.log(suma(a));
console.log(suma(b));
console.log(suma(c));
console.log(suma(d));
console.log(suma(e));
console.log(suma(f));