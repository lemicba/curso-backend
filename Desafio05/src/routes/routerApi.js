import express from "express";
const { Router } = express;
const crearRouterApi = Router();
const app = express();

import { ProductApi } from "../Api/ProductApi.js";

// const ProductContainer = new Container("productos");

crearRouterApi.get('/', async (req, res) => {
  res.send(await ProductApi.getAll())
})

crearRouterApi.post('/', async (req, res) => {
  const { title, price, thumbnail } = req.body;
  const newProduct = {
    title: title,
    price: price,
    thumbnail: thumbnail,
  };
  await ProductApi.save(newProduct);
  res.json({ok:true});
})

crearRouterApi.get('/:id', async (req, res) => {
  res.send(await ProductApi.getById(req.params.id))
})

crearRouterApi.put('/:id', async (req, res) => {
  const newProduct = req.params.product;
  res.send(await ProductApi.update(req.params.id, newProduct))
})

crearRouterApi.delete('/:id', async (req, res) => {
  res.send(await ProductApi.deleteById(req.params.id))
})


export { crearRouterApi }