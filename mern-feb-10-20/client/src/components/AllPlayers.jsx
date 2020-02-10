import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class AllPlayers extends Component {
    state = {
        playerList: [],
        newPlayer: {
            name: "",
            team: "",
            age:  0  
        }
    }

    componentDidMount() {
        axios.get('/api/player')
        .then((res) => {
            this.setState({playerList: res.data})
            console.log(this.state.playerList)
        })
    }

    refreshOnChange = () => {
        axios.get('/api/player')
        .then((res) => {
            this.setState({playerList: res.data})
        })
    }

    createNewPlayer = (event) => {
        event.preventDefault()
        axios.post('/api/player', this.state.newPlayer)
        .then(() => {
            this.refreshOnChange()
        })
    }

    onChangeToForm = (event) => {
        const previousState = {...this.state.newPlayer}
        previousState[event.target.name] = event.target.value
        this.setState({newPlayer: previousState})

    }

    render() {
        const playerListElement = this.state.playerList.map((player) => {
            return(
                <div>
                    <Link to={`/${player._id}`}><h1>{player.name}</h1></Link>
                    <h2>{player.team}</h2>
                    <h2>{player.age}</h2>
                
                
                </div>
                
            )
        })

        return (
            <div>
             {playerListElement}
            <form onSubmit={this.createNewPlayer}>
                <input 
                type="String"
                name="name"
                placeholder="Player's Name"
                value={this.state.newPlayer.name}
                onChange={this.onChangeToForm}
                />   
                <input 
                type="String"
                name="team"
                placeholder="Team Name"
                value={this.state.newPlayer.team}
                onChange={this.onChangeToForm}
                /> 
                <input 
                type="Number"
                name="age"
                placeholde="Player's Age"
                value={this.state.newPlayer.age}
                onChange={this.onChangeToForm}
                />
                <input type="Submit" value="Create New Player"/>
            </form>             
            </div>
        )
    }
}
