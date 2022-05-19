const url = require("url");
const parsearURL = URL => {
    try {
        const urlObject = url.parse(URL, true);
        return {
            host: urlObject.host,
            pathname: urlObject.pathname,
            params: urlObject.query,
        };
    }
    catch(e) {
        console.error(e);
    }
}
console.log(parsearURL("https://ort.edu.ar/DAI/TP1?a=b"));
