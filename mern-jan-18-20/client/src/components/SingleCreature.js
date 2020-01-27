import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleCreature extends Component {
    state = {
        creature: {},
        editedCreature: {
            name: "",
            description: ""
        }  
    }
    componentDidMount() {
        axios.get(`/api/creature/${this.props.match.params.creatureId}`)
        .then((res) => {
            this.setState({creature: res.data})
        })
    }

    refreshOnChange = () => {
        axios.get(`/api/creature/${this.props.match.params.creatureId}`)
        .then((res) => {
            this.setState({creature: res.data})
        })
    }

    editSingleCreature = (event) => {
        event.preventDefault()
        axios.put(`/api/creature/${this.props.match.params.creatureId}`, this.state.editedCreature)
        .then(() => {
            this.refreshOnChange()
        }) 
    }

    onEditCreature = (event) => {
        const previousState = {...this.state.editedCreature}
        previousState[event.target.name] = event.target.value
        this.setState({editedCreature: previousState})
    }      

    deleteCreature = () => {
        axios.delete(`/api/creature/${this.props.match.params.creatureId}`)
    }

    render() {
        return (
            <div>
                <h1>{this.state.creature.name}</h1>
                <h2>{this.state.creature.description}</h2>
                <form onSubmit={this.editSingleCreature}>
                    <input 
                    type="string"
                    name="name"
                    placeholder={this.state.creature.name}
                    value={this.state.editedCreature.name}
                    onChange={this.onEditCreature}/>
                    <input 
                    type="string"
                    name="description"
                    placeholder={this.state.creature.description}
                    value={this.state.editedCreature.description}
                    onChange={this.onEditCreature}/>
                    <input type="Submit" value="Save Changes" />
                </form>
            <Link to='/'><button onClick={this.deleteCreature}>Delete Creature</button></Link>
            </div>
        )
    }
}
