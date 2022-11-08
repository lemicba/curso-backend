const mysql = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'productosweb'
    },
    pool: { min: 0, max: 7 }
}

module.exports = mysql;

const sqlite = {
  client: 'sqlite3',
  connection: {
      filename: __dirname + '/../db/chats.sqlite'
  },
  useNullAsDefault: true
}

module.exports = sqlite;