const express = require("express");
const crypto = require("crypto");
const Bingo = require("./Models/bingo.js");
const app = express();

const Sessions = {};

app.post("/iniciar_juego", (req, res) => {
    const token = crypto.randomBytes(16).toString("hex");
    Sessions[token] = new Bingo(req.query.cartones);
    res.send(token);
    console.log(`Juego iniciado token: ${token}`)
});

app.get(["/cartones", "/obtener_carton"], (req, res) => {
    if (!req.query.session)
        return res.sendStatus(400)
    if (req.query.carton)
        res.send(Sessions[req.query.session].getCarton(req.query.carton).numbers)
    else
        res.send(Sessions[req.query.session].cartonesNum)
});

app.post("/jugar", (req, res) => {
    if (!req.query.session)
        return res.sendStatus(400)
    res.send(Sessions[req.query.session].sacarNumero())    
})

app.listen(1515, () => {
console.log(`
--------------------------------------------------
Server: Bingo\nEnviroment: DEV\nPort: ${1515}
--------------------------------------------------
`);});

setInterval(
    () => {
        Sessions.forEach(session => {
            if (new Date - session.ultimaLlamada >= 1000 * 60 * 60)
                // si la ultima llamada fue hace mas de 1 hora, borra la session
                delete session
        })
    },
    1000 * 60 * 60);
