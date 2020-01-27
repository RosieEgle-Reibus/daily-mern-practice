
const mongoose = require('./connection.js')

const BookModelSchema = new mongoose.Schema({
 title: String,
 author: String,
 date: {type: Date, default: Date.now}
})

BookModelSchema.date instanceof Date;

const bookCollection = mongoose.model('Book', BookModelSchema)

const getAllBooks = () => {
  return bookCollection.find()
}

const getOneBook = (bookId) => {
  return bookCollection.findById({_id: bookId})
}

const createBook = (bookData) => {
  return bookCollection.create(bookData)
}

const updateBook = (bookId, bookData) => {
  return bookCollection.updateOne({_id: bookId}, bookData)
}

const deleteBook = (bookId) => {
  return bookCollection.deleteOne({_id: bookId})
}

module.exports = {
  getAllBooks,
  getOneBook,
  createBook,
  updateBook,
  deleteBook
}
