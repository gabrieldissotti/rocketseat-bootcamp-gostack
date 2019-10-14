const express = require('express')

const server = express()

server.get('/test', (req, res) => {
  const data = { teste: 123}

  return res.send(data.teste)
})

server.listen(3000)