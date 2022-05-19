var cc = require('currency-codes');
const obtenerMoneda = pais => cc.country(pais).reduce((a, b) => a.concat(b.currency), []);

console.log(obtenerMoneda("argentina"));
