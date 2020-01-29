import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleBook extends Component {
    state = {
        book: {},
        editedBook: {
            title: "",
            author: ""
        }       
    }

componentDidMount() {
    axios.get(`/api/book/${this.props.match.params.id}`)
    .then((res) => {
        this.setState({book: res.data})
        console.log(this.state.book)
    }) 
}

refreshOnChange = () => {
    axios.get(`/api/book/${this.props.match.params.id}`)
    .then((res) => {
        this.setState({book: res.data})
        console.log(this.state.book)
    })
}

editSingleBook = () => {
    axios.put(`/api/book/${this.props.match.params.id}`, this.state.editedBook)
   .then((res) => {
       this.refreshOnChange()
   })
}

onChangeForm = (event) => {
    event.preventDefault()
    const previousState = {...this.state.editedBook}
    previousState[event.target.name] = event.target.value
    this.setState({editedBook: previousState})
}

deleteBook = () => {
    axios.delete(`/api/book/${this.props.match.params.id}`)
}

    render() {
        return (
            <div>
               <h1>{this.state.book.title}</h1> 
               <h2>{this.state.book.author}</h2>
               <h3>{this.state.book.date}</h3>
                <form onSubmit={this.editSingleBook}>
                    <input 
                    type="String"
                    name="title"
                    placeholder={this.state.book.title}
                    value={this.state.editedBook.title}
                    onChange={this.onChangeForm}
                    />
                    <input 
                    type="String"
                    name="author"
                    placeholder={this.state.book.author}
                    value={this.state.editedBook.author}
                    onChange={this.onChangeForm}
                    />
                    <input type="Submit" value="Save Changes" />
                </form>
            <Link to="/"><button onClick={this.deleteBook}>Delete Book</button></Link>
            </div>
        )
    }
}
