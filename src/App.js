import React from 'react';
//import {v4 as uuid} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Todos from './components/todo/Todos';
import Header from './components/todo/layout/Header';
import AddTodo from './components/todo/AddTodo';

import './App.css';


class App extends React.Component {
  
  state = {
    todos: []
  }

      
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completted = !todo.completted
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    /*this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id
    )] });*/

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}` )
    .then(response => {
      this.setState({ todos: [...this.state.todos.filter(todo => 
        todo.id !== id
      )] })
    });
  }

  //Add todo
  addTodo = (title) => {
    /*const newTodo = {
      id: uuid(),
      title,
      completted: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })*/

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completted: false
    })
    .then(response => {
      this.setState({ todos: [...this.state.todos, response.data] })
    });
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(response => {
      this.setState({ todos: response.data })
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}
                  />
              </React.Fragment>
              )} 
            />

            <Route path="/about" component="About" />
        </div>
      </Router>
    );
  }
 
}


export default App;
