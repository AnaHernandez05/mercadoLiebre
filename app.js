const express = require('express');
const app = express();
const path = require('path');
const publicPath= path.resolve(__dirname, './public');
app.set('view engine', 'ejs');
app.use(express.static(publicPath));
app.get('/',(req,res)=>{
    res.render('home', {titulo: 'Mercado Libre'});
});
app.get('/register',(req,res)=>{
    res.render('register', {titulo: 'Registro'});
});
app.get('/login',(req,res)=>{
    res.render('login', {titulo: 'Inicio de sesión'});
});
app.listen(process.env.PORT || 3000, function() {console.log('Servidor corriendo en el puerto 3000');});
