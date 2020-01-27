/* Step 1 import express
 *
 */
const express = require('express')

const creatureApi = require('../models/creature.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const creatureRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

// creatureRouter.get('/', (req, res) => {
//   res.json(creatureApi.getHelloWorldString())
// })


creatureRouter.get('/creatures', (req, res) => {
  creatureApi.getAllCreatures()
  .then((allCreatures) => {
    res.json(allCreatures)
  })
})

creatureRouter.get('/creature/:id', (req, res) => {
  creatureApi.getOneCreature(req.params.id)
  .then((singleCreature) => {
    res.json(singleCreature)
  })
})

creatureRouter.post('/creatures', (req, res) => {
  creatureApi.createCreature(req.body)
  .then((createdCreature) => {
    res.json(createdCreature)
  })
})

creatureRouter.put('/creature/:id', (req, res) => {
  creatureApi.updateCreature(req.params.id, req.body)
  .then((updatedCreature) => {
    res.json(updatedCreature)
  })
})

creatureRouter.delete('/creature/:id', (req, res) => {
  creatureApi.deleteCreature(req.params.id)
  .then((deletedCreature) => {
    res.json(deletedCreature)
  })
})


module.exports = {
  creatureRouter
}
