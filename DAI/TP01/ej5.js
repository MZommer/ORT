const url = require("url");
const parsearURL = URL => {
    const URL_regex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$'
    if (URL.match(URL_regex))
        throw "Invalid URL";
    const urlObject = url.parse(URL, true);
    return {
        host: urlObject.host,
        pathname: urlObject.pathname,
        params: urlObject.query,
    };
}
console.log(parsearURL("https://ort.edu.ar/DAI/TP1?a=b"));
