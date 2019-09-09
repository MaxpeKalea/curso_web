export function app() {

    // Existe un input #in-new
    // Existe un elemento #out-lista
      
    // Nodos
    let inTarea = document.querySelector('#in-new')
    let outTarea = document.querySelector('#out-lista')
    let dlgConfirmar = document.querySelector('.confirmacion')
    let aDlgBotones = document.querySelectorAll('.confirmacion button')

    // Asignar manejador de eventos
    inTarea.addEventListener('change', addTarea)
    aDlgBotones.forEach(btn => 
        btn.addEventListener('click', onClickDlg))


    // Crear e inicializar el array
    let tareas = [] 
    // ¿Existe storage?
    if(localStorage.getItem('todas las tareas')) {
        tareas = JSON.parse(localStorage.getItem('todas las tareas'))
        render()
    }
    
    // Elemento a Bornar
    let numBorrar

    // let tareas = (localStorage.getItem(tareas)) ?
    //        localStorage.getItem(tareas) : [] 

    // Funciones
    function addTarea() {
        tareas.push(inTarea.value)
        inTarea.value = ''
        save()
        render()
    }

    function save() {
        localStorage.setItem('todas las tareas', JSON.stringify(tareas))
    }
    
    function render() {
        let html = '' 
        html += '<ul>'
        tareas.forEach((item, i) => html += 
            `<li>
                <span class="texto" data-id="${i}">${item}</span>
                <span class="btn btn-editar" data-id="${i}">️✍️</span>  
                <span class="btn btn-borrar" data-id="${i}">🗑️</span>
            </li>`)
        html += '</ul>'
        outTarea.innerHTML = html

        let aBtnBorrar = document.querySelectorAll('.btn-borrar')
        let aBtnEditar = document.querySelectorAll('.btn-editar')
        let aTextos = document.querySelectorAll('.texto')

        aBtnBorrar.forEach(btn => btn.addEventListener('click', onBorrar))
        aBtnEditar.forEach(btn => btn.addEventListener('click', onEditar))
        aTextos.forEach(txt => txt.addEventListener('blur', onChange))
    }

    function onBorrar(ev) {
        numBorrar = ev.target.dataset.id
        dlgConfirmar.showModal()
    }

   function onClickDlg (ev) {
       if (ev.target.textContent === 'SI') {
        tareas.splice(numBorrar, 1)
        save()
        render()     
       }
       dlgConfirmar.close()
   }   

   function onEditar(ev) {
    console.log(ev.target.dataset.id)
    ev.target.previousElementSibling.contentEditable = true
    console.dir(ev.target.parentNode)
   }

   function onChange(ev) {
    ev.target.contentEditable = false
    tareas.splice(
        ev.target.dataset.id, 1, ev.target.textContent)
    save()
    render()
   }



}



