const mariadb = require('./database/connect/mariadb')

const main = (response) => {
  console.log('main')
  mariadb.query("SELECT * FROM product", (err, rows) => {
    console.log(rows)
  })

  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('Hello Node.js')
  response.end();
}

const login = (response) => {
  console.log('login')

  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('Login')
  response.end();
}

let handle = {};

handle['/'] = main;
handle['/login'] = login

exports.handle = handle;