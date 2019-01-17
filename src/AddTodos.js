import React, { Component } from "react";

class AddTodos extends Component {
  state = {
    title: ""
  };
  changeHandler = e => {
    this.setState({ title: e.target.value });
    //console.log(this.state.title);
  };
  submitHander = e => {
    e.preventDefault();
    this.props.addTodoHandler(this.state);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHander}>
          <h4>Add a Todo</h4>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.title}
          />
          <br />
          <button
            disabled={
              !this.state.title.length
                ? true
                : false
            }
          >
            Add Todos
          </button>
        </form>
        <button
          onClick={this.props.allDoneHandler}
        >
          All Done
        </button>
      </div>
    );
  }
}
export default AddTodos;
