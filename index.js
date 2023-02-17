const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const myconn = require('express-myconnection');
const routerEmpleados = require('./src/routes/empleados')
const cors = require('cors')

const dbOptions = {
    host: process.env.DB_HOST ||'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'lista_empleados'
}


//MIDDLEWARES
//db
app.use(myconn(mysql2, dbOptions, 'single'))

//Ruta
app.use('/api/empleados', routerEmpleados)

app.use(express.json())


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), (req, resp) => {
    console.log('El servidor esta escuchando en el puerto', app.get('port'))
})

app.get('/', (req, res) =>{
    res.send('Probando servidor. . .')
})