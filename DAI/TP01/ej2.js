const matematica = require("./modules/matematica");
console.log(`5 + 3 + 7 = ${matematica.sumar(5,3,7)}`);
console.log(`10 - 2 - 5 = ${matematica.restar(10, 2, 5)}`);
console.log(`10 * 10 = ${matematica.multiplicar(10, 10)}`);
console.log(`20/2 = ${matematica.dividir(20, 2)}`);
console.log(`La superfice de un circulo con radio 3 es ${matematica.PI*(3*3)} `)
