setTimeout(()=>console.log('Proceso 1'),0)  // se coloca en la cola de eventos
console.log('Proceso 2')
console.log('Proceso 3')
setTimeout(()=>console.log('Proceso 4'),2000)
console.log('Proceso 5')
setTimeout(()=>console.log('Proceso 6'),1000)
console.log('Proceso 7')

