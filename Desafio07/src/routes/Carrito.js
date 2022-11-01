const express = require('express');
const fs = require('fs')
const router = express.Router();
router.use(express.json())
var CarritoController = require('../controllers/carrito');

let prod = new CarritoController([]);

 ////////////Grabar Archivo/////////////////////
 let pers = async (info) => {
  try {
      await fs.promises.writeFile('Carrito.txt',JSON.stringify(info))
  }
  catch (err) {
      console.log(err)
  }}

//////////Lee persistencia///////////////
try {
  let prodtxt = fs.readFileSync('Carrito.txt', 'utf8')
  prod.carrito =  JSON.parse(prodtxt)
} catch (err) {
  console.error(err)
}
/////////////////////////////////////////

router.get('/listar', (request, response) => {
  response.status(200).json(prod.getProducts())
})

router.get('/listar/:id', (request, response) => {
  response.status(200).json(prod.findProduct(request.params.id))
})

router.delete('/borrar/:id', (request, response) => {
  response.status(200).json(prod.delProduct(request.params.id))
    pers(prod.carrito)
})

router.post('/agregar/:id', (request, response) => {
  prod.addCarrito(request.params.id)
  pers(prod.carrito)
  response.sendStatus(201)
})

module.exports = router;