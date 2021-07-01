const express = require('express');
const fs = require('fs')
const router = express.Router();
router.use(express.json())
var ProductosController = require('../controllers/producto');

let admin = true

let prod = new ProductosController([]);

 ////////////Grabar Archivo/////////////////////
 let pers = async (info) => {
  try {
      await fs.promises.writeFile('Productos.txt',JSON.stringify(info))
  }
  catch (err) {
      console.log(err)
  }}

//////////Lee persistencia///////////////
try {
let prodtxt = fs.readFileSync('Productos.txt', 'utf8')
prod.products =  JSON.parse(prodtxt)

} catch (err) {
console.error(err)
}
/////////////////////////////////////////

router.get('/listar/', (request, response) => {
  response.status(200).json(prod.getProducts())
})

router.get('/listar/:id', (request, response) => {
  response.status(200).json(prod.findProduct(request.params.id))
})

router.delete('/borrar/:id', (request, response) => {
  response.status(200).json(prod.delProduct(request.params.id))
    pers(prod.products)
})

router.post('/agregar', (request, response) => {
  prod.addProduct(request.body)
  pers(prod.products)
  response.sendStatus(201)
})

router.patch('/actualizar/:id', (request,response) => {
  if (admin) {
    response.status(202).json(prod.updateProduct(request.body, request.params.id))
    pers(prod.products)
  } else {
    response.status(401).send(`error : -1, descripcion: ruta '${request.url}' metodo '${request.method}' no autorizada`)
  }
})

module.exports = router;