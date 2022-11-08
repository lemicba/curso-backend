const knex = require('../database/knex');

class Mensaje {

    constructor() { }

    async guardar(mensaje) {
        try {
            let resultado = await knex('chats').insert(mensaje);
            return resultado;
        } catch (error) {
          throw error;
        }
    }

    async buscar(condicion) {
        try {
            let mensajes = await knex('chats').where(condicion);
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
 
    async leer() {
        try {
            let msg = await knex.select('email', 'timestamp', 'mensaje').from('chats')
            let mensajes = JSON.stringify(msg)
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Mensaje();