import React from "react";

import CustomButton, {
  CustomButtonColors
} from "../custom-button/custom-button.component";
import Todo from "../../interfaces/todo";

interface TodoListProps {
  onDeleteTodo: (id: string) => void;
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ onDeleteTodo, todos }) => {
  const handleClick = (id: string) => {
    onDeleteTodo(id);
  };

  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li className="card" key={id}>
          <span className="card-divider">{text}</span>
          <div className="card-section">
            <CustomButton
              color={CustomButtonColors.SECONDARY}
              expanded
              handleClick={() => handleClick(id)}
            >
              DELETE TODO
            </CustomButton>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
