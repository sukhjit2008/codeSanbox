import React, { Component } from "react";
import Todo from "./todo";
class TodoList extends Component {
  render() {
    const { todos } = this.props;
    const list = todos.length ? (
      todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            key={index}
            delTodoHandler={event => {
              this.props.delTodoHandler(
                event,
                index
              );
            }}
            doneTodoHandler={event => {
              this.props.doneTodoHandler(
                event,
                index
              );
            }}
          />
        );
      })
    ) : (
      <p>No todos added</p>
    );
    return (
      <div>
        <h4>TodoList</h4>
        {list}
      </div>
    );
  }
}
export default TodoList;
