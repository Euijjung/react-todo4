import React, { Component } from 'react';

class Todoitme extends Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false
        }
    }

    delete(){
        this.props.delete(this.props.todo.id);
    }

    editMode(){
        this.setState({
            editMode: true
        })
    }

    handleBlur(){
        this.setState({
            editMode: false
        })
    }

    handleKeyUp(event){
        if (event.keyCode === 13 ){
            const todo = this.props.todo;
            this.props.edit(todo.id, this.input.value, todo.complete);
            this.handleBlur();
        }
      }
     
    changeComplete(event){
        const todo = this.props.todo;
        this.props.edit(todo.id, todo.text, event.target.checked);
        this.handleBlur();
    }

    render() {
        const todo = this.props.todo;
        const textStyle = {};
        if(todo.complete) {
            textStyle["text-decoration"] = "line-through";
        }

        const todoNormal = (
            <li>
                <input type ="checkbox" checked={todo.complete}
                        onChange={this.changeComplete.bind(this)}/>
                <span style={textStyle} onDoubleClick={this.editMode.bind(this)}>{
                    todo.text}
                </span>
                {''}
                <button type="button" onClick={this.delete.bind(this)}>
                삭제
                </button>
              </li>
        )

        const todoEdit = (
            <li>
                <input type="text" defaultValue={todo.text}
                autoFocus ref={ref => this.input = ref}
                onBlur={this.handleBlur.bind(this)}
                onKeyUp={this.handleKeyUp.bind(this)}/>
            </li>
        )
          return (this.state.editMode ? todoEdit : todoNormal )
    }  
  }
  
  export default Todoitme;