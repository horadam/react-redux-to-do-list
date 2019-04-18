import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import AddToDo from './AddTodo'
import VisibleToDoList from './VisibleToDoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="container">
            <Header/>
            <AddToDo />
            <VisibleToDoList />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
