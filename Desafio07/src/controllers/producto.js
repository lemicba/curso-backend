class ProductosController {

  constructor(products){}

  prodBD(){
    return this.productos
  }

  addProduct(prod) {
    const {nombre, descripcion, codigo, foto, precio, stock} = prod
    const id = (this.products.length + 1 ).toString();
    const timestammp = new Date();
    const product = {
      id,
      timestammp,
      nombre,
      descripcion,
      codigo,
      foto,
      precio,
      stock,
    }

    this.products.push(product)
 }

  getProducts() {
    let productoVista = this.products
    if(!this.products.length) {
     productoVista = [{error : "no hay productos cargados"}]
     return productoVista;
    }  else {
     return productoVista;
    }
 }
 

 findProduct(id) {
   let currentProduct = this.products.find(product => product.id === id)
   return currentProduct || { error: `Producto con id ${id} no encontrado` }
  }

  updateProduct(prod, idn){
    const {timestammp, nombre, descripcion, codigo, foto, precio, stock} = prod
     const id = idn
     const productoAct = {
       id,
       timestammp,
       nombre,
       descripcion,
       codigo,
       foto,
       precio,
       stock,
     }
     let product = this.products.find((prod) => prod.id === id);
     if (!product) {
        product = {error : 'producto no encontrado'}
     } else  {
       this.products.splice(this.products.indexOf(product), 1,productoAct)
        product = productoAct
      }
     return product
  }

  delProduct(id) {
    let product = this.products.find((prod) => prod.id === id);
    if (!product) {
      product = {error : 'producto no encontrado'}
    }else {
      this.products.splice(this.products.indexOf(product), 1)
    }
  }
}

module.exports = ProductosController;