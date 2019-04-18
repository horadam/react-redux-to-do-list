import React, { Component } from 'react'
import { addToDo } from '../actions/ToDo'

class AddTodo extends Component {

    state = {
        newToDo:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        addToDo(this.state.newToDo)
        this.setState({newToDo: ''})
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form autocomplete="off" id="form" onSubmit={this.handleSubmit}>
                <input type="text" name="newToDo" value={this.state.newToDo} onChange={this.handleChange} placeholder="What needs to be done?"></input>
            </form>


        )
    }
}

export default AddTodo


