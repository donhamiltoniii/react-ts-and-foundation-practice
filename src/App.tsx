import React from "react";

import Todo from "./interfaces/todo";
import TodoForm from "./components/todo-form/todo-form.component";
import TodoList from "./components/todo-list/todolist.component";

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

  return (
    <div className="App">
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList onDeleteTodo={onDeleteTodo} todos={todos} />
    </div>
  );
};

export default App;
