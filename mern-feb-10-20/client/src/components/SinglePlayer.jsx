import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SinglePlayer extends Component {
    state = {
        player: {},
        editedPlayer: {
            name: "",
            team: "",
            age: 0
        }
}

componentDidMount() {
    axios.get(`/api/player/${this.props.match.params.id}`)
    .then((res) => {
        this.setState({player: res.data})
        console.log(this.state.player)
    })
}

refreshOnChange = () => {
    axios.get(`/api/player/${this.props.match.params.id}`)
    .then((res) => {
        this.setState({player: res.data})
    })
}

editPlayer = () => {
    axios.put(`/api/player/${this.props.match.params.id}`, this.state.editedPlayer)
    .then((res) => {
        this.refreshOnChange()
    })
}

onChangeToForm = (event) => {
    event.preventDefault()
    const previousState = {...this.state.editedPlayer}
    previousState[event.target.name] = event.target.value
    this.setState({editedPlayer: previousState})
}

deletePlayer = () => {
    axios.delete(`/api/player/${this.props.match.params.id}`)
}



    render() {
        return (
            <div>
                <h1>{this.state.player.name}</h1>
                <h2>{this.state.player.team}</h2>
                <h2>{this.state.player.age}</h2>
            <form onSubmit={this.editPlayer}>
                <input 
                type="String"
                name="name"
                placeholder={this.state.player.name}
                value={this.state.editedPlayer.name}
                onChange={this.onChangeToForm}
                />
                <input 
                type="String"
                name="team"
                placeholder={this.state.player.team}
                value={this.state.editedPlayer.team}
                onChange={this.onChangeToForm}
                />
                <input 
                type="Number"
                name="age"
                placeholder={this.state.player.age}
                value={this.state.editedPlayer.age}
                onChange={this.onChangeToForm}
                />
                <input type="Submit" value="Save Changes"/>
            </form>
              <Link to="/"><button onClick={this.deletePlayer}>Delete Player</button></Link>  
            </div>
        )
    }
}
