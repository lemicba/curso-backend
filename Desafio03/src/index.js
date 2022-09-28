import express from "express";
const app = express()
const PORT = 8080

import { Container } from "./containers/Container.js";

const ProductContainer = new Container("productos");

app.get('/', (req, res) => {
  res.send('<h1 style="color: blue">Bienvenido al servidor express</h1>')
})

app.get('/productos', async (req, res) => {
  res.send(await ProductContainer.getAll())
})

app.get('/productoRandom', async (req, res) => {
  res.send(await ProductContainer.getRandom())
})

app.listen(PORT, () => {
  console.log(`Ejemplo de app está escuchandose en puerto ${PORT}`)
})

app.on("error", error => console.log(`Error en servidor ${error}`));