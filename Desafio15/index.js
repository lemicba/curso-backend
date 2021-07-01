const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

var port = process.env.PORT || 8080

var index = require('./src/routes/index');
var productos = require('./src/routes/producto');
var carrito = require('./src/routes/carrito');


app.use('/', index);
app.use('/productos', productos);
app.use('/carrito', carrito);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})