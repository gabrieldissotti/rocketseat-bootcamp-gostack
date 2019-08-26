const express = require('express')

const server = express()

server.use(express.json())

let projects = []

server.get('/projects', (req, res) => {
  return res.json(projects)
})

server.post('/projects', (req, res) => {
  projects.push(req.body)

  return res.json(projects)
})

server.put('/projects/:id', (req, res) => {
  const { id } = req.params
  const { title } = req.body

  projects.find( ({id}) => id == id ).title = title

  return res.json(projects)
})

server.delete('/projects/:id', (req, res) => {
  projects = projects.filter(({id}) => Number(id) !== Number(req.params.id))

  return res.json(projects)
})



server.listen(3000)