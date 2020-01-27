
const express = require('express')

const bookApi = require('../models/book.js')


const bookRouter = express.Router()

bookRouter.get('/book', (req, res) => {
  bookApi.getAllBooks()
  .then((allBooks) => {
  res.json(allBooks)
  })
})

bookRouter.get('/book/:id', (req, res) => {
  bookApi.getOneBook(req.params.id)
  .then((singleBook) => {
    res.json(singleBook)
  })
})

bookRouter.post('/book', (req, res) => {
  bookApi.createBook(req.body)
  .then((newBook) => {
    res.json(newBook)
  })
})

bookRouter.put('/book/:id', (req, res) => {
  bookApi.updateBook(req.params.id, req.body)
  .then((updatedBook) => {
    res.json(updatedBook)
  })
})

bookRouter.delete('/book/:id', (req, res) => {
  bookApi.deleteBook(req.params.id)
  .then((deletedBook) => {
    res.json(deletedBook)
  })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  bookRouter
}
