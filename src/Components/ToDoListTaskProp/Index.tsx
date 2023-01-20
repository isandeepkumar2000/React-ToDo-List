import React from "react";
import { AppointmentObject } from "../ToDoListTask/Index";
import {
  Buttonicon,
  CreateTaskHeadingSubpart,
  DeleteIcon,
  DeleteIconContainer,
  FixBoxItem,
  FixBoxItem2,
  TodoUserInput,
} from "../ToDoListTask/styledComponents";

export interface TodoListObjects {
  variableTodoList: AppointmentObject;
  onDeleteTodo: (id: string) => void;
  isShared: (id: string) => void;
}

const ToDoListTaskProp: React.FC<TodoListObjects> = (props) => {
  const { variableTodoList, onDeleteTodo, isShared } = props;
  const { userInput, id, isChecked } = variableTodoList;

  const onDeleteTodoList = () => {
    onDeleteTodo(id);
  };

  const onChangeTick = () => {
    isShared(id);
  };

  return (
    <div>
      <FixBoxItem>
        <FixBoxItem2>
          <CreateTaskHeadingSubpart
            style={{ textDecoration: isChecked ? "line-through" : "none" }}
          >
            <TodoUserInput onChange={onChangeTick} type="checkbox" />
            <p>{userInput}</p>
          </CreateTaskHeadingSubpart>
        </FixBoxItem2>
        <div>
          <DeleteIcon
            className="delete-button"
            type="button"
            onClick={onDeleteTodoList}
          >
            <DeleteIconContainer
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
            />
          </DeleteIcon>
        </div>
      </FixBoxItem>
    </div>
  );
};

export default ToDoListTaskProp;
