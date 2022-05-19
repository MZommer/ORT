const PI = 3.1415926535;
const sumar = (...args) => args.reduce((a, b) => a+b);
const restar = (...args) => args.reduce((a, b) => a-b);
const multiplicar = (a, b) => a*b;
const dividir = (a, b) => a/b;
module.exports = {
    PI,
    sumar,
    restar,
    multiplicar,
    dividir,
};
