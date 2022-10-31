import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { TbLayoutCards } from "react-icons/tb";
import { DragDropContext } from 'react-beautiful-dnd';
import EditAssignee from "./EditAssignee";
import { useDispatch, useSelector } from "react-redux";
import { EDITINGS, SELECTEDS } from "../redux/user/userActions";
function Progressbox(props) {

  const [usersdata, setusersdata] = useState([
    { name: "test1", assignee: ["viram choksi", "vijay sadhu"] },
    { name: "test2", assignee: ["jayesh aherwal"] },
    { name: "test3", assignee: ["vijay sadhu"] },
    { name: "test4", assignee: ["ashutosh kaushik"] },
  ]);
  const assignee = [
    { name: "viram choksi" },
    { name: "jayesh aherwal" },
    { name: "vijay sadhu" },
    { name: "ashutosh kaushik" },
    { name: "test test" },
  ];
  const [modalopen, setmodalopen] = useState(false);
  const [cardName, setCardName] = useState("");
  const [editassignee, setEditassignee] = useState(false);
  const [indexofassigne, setIndexofassigne] = useState();
  function addcard() {
    setmodalopen(!modalopen);
  }
  const dispatch = useDispatch();
  function newcard() {
    let newarr = [...usersdata];
    let valu = {
      name: cardName,
    };
    newarr.push(valu);
    console.log(newarr, "new");
    setusersdata(newarr);
    // console.log("new card added");
    console.log(usersdata);
    setCardName("");
    setmodalopen(false);
  }
  function editcard(e) {
    console.log(e);
    setEditassignee(true);
    setIndexofassigne(e);
    dispatch(EDITINGS(true));
    dispatch(SELECTEDS(usersdata[e]));
  }

  // function save() {
  //   assing.length = 0;
  //   let len = usersdata.length;
  //   for (let i = 1; i <= len; i++) {
  //     if (document.getElementById(`checkbox${i}`).checked == true) {
  //       assing.push(document.getElementById(`checkbox${i}`).value);
  //     }
  //     usersdata[indexofassigne].assignee = assing[0];
  //     setEditassignee(false);
  //   }
  //   console.log(usersdata , "userdata");
  // }
  const updateAssignee = (index, e) => {
    const tmpUsereData = usersdata;
    const newAssignee = tmpUsereData[indexofassigne].assignee;
    newAssignee.push(e.name);
    tmpUsereData[indexofassigne].assignee = newAssignee;
    setusersdata(tmpUsereData);
  };
  return (
    <div className="flex-1">
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
      <div className="bg-gray-200 rounded-lg">
        <div className="flex items-center justify-between px-3 py-2 ">
          <div className="flex items-center gap-x-2 ">
            <BiRightArrow />
            <p>{props.name}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <TbLayoutCards />
            <p>{usersdata.length}</p>
            <div
              onClick={addcard}
              className="flex cursor-pointer active:border-gray-700 items-center justify-center text-xl h-[30px] w-[30px] bg-transparent border-gray-500 rounded-[4px] border "
            >
              +
            </div>
          </div>
        </div>
        <div className="border border-gray-300"></div>
        <div className="flex flex-col py-2 gap-y-2">
          {usersdata.map((users, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => editcard(index)}
                  className="w-[95%] cursor-pointer  px-3 py-2 mx-auto rounded-md h-[80px] bg-white"
                >
                  <p>{users.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Progressbox;
