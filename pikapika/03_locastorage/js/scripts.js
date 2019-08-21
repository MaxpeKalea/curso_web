'use strict'

if(localStorage !== undefined) {
    console.log('LocalStorage está disponible')
} else {
    console.log('No tienes acceso a localStorage')
}

localStorage.setItem('titulo','mi primer item en localStorage')