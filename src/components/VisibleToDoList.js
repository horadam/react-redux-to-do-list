import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem'
import { updateFilter, clearCompleted } from '../actions/ToDo'

class VisibleToDoList extends Component {

    changeFilter = (filter) => {
        updateFilter(filter)
    }

    clearCompleted =(e) => {
        e.preventDefault()
        clearCompleted()

}

    render() {
        return (
            <div className="VisibleToDoList">
                {this.props.todos.filter(item => {
                    if (this.props.filter === 'all') {
                        return true
                    } else {
                        return item.status === this.props.filter
                    }
                }).map(item => (
                    <ToDoItem {...item} key={`toDo${item.id}`}/>
                ))}
                <div className="footer">
                    <div>{this.props.todos.filter(item => item.status === 'pending').length} todos left</div>
                    <div className="filters">
                        <button onClick = {() => this.changeFilter('all')}>All</button>
                        <button onClick = {() => this.changeFilter('pending')}>Pending</button>
                        <button onClick = {() => this.changeFilter('completed')}>Completed</button>
                    </div>
                    {this.props.todos.filter( todo => todo.status === 'completed').length >0 ? <button  className="ClearCompleted" onClick={this.clearCompleted}>Clear Completed</button> : ''}

                </div>
            </div>
        )
    }

}

function mapStateToProps (appState) {
    return {
        todos: appState.todos,
        filter: appState.filter
    }
    
}

export default connect(mapStateToProps)(VisibleToDoList)