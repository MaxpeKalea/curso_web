'use strict';
        const file = './js/db.json';
        const request = new XMLHttpRequest();
        request.overrideMimeType('application/json');
        request.open('GET', file, true);
        request.onload = function () {
            const dato = JSON.parse(this.responseText);
            let pais = '';
            
          function procesaPais(elemento) {
            for (let clave in elemento) {
               pais += (`${clave}: ${elemento[clave]}<br/>`);
            }
        }
      dato.númerosTelefono.forEach(procesaTelefonos);
            let HTML = `<div><h1>${dato.name} ${dato.region}</h1></div>`;
            muestraResultado(HTML);
        };
        request.onerror = error => muestraResultado(`<pre>ERROR: ${error}</pre>`);
        request.send(null);
        const muestraResultado = texto => document.getElementById('paises').innerHTML = texto;
 
    

          function procesaTelefonos(elemento) {
              for (let clave en elemento) {
                  // teléfonos = console.log(elemento[clave])
                  teléfonos += (`${clave}: ${elemento[clave]}<br/>`);
              }
          }
        dato.númerosTelefono.forEach(procesaTelefonos);
        let HTML = `<div><h1>${dato.nombre} ${dato.apellido}</h1>
            <p>títulos: ${dato.títulos.toString()}</br>
            sexo: ${dato.sexo}<br/> edad:${dato.edad} </p>
            <h2>Dirección</h2>
            <p>${dato.dirección.calle}<br/> ${dato.dirección.CP} 
            ${dato.dirección.población} (${dato.dirección.provincia}) </p>
            <h2>Números de teléfono</h2>
            ${teléfonos} </div>`;
        muestraResultado(HTML);
    };

      // Defino qué hacer cuando la llamada al servicio falla
        // es una función callback llamada en caso de error (pasado como argumento)
        request.onerror = error => muestraResultado(`<pre>ERROR: ${error}</pre>`);

        // Llama al servicio. Inicia la llamada que procede como proceso en segundo plano
        // la función send() termina SIN esperar la finalización de la llamada que 
        // se produce en modo ASÍNCRONO
        request.send(null);

        // muestra el texto pasado como argumento como inner HTML de un elemento del DOM
        const muestraResultado = texto => document.getElementById('output').innerHTML = texto;