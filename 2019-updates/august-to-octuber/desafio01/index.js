const express = require('express')

const server = express()

server.use(express.json())

let projects = []
let counter = 0


function checkIfProjectExists(req, res, next){
  const { id } = req.params
  if(!id || !projects.find(({id: projectId}) => projectId == id)){
    return res.status(400).json({ error: 'project not found'})
  }

  return next()
}

function countRequest(req, res, next){
  counter++

  console.log(counter)
  return next()
}

server.get('/projects', countRequest, (req, res) => {
  return res.json(projects)
})

server.get('/projects/:id', countRequest, checkIfProjectExists, (req, res) => {
  const { id } = req.params

  return res.json(projects.find(({id: projectId}) => projectId == id))
})


server.post('/projects', countRequest, (req, res) => {
  projects.push(req.body)

  return res.json(projects)
})

server.put('/projects/:id', countRequest, checkIfProjectExists, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  projects.find( ({id: projectId}) => projectId == id ).title = title

  return res.json(projects)
})

server.post('/projects/:id/tasks', countRequest, checkIfProjectExists, (req, res) => {

  const { id } = req.params
  const { title } = req.body

  projects.find(({id: projectId}) => projectId == id).tasks.push(title)

  return res.json(projects)
})

server.delete('/projects/:id', countRequest, checkIfProjectExists, (req, res) => {
  projects = projects.filter(({id}) => Number(id) !== Number(req.params.id))

  return res.json(projects)
})



server.listen(3000)