const argv =require('yargs')
                .option('b',{
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    describe : 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias : 'listar',
                    type:'boolean',
                    default:false,
                    describe:'Muesta la tabla en consola'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    describe:"Hasta que numero quieres que se imprima la tabla"
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;