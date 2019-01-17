import React from "react";

const todo = ({
  todo,
  delTodoHandler,
  doneTodoHandler
}) => {
  return (
    <ul>
      <input
        type="checkbox"
        onChange={doneTodoHandler}
      />
      <li>
        <span
          style={{
            textDecoration: todo.done
              ? "line-through"
              : "inherit"
          }}
        >
          {todo.title}
        </span>
      </li>
      <button onClick={delTodoHandler}>
        Del
      </button>
    </ul>
  );
};

export default todo;
