const knex = require('../database/knex');

//crea tabla en la base de datos
/*
  knex.schema.createTable('chats', table => {
      table.increments('id');
      table.string('email',100);
      table.string('timestamp', 20)
      table.string('mensaje',6000);
  }).then(() => {
    console.log('tabla mensajes creada!');
  }).catch(error => {
      console.log('error:', error);
      throw error;
  }).finally(() => {
      console.log('cerrando conexion...');
      process.exit(0);
  });
*/
  knex.schema.createTable('producto', table => {
    table.increments('id');
    table.string('title',100);
    table.string('price', 20)
    table.string('thumbnail',6000);
    table.string('socketid', 300);
}).then(() => {
  console.log('tabla mensajes creada!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('cerrando conexion...');
    process.exit(0);
});