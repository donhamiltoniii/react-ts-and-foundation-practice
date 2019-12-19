import React from "react";

import "./App.css";

import { Todo } from "./components/types";
import TodoForm from "./components/todo-form/todo-form.component";
import TodoList from "./components/todo-list/todo-list.component";

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const onAddTodo = (text: string) => {
    setTodos(previousTodos => {
      return [...previousTodos, { id: Math.random().toString(), text }];
    });
  };

  const onDeleteTodo = (id: string) => {
    setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id));
  };

  const onEditTodo = (id: string, text: string) => {
    const todoToEdit = todos.filter(todo => todo.id === id)[0];
    const todoIndex = todos.indexOf(todoToEdit!);
    setTodos(previousTodos => {
      todoToEdit!.text = text;
      const newTodos = [
        ...previousTodos.slice(0, todoIndex),
        todoToEdit,
        ...previousTodos.slice(todoIndex + 1)
      ];
      console.log(newTodos);
      return newTodos;
    });
  };

  return (
    <div className="App">
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
        todos={todos}
      />
    </div>
  );
};

export default App;
