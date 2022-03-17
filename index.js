const express = require('express');
const routerApi=require('./src/routes');
const app = express();
//puerto por el que va a escuchar
const port = 3000;
//alt shift+f identacion
//recuest para verificar si el puerto está respondiendo
app.listen(port, () => {
  console.log('listening the port', port);
});
//per ite pasar el app
routerApi(app);
