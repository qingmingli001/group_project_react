import React, { Component } from 'react';
import './App.css';
import Tasks from "./component/tasks";
import Users from './component/users';

class App extends Component {

  state={
    tasks:[],
    taskInput:"",
    id:1,
    users:[]

  }
  updataInput=(e)=>{
    console.log(e.target.value);
    this.setState({taskInput:e.target.value});
  }

  addTask=(e)=>{
    document.getElementsByClassName("taskInput")[0].value="";


    this.setState((prevState)=>{
      return {
        tasks: [...prevState.tasks,{task:prevState.taskInput,completed:"false",user:undefined,id:prevState.id}],
        id: ++prevState.id
      }})
    e.preventDefault();
  }

  render() { 
    console.log(this.state.tasks)
    return (
      <div>
        <div>
          <h1>Tasks</h1>
          <input className="taskInput" type="text" placeholder="new tasks" onChange={this.updataInput}/>
          <button type="submit" onClick={this.addTask}>Add</button>
        </div>
        <Tasks />
        <Users />
      </div>

    );
  }
}
 
export default App;


