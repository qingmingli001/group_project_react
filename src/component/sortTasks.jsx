import React, { Component } from 'react';

class SortTasks extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <button onClick={this.props.showAll}>All</button>
        <button onClick={this.props.sortCompleted}>Completed</button>
      </div>
     );
  }
}
 
export default SortTasks;