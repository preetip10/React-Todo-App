import React from 'react';
import Todos from './components/todo/Todos';
import Header from './components/todo/layout/Header';

import './App.css';

class App extends React.Component {
  
  state = {
    todos: [
      {
        id: 1,
        title: 'Yoga & Pranayam',
        completted: false
      },
      {
        id: 2,
        title: 'Learn javaScript',
        completted: true
      },
      {
        id: 3,
        title: 'Cooking & cleaning',
        completted: true
      },
      {
        id: 4,
        title: 'Job Application',
        completted: false
      }
    ]
  }

      
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completted = !todo.completted
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id
    )] });
  }

  render() {
    return (
      <div style={mainContainer}>
        <Header />
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete} 
          delTodo={this.delTodo}
          />
      </div>
    );
  }
 
}

const mainContainer= {
  marginRight: '20%', marginLeft: '20%'
}

export default App;
