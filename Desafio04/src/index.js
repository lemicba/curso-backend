import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const PORT = 8080
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { router as routerProductos } from "./routes/productos.js";

app.use('/form', express.static(path.join(__dirname, 'public/index.html')));

// router de productos
app.use('/productos', routerProductos);

app.get('/productoRandom', async (req, res) => {
  res.send(await ProductContainer.getRandom())
})

app.listen(PORT, () => {
  console.log(`Ejemplo de app está escuchandose en puerto ${PORT}`)
})

app.on("error", error => console.log(`Error en servidor ${error}`));