const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const headers = {
  headers: [
    {key: 'Access-Control-Allow-Origin', value: '*'},
    {key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'},
    {key: 'Access-Control-Allow-Credentials', value: 'true'}
]
}

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)
server.use(headers())

const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
