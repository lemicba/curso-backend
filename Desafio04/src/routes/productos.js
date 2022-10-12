import express from "express";
const { Router } = express;
const router = Router();
const app = express();

import { Container } from "../containers/Container.js";

const ProductContainer = new Container("productos");

router.get('/', async (req, res) => {
  res.send(await ProductContainer.getAll())
})

router.post('/', async (req, res) => {
  const { title, price, thumbnail } = req.body;
  const newProduct = {
    title: title,
    price: price,
    thumbnail: thumbnail,
  };
  await ProductContainer.save(newProduct);
  res.json({ok:true});
})

router.get('/:id', async (req, res) => {
  res.send(await ProductContainer.getById(req.params.id))
})

router.put('/:id', async (req, res) => {
  const newProduct = req.params.product;
  res.send(await ProductContainer.update(req.params.id, newProduct))
})

router.delete('/:id', async (req, res) => {
  res.send(await ProductContainer.deleteById(req.params.id))
})


export { router }