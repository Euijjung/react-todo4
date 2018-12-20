import React, { Component } from 'react';

class TodoFilter extends Component {
    changeFilter(){
        this.props.changeFilter(this.input.value);
    }

    render() {
        return(
            <div>
                필터 : <input type="text" 
                        ref={ref => this.input = ref }
                        onChange={this.changeFilter.bind(this)}/>
            </div>
        )
      }

      
  }
  
  export default TodoFilter;