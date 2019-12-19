import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item.component";

import { TodoListProps } from "../types";
import "./todo-list.styles.scss";

const TodoList: React.FC<TodoListProps> = ({
  onDeleteTodo,
  onEditTodo,
  todos
}) => {
  const handleDelete = (id: string) => {
    onDeleteTodo(id);
  };

  const handleEdit = (id: string, text: string) => {
    onEditTodo(id, text);
  };

  return (
    <ul className="todo-list">
      {todos.map(({ id, text }) => (
        <TodoListItem
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          id={id}
          text={text}
        />
      ))}
    </ul>
  );
};

export default TodoList;
