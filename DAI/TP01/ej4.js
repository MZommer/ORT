const fs = require('fs');
const copiar = (source, output) => 
    fs.copyFile(source, output, (err) => {
        if (err)
            console.error(err);
        else
            console.log(`${source} fue copiado a ${output} exitosamente`);
    });

copiar("test.txt", "test_.txt");
copiar("test_.txt", "test.txt");
