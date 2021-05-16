/*
Reikia apskaiciuoti kam lygu duoto skaiciaus penkis kartus didesne reiksme, kuri pries tai buvo sumazinta 7 vienetais.
*/



const a = 9;
const b = 19;
const c = -5;
const d = -3.5;
const e = 4;
const f = 2000;

const xa = (a - 7) * 5;
const xb = (b - 7) * 5;
const xc = (c - 7) * 5;
const xd = (d - 7) * 5;
const xe = (e - 7) * 5;
const xf = (f - 7) * 5;

function math(skaicius) {
    return (skaicius - 7) * 5;
}

console.log(xa, math(a));
console.log(xb, math(b));
console.log(xc, math(c));
console.log(xd, math(d));
console.log(xe, math(e));
console.log(xf, math(f));
