import express from 'express';
const app = express();

let PRODUCTS_DB = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send(`<div style="background: #191dbf;"><h1 style="text-align: center; color: white;">Desafio 8</h1>
    <h2 style="text-align: center; color: white;">Emiliano Ceballos - Backend Coderhouse</h2></div>
    <p>Consigna</p>
    <p>Realizar un proyecto de servidor basado en node.js que permita listar e incorporar ítems dentro de un array de productos en memoria.</p>
    <ul>
    <li>Implementar las rutas get y post en conjunto con las funciones necesarias (utilizar clases y un módulo propio).</li>
    <li>Cada ítem almacenado dispondrá de un id proporcionado por el backend, que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual. Las rutas propuestas serían las siguientes:</li>
        <ol>
        <li>Listar en forma total (get) : '/api/productos' -> devuelve array de productos</li>
        <li>Listar en forma individual (get) (por id): '/api/productos/:id' -> devuelve producto listado</li>
        <li>Almacenar un producto (post) : '/api/productos' -> devuelve producto incorporado</li>
        </ol>
    <li>Para el caso de que se liste en forma individual un producto que no exista, se devolverá el objeto: {error : 'producto no encontrado'}</li>
    <li>En caso de no haber productos en el listado total, se retornará el objeto: {error : 'no hay productos cargados'}</li>
    <li>Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman</li>
    </ul>`)
})

app.get("/api/productos", (req, res) => {
    if (PRODUCTS_DB.length===0) {
        return res.status(404).json({
            error: 'No hay productos cargados ❌'
        });
    } else { 
        res.status(200).json(PRODUCTS_DB);
    }
});

app.post("/api/productos", (req, res) => {
    if (!req.body) {
        return res.status(400).send("Error en los parámetros 🚫");
    }
    const data = req.body;
    data.id = PRODUCTS_DB.length + 1;
    PRODUCTS_DB.push(data);
    res.status(200).json(PRODUCTS_DB);
});

app.get("/api/productos/:id", (req, res) => {
    const { id } =req.params;
    const products_filter= PRODUCTS_DB.find(producto => producto.id === parseInt(id))
    if (products_filter){
        return res.json(products_filter)
    }
    res.status(404).json({
        error: 'Producto no encontrado 💔'
    });
});

app.get('*', (req, res) =>{
    res.status(404).send('Página no encontrada😪');
});

export default app;