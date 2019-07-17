import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => (
  // 这里的 onClick 是从 store 里面拿到的
  // 通过 connect 方法, 将 TodoList (在VisibleToDoList组件中) 与 redux store 联系起来, 并定义 mapDispatchToProps 方法,返回一个调用 dispatch 的方法
  // 在 TodoList 组件中, 我们可以从 props 中拿到 onTodoClick (定义在mapDispatchToProps中) 方法了
  // 最后通过 props 传递给 Todo 组件, 即当前组件.
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
