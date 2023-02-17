const express = require('express')
//router
const routerEmpleados = express.Router()


routerEmpleados.get('/', (req, res) => {
    res.send('jajajaja')
})


module.exports = routerEmpleados