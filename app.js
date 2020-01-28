const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');




let comando = argv._[0];

switch (comando) {

    case 'listar':
        listartabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${archivo}`);

        }).catch(err => {
            console.log(err);

        })
        break;
    default:
        console.log('Comando no encontrado');
        break;
}



//let base = 4;

//let argv2 = process.argv;
//console.log(argv.base);
//console.log(argv.limite);


// let parametros = argv[2];
// let base = parametros.split("=")[1];
// console.log(base);





// crearArchivo(base).then(archivo => {
//     console.log(`Archivo creado: ${archivo}`);

// }).catch(err=>{
//     console.log(err);

// })