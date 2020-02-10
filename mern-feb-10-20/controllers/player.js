
const express = require('express')

const playerApi = require('../models/player.js')

const playerRouter = express.Router()


playerRouter.get('/hello', (req, res) => {
  res.json(playerApi.getHelloWorldString())
})

playerRouter.get('/',  (req, res) => {
  playerApi.getAllPlayers()
  .then((allPlayers) => {
    res.json(allPlayers)
  })
})

playerRouter.get('/:id', (req, res) => {
  playerApi.getSinglePlayer(req.params.id)
  .then((singlePlayer) => {
    res.json(singlePlayer)
  })
})

playerRouter.post('/', (req, res) => {
  playerApi.createPlayer(req.body)
  .then((newPlayer) => {
    res.json(newPlayer)
  })
})

playerRouter.put('/:id', (req, res) => {
  playerApi.updatePlayer(req.params.id, req.body)
  .then((changedPlayer) => {
    res.json(changedPlayer)
  })
})

playerRouter.delete('/:id', (req, res) => {
  playerApi.deletePlayer(req.params.id)
  .then((deletedPlayer) => {
    res.json(deletedPlayer)
  })
})


module.exports = {
  playerRouter
}
