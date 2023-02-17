const express = require('express')
//router
const routerEmpleados = express.Router()


routerEmpleados.get('/', (req, res) => {
    req.getConnection( (err, connection) =>{
        if(err){
            return res.send(err)
        }
        connection.query('SELECT * FROM empleados', (err, rows) =>{
            if(err){
                return res.send(err)
            }
            res.json(rows)
        })
    })
})


module.exports = routerEmpleados