console.log(document.querySelector('title').textContent)
/*Promise.resolve(6)
.then(rta => rta * 2)

.then(rta => console.log(rta))*/

///

/*Promise.resolve(6)

.then(rta => rta * 2)
.then(rta => {
    if(rta != 12) throw rta
    return rta
})

.then(rta => console.log(rta))
.catch(error => console.error(error)) 
*/

//    Metodo: race y all 

const retardo = (ms, mensaje) => new Promise((resolve, reject) =>{
let tipo = typeof ms

if (tipo == 'number') {
    setTimeout(() => {
        resolve(mensaje)
    },ms)
}
else{
let error = {
    title: 'erros de tipo en ms (debe ser numérico)',
    tipo,
    mensaje,
    ms,
}
reject(error)
}
})

//const prtTime = (mensaje,cl) => cl (mensaje,new Date().toLocaleDateString())




/*-----------------------test de la promesa---------------------------*/


retardo(2000, 'Retardo de 2 seg de prueba')
.then(rta => console.log(rta))
.catch(error => console.error(error))

