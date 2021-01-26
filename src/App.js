import React, { Component } from 'react';
import './App.css';
import Tasks from "./component/tasks";
import Users from './component/users';
import SortTasks from './component/sortTasks';



class App extends Component {

  state={
    tasks:[
      {taskName: "wash the dog", completed: "false", user: undefined, id: 1},
      {taskName: "fix the car", completed: "false", user: undefined, id: 2},
      {taskName: "prepare the final", completed: "false", user: undefined, id: 3}
    ],
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
        tasks: [...prevState.tasks,{taskName:prevState.taskInput,completed:"false",user:undefined,id:prevState.id}],
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
        <SortTasks 
          showAll={this.showAll}
          sortCompleted={this.sortCompleted}
        />
        <Tasks />
        <Users />
      </div>

    );
  }
}
 
export default App;


