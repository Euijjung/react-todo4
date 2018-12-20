import React, { Component } from 'react';

class TodoForm extends Component {
    addTodo(event){
        event.preventDefault();
        const newTodo = this.input.value;
        this.props.addTodo(newTodo)

        event.target.reset() //input내용 삭제
    }

    render() {
        return(
            <form onSubmit={this.addTodo.bind(this)}>
                <input type="text" ref={ref => this.input = ref }/>
                {' '}
                <button type="submit">추가</button>
            </form>
        )
      }

      
  }
  
  export default TodoForm;
