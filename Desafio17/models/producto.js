const knex = require('../database/knex');

class Prod {

    constructor() { }

    async guardar(producto) {
        try {
            let resultado = await knex('producto').insert(producto);
            return resultado;
        } catch (error) {
          throw error;
        }
    }

    async buscar(condicion) {
        try {
            let productos = await knex('producto').where(condicion);
            return productos;
        } catch (error) {
            throw error;
        }
    }
 
    async leer() {
        try {
            let pdt = await knex.select('titulo', 'price', 'thumbnail', 'id').from('producto')
            let productos = JSON.stringify(pdt)
            return productos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Prod();