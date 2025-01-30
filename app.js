const express = require('express');
const router = require('./router/router.js');
const path = require("path");
const port= 3000;
const app = express();

//definir archivos estaticos 
app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

//sirve para recibir los datos de la solicitud del cliente 
app.use(express.urlencoded({extended:false}));
//sirve para enviar o responderle al usuario 
app.use(express.json());

 //endPoint
app.use('/',router);


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
