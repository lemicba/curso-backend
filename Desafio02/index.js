const fs = require('fs');

let productArray = [];
let productObject = {};

class Container {
    constructor(filename) {
      this.filename = `./${filename}.json`;
  }

  async save(producto) {
    try {
        productObject = producto;
        productObject.id = productArray.length + 1;
        productArray.push(productObject);
        await fs.promises.writeFile(this.filename, JSON.stringify(productArray, null, 3));
        console.log(productObject.id);
    }
    catch (err) {
        console.log(err);
    }
  }

  async getById(id) {
    try {
        productArray = JSON.parse(await fs.promises.readFile(this.filename, "utf8"));
        let productById = productArray.find((product) => product.id == id);
        productById === undefined ? console.log(null) : console.log(productById);
    }
    catch (err) {
        console.log(err);
    }
  }

  async getAll() {
    try {
        productArray = JSON.parse(await fs.promises.readFile(this.filename, "utf8"));
        console.log(productArray);
    }
    catch (err) {
        console.log(err);
    }

  }

  async deleteById(id) {
      try {
          productArray = JSON.parse(await fs.promises.readFile(this.filename, "utf8"))
            .filter((product) => product.id != id);
          fs.writeFileSync(this.filename, JSON.stringify(productArray, null, 2));
      }
      catch (err) {
          console.log(err);
      }
  }

  async deleteAll() {
      productArray = [];
      await fs.promises.writeFile(this.filename, productArray);
  }
}

const Productos = new Container('productos');

Productos.save({
    title: "Muñeco Minion",
    price: 550,
    thumbnail:
        "https://www.oxfordlibreria.com.ar/media/catalog/product/cache/5a38f6614905178fa07804facc7b33a0/2/0/2015421977723_20200925181911.jpg",
});

Productos.save({
    title: "Fuente De Alimentacion ",
    price: 9600,
    thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_805115-MLA47493543243_092021-O.jpg",
});

Productos.save({
    title: "Figura de acción Dragon Ball Broly",
    price: 120000,
    thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_918721-MLA48391416038_112021-O.jpg",
});


// Productos.getAll();

// Productos.getById(2);

// Productos.deleteById(1)

// Productos.deleteAll()
