const express = require('express');
const app = express();
//const mysql2 = require('mysql2');
const myconn = require('express-myconnection');
//const routerEmpleados = require('./routes/empleados')
const cors = require('cors')


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), (req, resp) => {
    console.log('El servidor esta escuchando en el puerto', app.get('port'))
})

app.get('/', (req, res) =>{
    res.send('Probando servidor. . .')
})