import React, { Component } from 'react';
import Todoitme from './Todoitem';

class TodoList extends Component {
    delete(index){
        this.props.delete(index);
    }

    render() {
      const todoNodes = this.props.todos.filter(todo => {
          return todo.text.includes(this.props.filter)
      }).map((todo) => {
          return (
              <Todoitme todo={todo} key={todo.id}
                    delete={this.props.delete} edit={this.props.edit}/>
          )
      });

      return(
          <ul>{todoNodes}</ul>
      )
    }
  }
  
  export default TodoList;