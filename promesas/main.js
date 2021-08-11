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

const prtTime = (mensaje,cl) => cl (mensaje,new Date().toLocaleDateString())




/*-----------------------test de la promesa---------------------------*/

/*prtTime('inicio delay',console.warn)
retardo(2000, 'Retardo de 2 seg de prueba')
.then(rta => {
    console.log(rta)
    prtTime('Fin delay', console.warn)
})

.catch(error => console.error(error))

/*----------------------- race ----------------------*/


/*prtTime('Inicio delay', console.warn)
Promise.race([
    retardo(4000, 'retardo de 4 seg de prueba'),
    retardo(3000, 'retardo de 3 seg de prueba'),
    retardo(6000, 'retardo de 6 seg de prueba')


])
.then(rta=>{
    console.log('Ganó', rta)
    prtTime('Fin delay', console.log)
})
.catch(error => console.error('error en carrera', error))


/*----------------Promese all-------------------------*/

/*prtTime('Inicio delay', console.warn)
Promise.all([
    retardo(4000, 'retardo de 4 seg de prueba'),
    retardo(3000, 'retardo de 3 seg de prueba'),
    retardo(6000, 'retardo de 6 seg de prueba')


])
.then(rta=>{
    console.log('Ganó', rta)
    prtTime('Fin delay', console.log)
})
.catch(error => console.error('error en carrera', error))

/*--------------------------------------------------------*/

console.log('\n/*3) Funciones constructoras')

console.log('\n/*3.1) Analisis de una funcion en JS')

/*-------------------------------------------------------*/

console.log('\*3.1.a) Una funcion en JS es un Objeto*/')

function foo(){
    console.log('soy foo')
}

foo()

foo.x = 'pau'
foo.y = 'mati'
foo.a = ' y pau'

console.log(foo.x)
console.log(foo.y)
console.log(foo.y + ' ' + foo.a)

console.log (foo)
console.dir(foo)

//--------------------------------------------------------
console.log('n/* 3.1.b) Una funcion en JS es veriadica*/')

//function suma(a=0, b=0){
  /*  function suma(a,b){
        console.log(a,b)
        return (a||0) + (b||0)//operador short circuit : ||
    }*/

//resolver milti param cons REST Operator: ...
function suma(...args){
    console.log(args)
    let suma = 0
    args = 0
    args.forEach(arg => suma += arg)
    return suma
}

console.log(suma(5,6))


























































