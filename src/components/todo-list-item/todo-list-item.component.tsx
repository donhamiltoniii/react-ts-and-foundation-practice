import React from "react";

import CustomButton, {
  CustomButtonColors
} from "../custom-button/custom-button.component";
import EditModal from "../edit-modal/edit-modal.component";

import { TodoListItemProps } from "../types";

const TodoListItem: React.FC<TodoListItemProps> = ({
  handleDelete,
  handleEdit,
  id,
  text
}) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  const edit = (id: string, text: string) => {
    handleEdit(id, text);
    toggleModal();
  };
  const openModal = () => {
    toggleModal();
  };

  return (
    <li className="card" key={id}>
      <span className="card-divider">{text}</span>
      <div className="card-section">
        <CustomButton
          color={CustomButtonColors.ALERT}
          expanded
          handleClick={() => handleDelete(id)}
        >
          DELETE TODO
        </CustomButton>
      </div>
      <div className="card-section">
        <CustomButton
          color={CustomButtonColors.SECONDARY}
          expanded
          handleClick={openModal}
        >
          EDIT TODO
        </CustomButton>
      </div>
      {isModalOpen && <EditModal handleEdit={edit} id={id} text={text} />}
    </li>
  );
};

export default TodoListItem;
