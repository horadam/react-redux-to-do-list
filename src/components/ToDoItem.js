import React, { Component } from 'react'
import {changeStatus, deleteItem} from '../actions/ToDo'

class ToDoItem extends Component {

    handleClick = (e) => {
        changeStatus(this.props.id)
    }

    delete = (e) => {
        e.preventDefault()
        deleteItem(this.props.id)
    }

    render() {
        return (
            <p className={this.props.status === 'completed' ? 'line' : ''} onClick={this.handleClick}>{this.props.text}
            <button onClick={this.delete}>x</button>
            </p>
            
        )
    }

}

export default ToDoItem