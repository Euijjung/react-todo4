import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

class TdooApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      filter: ''
    }
    this.id = 1;
  }

  addTodo(newTodo){
    this.setState(prevState => {
      const newTodos = prevState.todos.concat({
        id: this.id++,
        text: newTodo,
        complete:false
      });
      return {
        todos: newTodos
      }
    })
  }

  delete(deleteId){
    this.setState(prevState => {
      const newTodos = prevState.todos.filter((todo) => {
        return todo.id != deleteId
      });

      return{
        todos: newTodos
      }
    })
  }

  edit(editId, newTodo, complete){
    this.setState(prevState => {
      const newTodos = prevState.todos.map((todo) => {
        if (editId == todo.id){
          todo.text = newTodo;
          todo.complete = complete;
        }
        
        return todo;
      })

      return {
        todos: newTodos
      }
    })
  }

  changeFilter(newFilter){
    this.setState({
      filter: newFilter
    })
  }

  render() {
    return (
      <div>
          <TodoForm addTodo={this.addTodo.bind(this)}/>
          <TodoFilter changeFilter={this.changeFilter.bind(this)} />
          <TodoList todos={this.state.todos} filter={this.state.filter}
              delete={this.delete.bind(this)}
              edit={this.edit.bind(this)}
              />
      </div>
    );
  }
}

export default TdooApp;
