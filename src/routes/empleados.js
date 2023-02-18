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

routerEmpleados.post('/', (req, res) =>{
    req.getConnection( (err, connection) =>{
        if(err) return res.send(err)
        connection.query('INSERT INTO empleados set ?', [req.body], (err, rows) =>{
            if(err){
                return res.send(err)
            }
            res.send(rows)
        })
    })
})

routerEmpleados.delete('/:id', (req, res) =>{
    req.getConnection( (err, connection) =>{
        if(err) return res.send(err)
        connection.query('DELETE FROM empleados WHERE idempleados = ?', [req.params.id], (err, rows) =>{
            if(err) return res.send(err)
            res.send(rows)
        })
    })
})

routerEmpleados.put('/:id', (req, res) =>{
    req.getConnection( (err, connection) => {
        if(err) res.send(err)
        connection.query('UPDATE empleados SET ? WHERE idempleados = ?', [req.body, req.params.id], (err, rows) =>{
            if(err) return res.send(err)
            res.send({respuesta: 'Datos Actualizados'})
        })
    })
})


module.exports = routerEmpleados