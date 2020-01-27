import React, { Component } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'

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





    render() {
        return (
            <div>
               <h1>{this.state.book.title}</h1> 
            </div>
        )
    }
}
