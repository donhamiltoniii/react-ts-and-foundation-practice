import React from "react";

import CustomButton, {
  CustomButtonColors
} from "../custom-button/custom-button.component";

import { EditModalProps } from "../types";
import "./edit-modal.styles.scss";

const EditModal: React.FC<EditModalProps> = ({ handleEdit, id, text }) => {
  const editTodoRef = React.useRef<HTMLInputElement>(null);

  return (
    <aside className="edit-modal">
      <form className="edit-modal__form" onSubmit={() => null}>
        <label>
          Todo Text
          <input placeholder={text} ref={editTodoRef} type="text" />
        </label>
        <CustomButton
          color={CustomButtonColors.PRIMARY}
          expanded
          handleClick={() => handleEdit(id, editTodoRef.current!.value)}
        >
          SAVE TODO
        </CustomButton>
      </form>
    </aside>
  );
};

export default EditModal;
