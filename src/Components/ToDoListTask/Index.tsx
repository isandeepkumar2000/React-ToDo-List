import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

import ToDoListTaskProp from "../ToDoListTaskProp/Index";

import {
  Buttonicon,
  TodoBGContainer,
  TodosHeading,
  TodoUserInput,
  CreateTaskHeadingSubpart,
} from "./styledComponents";

export type AppointmentObject = {
  userInput: string;
  id: string;
  isChecked: boolean;
};

const ToDoListTask = () => {
  const [userInput, setUserInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [userInputArrayList, setUserInputArrayList] = useState<
    AppointmentObject[]
  >([]);

  const saveLocalStorage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    localStorage.setItem(
      "userInputArrayList",
      JSON.stringify(userInputArrayList)
    );
    console.log(userInputArrayList);
  };

  useEffect(() => {
    const myList = localStorage.getItem("userInputArrayList");
    if (myList) {
      const items = JSON.parse(myList);
      if (items) {
        setUserInputArrayList(items);
      }
    }
  }, []);

  function renderAppointmentsList() {
    const AppointmentList = getAppointmentList();
    {
      return userInputArrayList.map((eachComment) => (
        <ToDoListTaskProp
          key={eachComment.id}
          variableTodoList={eachComment}
          onDeleteTodo={onDeleteTodo}
          isShared={isShared}
        />
      ));
    }
  }

  const CompleteButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUserInputArrayList(
      userInputArrayList.filter((eachTransaction) => eachTransaction.isChecked)
    );
  };

  const Pending = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUserInputArrayList(
      userInputArrayList.filter((eachTransaction) => !eachTransaction.isChecked)
    );
  };

  const getAppointmentList = () => {
    if (isChecked) {
      return userInputArrayList.filter(
        (eachTransaction) => eachTransaction.isChecked === true
      );
    }
    return userInputArrayList;
  };

  const isShared = (id: string): void => {
    setUserInputArrayList(
      userInputArrayList.map((eachTodo) => {
        if (id === eachTodo.id) {
          return { ...eachTodo, isChecked: !eachTodo.isChecked };
        }
        return eachTodo;
      })
    );
  };

  const onDeleteTodo = (id: string): void => {
    setUserInputArrayList(
      userInputArrayList.filter((eachTransaction) => id !== eachTransaction.id)
    );
  };

  const onSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = {
      id: uuidv4(),
      userInput,
      isChecked: false,
    };
    setUserInputArrayList((prevCommentsList: AppointmentObject[]) => [
      ...prevCommentsList,
      newComment,
    ]);
    setUserInput("");
  };

  const UserInputData = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.target.value);

  return (
    <TodoBGContainer>
      <TodosHeading>Create Task</TodosHeading>

      <form onSubmit={onSubmitButton}>
        <div>
          <div>
            <CreateTaskHeadingSubpart>
              {userInputArrayList.length === 0
                ? "Congratulation! you Don't have any Task"
                : ""}
            </CreateTaskHeadingSubpart>
            <TodoUserInput
              value={userInput}
              type="text"
              placeholder="Title"
              onChange={UserInputData}
            />
            <div>
              <Buttonicon type="submit">Add</Buttonicon>
            </div>
          </div>
        </div>
      </form>

      <div>{renderAppointmentsList()}</div>
      <Buttonicon
        type="submit"
        onClick={(e) => {
          saveLocalStorage(e);
        }}
      >
        Save
      </Buttonicon>

      <Buttonicon
        type="button"
        onClick={(e) => {
          CompleteButton(e);
        }}
      >
        Complete
      </Buttonicon>
      <Buttonicon
        type="button"
        onClick={(e) => {
          Pending(e);
        }}
      >
        Pending
      </Buttonicon>
    </TodoBGContainer>
  );
};

export default ToDoListTask;
