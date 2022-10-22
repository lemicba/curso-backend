import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { crearRouterApi } from '../src/routes/routerApi.js';
import { ViewsRouter } from '../src/routes/ViewsRouter.js';
import handlebars from "express-handlebars";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: "main.hbs"
}))


app.set("view engine", "hbs");
app.set("views", "./views");

app.use('/api', crearRouterApi);
app.use('/', ViewsRouter);

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))
