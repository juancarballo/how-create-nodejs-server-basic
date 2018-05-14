//agregamos más rutas, usamos el middleware morgan y usamos templates

// usando enrutadores basicos (NO SON ENRUTADORES DE EXPRESS)
const express = require('express');//requerimos el modulo express
const morgan = require('morgan');//requerimos el middleware morgan
const app = express();

//settings o configuraciones (simples variables para informaciom)
app.set('appName', 'Mi primer servidor');
app.set('countryHost', 'Costa Rica');

//usando motor de plantilla ejs
app.set('views', __dirname + '/views');//ruta de la carpeta donde estan las vistas
app.set('view engine', 'ejs');//motor de template que usare
//app.set();

//morgan permite capturar por nosotros los datos de las peticiones
app.use(morgan('dev'));
//console.log('El método usado fue: '+ morgan(':method'));
//comienzo de los enrutadores///////////////////////////////////////////////
//para la peticion del home '/'
app.get('/', (req, res) => {
  res.render('index.ejs');//renderizando index.ejs
})

//para la peticion del '/login'
app.get('/login', (req, res) => {
  res.end('Aqui va el login');
})

//para rutas que no existen, debe ir siempre de ultimo
app.get('*', (req, res) => {
  res.end('Esta ruta no existe');
})
//fin de los enrutadores/////////////////////////////////////////////////////////////

//puerto escuchado
app.listen(3000, function () {
  //usan destructuracion para pasar el nombre del servidor al console.log
  console.log(`Servidor  ${app.get('appName')} funcionando 
  \nPaís donde se aloja el host ${app.get('countryHost')}`);
});

