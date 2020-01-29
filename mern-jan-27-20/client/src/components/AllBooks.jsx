import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class AllBooks extends Component {
    state = {
        bookList: [],
        newBook: {
            title: "",
            author: "",
        }
    }

componentDidMount() {
    axios.get('/api/book')
    .then((res) => {
        this.setState({bookList: res.data})
        console.log(this.state.bookList)
    })
}
refreshOnChange = () => {
    axios.get('/api/book')
    .then((res) => {
        this.setState({bookList: res.data})
    })
}

createBook = (event) => {
    event.preventDefault()
    axios.post('/api/book', this.state.newBook)
    .then(() => {
        this.refreshOnChange()
    })
}

onChangeForm = (event) => {
    const previousState = {...this.state.newBook}
    previousState[event.target.name] = event.target.value
    this.setState({newBook: previousState})
}

    render() {
        const bookListElement = this.state.bookList.map((book) => {
            return(
                <div>
                <Link to={`/${book._id}`} ><h1>{book.title}</h1></Link>
                <h2>{book.author}</h2>
                <h3>{book.date}</h3>
                </div>
            )
        })

        return (
            <div>
            {bookListElement}
            <form onSubmit={this.createBook}>
                <input 
                type="String"
                name="title"
                placeholder="Title"
                value={this.state.newBook.title}
                onChange={this.onChangeForm}/>
                <input 
                type="String"
                name="author"
                placeholder="Author"
                value={this.state.newBook.author}
                onChange={this.onChangeForm}/>
                <input type="Submit" value="Add new book" />
            </form>

            </div>
        )
    }
}
