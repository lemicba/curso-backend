import { Router } from 'express';
import { ProductApi } from "../Api/ProductApi.js";
const ViewsRouter = Router();

ViewsRouter.get("/", (req, res) => {
    res.render("form-products");
});

ViewsRouter.get("/productos", async (req, res) => {
    const products =  await ProductApi.getAll();
    res.render('table-products', {productos: await ProductApi.getAll()});
});

export { ViewsRouter }
