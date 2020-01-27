

// import mongoose connection

const mongoose = require('./connection.js')

const CreatureSchema = new mongoose.Schema({
 name: String,
 description: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const CreatureCollection = mongoose.model('Creature', CreatureSchema)

function getHelloWorldString() {
  return 'hello reggie'
}

//getAll
const getAllCreatures = () => {
  return CreatureCollection.find()
}


//getOne
const getOneCreature = (creatureId) => {
  return CreatureCollection.findById({_id: creatureId})
}

//create
const createCreature = (creatureData) => {
  return CreatureCollection.create(creatureData)
}

//update 
const updateCreature = (creatureId, creatureData) => {
  return CreatureCollection.update({_id: creatureId}, creatureData)
}

//delete
const deleteCreature = (creatureId) => {
  return CreatureCollection.deleteOne({_id: creatureId})
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getHelloWorldString,
  getAllCreatures,
  getOneCreature,
  createCreature,
  updateCreature, 
  deleteCreature
}
