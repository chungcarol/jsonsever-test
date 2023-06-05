// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const auth = require("json-server-auth");
const cors = require('cors')
const db = require('./db.json')
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(middlewares)
server.db = router.db;
server.use(auth);
server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
