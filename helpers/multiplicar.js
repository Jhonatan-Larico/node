const fs = require('fs');
var colors = require('colors');

// por defecto una funcion asincrona retorna una promesa
const crearArchivo = async (base=5 , listar, hasta=10)=>{

    try {           
        let salida ='',
         consola='';
    
        for(let i=1;i<=hasta;i++){
            salida += `${base} x ${i} = ${base*i}\n`;  
            consola += `${base}`+ `${colors.red("x")}` +`${i} = ${base*i}\n`;  
        }

        if(listar) {
            console.log("===================".green);
            console.log(` Tabla del:`.blue,`${base}`.red);
            console.log("===================".green);
            console.log(consola);  
        }   
        // otra forma
        // fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
        //     if(err) throw err;
    
        //     console.log(`tabla-${base}.txt creado`)
        // })
        
        //cread un archivo txt
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return `tabla-${base}.txt creado`
    
        
    } catch (err) {
        throw err;
    }
        
}

//  exportar archivos 
module.exports = {
    crearArchivo :crearArchivo
             // apunta a la función crear archivo
}