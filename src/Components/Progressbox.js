import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";
import { TbLayoutCards } from "react-icons/tb";
import EditAssignee from "./EditAssignee";
import { useDispatch, useSelector } from "react-redux";
import { EDITINGS, SELECTEDS } from "../redux/user/userActions";

const task = [
  { id: "1", content: "test 1" },
  { id: "2", content: "test 2" },
  { id: "3", content: "test 3" },
  { id: "4", content: "test 4" },
  { id: "5", content: "test 5" },
  { id: "6", content: "test 6" },
];

const taskStatus = {
  requested: {
    name: "Requested",
    items: task,
  },
  toDo: {
    name: "To do",
    items: [],
  },
  inProgress: {
    name: "In Progress",
    items: [],
  },
};
const onDragEnd = (result, columns, setColumns) => {
  console.log(columns , "col");
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
function App() {
  const [modalopen, setmodalopen] = useState(false);
  const [cardName, setCardName] = useState("");
  const [columns, setColumns] = useState(taskStatus);

  function newcard() {
    let newtask = {
      id: (task.length + 1).toString(),
      content: cardName,
    };
    task.push(newtask);
    setCardName("");
    console.log(task);
    setmodalopen(false);
  }

  function addcard() {
    setmodalopen(!modalopen);
  }

  return (
    <div>
      {modalopen ? (
        <div>
          {" "}
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-md">
                  <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <TbLayoutCards />
                      </div>
                      <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg font-medium leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Title
                        </h3>
                        <div className="mt-2">
                          <input
                            onChange={(e) => setCardName(e.target.value)}
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                    <div
                      onClick={newcard}
                      className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Add card
                    </div>
                    <div
                      onClick={() => {
                        setmodalopen(false);
                      }}
                      className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      ) : (
        ""
      )}

      <div className="flex w-[75%] gap-x-4">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="flex flex-col items-center flex-1" key={columnId}>
                <h2>{column.name}</h2>
                <div className="w-full bg-gray-200">
                  <div className="flex items-center justify-between px-3 py-2 ">
                    <div className="flex items-center gap-x-2 ">
                      <BiRightArrow />
                    </div>
                    <div className="flex items-center gap-x-2">
                      <TbLayoutCards />
                      <p>4</p>
                      <div
                        onClick={()=> addcard(index)}
                        className="flex cursor-pointer active:border-gray-700 items-center justify-center text-xl h-[30px] w-[30px] bg-transparent border-gray-500 rounded-[4px] border "
                      >
                        +
                      </div>
                    </div>
                  </div>

                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          className="flex flex-col h-[500px] overflow-scroll py-2  gap-y-2"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      className="w-[95%] cursor-pointer h-[80px] min-h-[80px] px-3 py-2 mx-auto rounded-md  bg-white"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}
export default App;
