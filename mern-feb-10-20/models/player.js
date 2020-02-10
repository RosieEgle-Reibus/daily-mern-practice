
const mongoose = require('./connection.js')



const PlayerModelSchema = new mongoose.Schema({
 name: String,
 team: String,
 age: Number
})


const playerCollection = mongoose.model('Sample', PlayerModelSchema)


function getHelloWorldString() {
  return 'hello world'
}

const getAllPlayers = () => {
  return playerCollection.find()
}

const getSinglePlayer = (playerId) => {
  return playerCollection.findById({_id: playerId})
}

const createPlayer = (playerData) => {
  return playerCollection.create(playerData)
}

const updatePlayer = (playerId, playerData) => {
  return playerCollection.updateOne({_id: playerId}, playerData)
}

const deletePlayer = (playerId) => {
  return playerCollection.deleteOne({_id: playerId})
}




module.exports = {
  getHelloWorldString,
  getAllPlayers,
  getSinglePlayer,
  createPlayer,
  updatePlayer,
  deletePlayer
}
