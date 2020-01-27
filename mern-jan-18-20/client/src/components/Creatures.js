import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Creatures extends Component {
    state = {
        creatureList: [],
        newCreature: {
            name: "",
            description: ""
        }
    }

componentDidMount() {
    axios.get('/api/creatures') 
    .then((res) => {
        this.setState({ creatureList: res.data})
        console.log(this.state.creatureList)
    })
}

refreshAfterChange = () => {
    axios.get('/api/creatures')
    .then((res) => {
        this.setState({ creatureList: res.data})
    })
}
 createCreature = (event) => {
     event.preventDefault()
     axios.post('/api/creatures', this.state.newCreature)
     .then(() => {
         this.refreshAfterChange()
     })

 }

onChangeForm = (event) => {
    const previousState = { ...this.state.newCreature}
    previousState[event.target.name] = event.target.value
    this.setState({newCreature: previousState})
    console.log(this.state.newCreature)

}


    render() {
        const CreatureListElement = this.state.creatureList.map((creature) => {
            return(
            <Link to={`/${creature._id}`}><h2>{creature.name}</h2></ Link>
            )
        })

        return (
            <div>
                <h1>Creatures</h1>
                {CreatureListElement}
                <form onSubmit={this.createCreature}>
                    <input 
                    type="String"
                    name="name"
                    placeholder="Creature Name"
                    value={this.state.newCreature.name}
                    onChange={this.onChangeForm}/>
                    <input 
                    type="String"
                    name="description"
                    placeholder="Description"
                    value={this.state.newCreature.description}
                    onChange={this.onChangeForm}/>
                    <input type="Submit" value="Make New Creature"/>
                </form>
            </div>
        )
    }
}
