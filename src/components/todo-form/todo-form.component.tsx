import React from "react";

import CustomButton, {
  CustomButtonColors
} from "../custom-button/custom-button.component";

import { TodoFormProps } from "../types";

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const todoInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodoText = todoInputRef.current!.value;
    onAddTodo(newTodoText);
    todoInputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Todo
        <input type="text" ref={todoInputRef} />
      </label>
      <CustomButton color={CustomButtonColors.PRIMARY}>ADD TODO</CustomButton>
    </form>
  );
};

export default TodoForm;
