const fs = require('fs');

let listartabla = (base, limite) => {
    for (let i = 0; i < limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, 'utf8', (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

        })
    })
}





module.exports = {
    crearArchivo,
    listartabla
}