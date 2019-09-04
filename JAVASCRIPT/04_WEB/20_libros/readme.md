

es habitual guardar las const en un fichero aparte que se puede llamar config.js





los principales metodos que soporta http:


get- se usa para operaciones de lectura

post- de creacion

put/patch- de update

delete- de borrado


CRUD= CREATE READ UPDATE DELETE



crear base de datos simple para practicas (las serias tienen claves de acceso etc):



INSTALAR SERVIDOR JSONPLACEHOLDER (https://github.com/typicode/json-server)

npm install -g json-server

despues de crear base de datos (captura2):

json-server --watch db.json

y crea esa base en la carpeta que estuviese indicada en el terminal

pego en ella mi   "users": [{"id":0, "nombre": "Pepe", "edad": 33}], 


no cerrar terminal node, abrir powershell nuevo



