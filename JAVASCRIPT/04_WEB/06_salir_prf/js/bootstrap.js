import { app } from './app.js'
import { exit } from './exit.js'

document.addEventListener('DOMContentLoaded', app)
window.addEventListener("beforeunload", exit);