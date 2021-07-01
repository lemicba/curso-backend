const fs = require('fs')

class CarritoController {

  constructor(carrito) {
    this.carrito = carrito;
}

  prodBD(){
    return this.carrito
  }

  addCarrito(id) {
    let prodtxt
    try {
       prodtxt = JSON.parse(fs.readFileSync('Productos.txt', 'utf8'))
    } catch (err) {
      console.error(err) 
    }
    let selProd = prodtxt.find((prod) => prod.id === id)
    this.carrito.push(selProd)
 }

  getProducts() {
    let productoVista = this.carrito
    if(!this.carrito.length) {
     productoVista = [{error : "no hay productos cargados"}]
     return productoVista;
    }  else {
     return productoVista;
    }
 }
 
 findProduct(id) {
   let currentProduct = this.carrito.find(product => product.id === id)
   return currentProduct || { error: `Producto con id ${id} no encontrado` }
  }

  delProduct(id) {
    let product = this.carrito.find((prod) => prod.id === id);
    if (!product) {
      product = {error : 'producto no encontrado'}
    }else {
      this.carrito.splice(this.carrito.indexOf(product), 1)
    }
  }
}

module.exports = CarritoController;