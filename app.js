//destructuración
const{crearArchivo} =  require('./helpers/multiplicar'); 
const argv = require('./config/yargs')
var colors = require('colors');

console.clear();


//1 primer codigo 
/* const [,,arg3='base=5']= process.argv;
const [,base=5] = arg3.split('=');  */

/* console.log(process.argv); */
//usando yargs
//yargs nos ayuda a evitar escribir el código anterior
console.log(argv);
console.log(argv.l);

//console.log('base: yargs', argv.base)



// console.log(base);

// const base =4;

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err));


/*Notas
- al escribir en la consola node app --base=9, se esta creando un espacion en memoria
donde se va tener "--base, ¿pero donde esta ese lugar?"

-git checkout -- . // si borro algo con ese comando lo recupero

*/


