import React, { Component } from "react";
import AddTodos from "./AddTodos";

import TodoList from "./TodoList";
class Dashboard extends Component {
  state = {
    todos: []
  };
  addTodoHandler = todo => {
    todo.done = false;
    //console.log(todo);
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  delTodoHandler = (event, index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  doneTodoHandler = (event, index) => {
    const todos = [...this.state.todos];
    todos[index] = { ...todos[index] };
    todos[index].done = event.target.checked;
    this.setState({ todos });
  };

  allDoneHandler = () => {
    const todos = this.state.todos.map(todo => {
      return { ...todo, done: true };
    });
    this.setState({ todos });
  };
  render() {
    return (
      <div className="Dashboard">
        <AddTodos
          addTodoHandler={this.addTodoHandler}
          allDoneHandler={this.allDoneHandler}
        />
        <TodoList
          todos={this.state.todos}
          delTodoHandler={this.delTodoHandler}
          doneTodoHandler={this.doneTodoHandler}
        />
      </div>
    );
  }
}
export default Dashboard;
