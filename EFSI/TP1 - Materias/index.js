const express = require("express");
const fs = require("fs")
const request = require('request');
const jsdom = require("jsdom");
const path = require('path');
const app = express();
app.use(express.static("public"));
//------------------- Fuerza a los request a usar https:// -------------------//
app.set('trust proxy', true);
app.use((req, res, next) => {
    if (!req.secure) return res.redirect('https://' + req.get('host') + req.url);
    next();
});
//----------------------------------------------------------------------------//

app.get('/', (req, res) => {
    res.sendFile(__dirname, "/public/index.html");
});

app.post("/getMaterias", (req, res) => {
    let materia;
    var body = { materias: [] };
    request({ 'method': 'GET', 'url': req.headers["cursoHome"], "rejectUnauthorized": false }, function(error, response) {
        if (error) {
            console.log(`Materias Requested Method: POST Status: 400 Link: ${req.headers["cursohome"]}`)
            return res.status(400).json({ status: 400, message: "Wrong URL" })
        }
        try {
            const document = new jsdom.JSDOM(response.body, { pretendToBeVisual: false }).window.document;
            for (let tree of document.getElementsByClassName("columnaHome card")[0].getElementsByClassName("collection-item contenidoConURLVisualizado")) {
                materia = tree.getElementsByTagName("SPAN")[0]
                    .innerHTML.split(" - ")[0]
                    .replace(/[0-9]/g, "")
                    .replace("Cs", "")
                    .replace("--", "")
                    .replace("...", "")
                    .replace(" V ", "")
                    .replace(" Iv ", "")
                    .replace(" Iii ", "")
                    .replace(" Ii ", "")
                    .replace(" I ", "")
                    .trim();
                body.materias.push(materia);
            }
            console.log(`Materias Requested Method: POST Status: 200 Curso: ${req.headers["cursohome"].split("/").reverse()[0]}`);
            res.json(body);
        }
        catch (error) {
            console.error(error);
            res.status(400).json({ status: 400, message: "Wrong URL" })
        }
    });
})

app.listen(1515, function() {
    console.log(`
--------------------------------------------------
Server: TP1 EFSI\nEnviroment: DEV\nPort: ${1515}
--------------------------------------------------
`);
});