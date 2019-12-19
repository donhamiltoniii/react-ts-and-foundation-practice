export interface CustomButtonProps {
  color: "primary" | "secondary" | "success" | "alert" | "warning" | undefined;
  expanded?: boolean;
  handleClick?: () => void;
}

export interface EditModalProps {
  handleEdit: (id: string, text: string) => void;
  id: string;
  text: string;
}

export interface Todo {
  id: string;
  text: string;
}

export interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export interface TodoListProps {
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, text: string) => void;
  todos: Todo[];
}

export interface TodoListItemProps {
  handleDelete: (id: string) => void;
  handleEdit: (id: string, text: string) => void;
  id: string;
  text: string;
}
