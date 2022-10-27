import React from "react";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { TbLayoutCards } from "react-icons/tb";
function Progressbox() {
  const [usersdata, setusersdata] = useState([
    { name: "test1", assignee: "viram choksi" },
    { name: "test2", assignee: "jayesh aherwal" },
    { name: "test3", assignee: "vijay sadhu" },
    { name: "test4", assignee: "ashutosh kaushik" },
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
  const [editing, setediting] = useState("");
  const [indexofassigne, setIndexofassigne] = useState();
  function addcard() {
    setmodalopen(!modalopen);
  }

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
    setEditassignee(true);
    setIndexofassigne(e);
    setediting(usersdata[e].assignee);
  }

  const assing = [];

  function save() {
    assing.length = 0;
    let len = usersdata.length;

    for (let i = 1; i <= len; i++) {
      console.log(
        document.getElementById(`checkbox${i}`).value,
        ":",
        document.getElementById(`checkbox${i}`).checked
      );
      if (document.getElementById(`checkbox${i}`).checked == true) {
        assing.push(document.getElementById(`checkbox${i}`).value);
      }
      console.log(assing);
      usersdata[indexofassigne].assignee = assing[0];
      setEditassignee(false);
    }
  }

  return (
    <div>
      {modalopen ? (
        <div>
          {" "}
          <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <TbLayoutCards />
                      </div>
                      <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          class="text-lg font-medium leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Title
                        </h3>
                        <div class="mt-2">
                          <input
                            onChange={(e) => setCardName(e.target.value)}
                            type="text"
                            id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <div
                      onClick={newcard}
                      class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Add card
                    </div>
                    <div
                      onClick={() => {
                        setmodalopen(false);
                      }}
                      class="mt-3 cursor-pointer  inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
      <div className="w-[27%] bg-gray-200">
        <div className="flex justify-between px-3 py-2 items-center  ">
          <div className="flex gap-x-2 items-center ">
            <BiRightArrow />
            <p>Open</p>
          </div>
          <div className="flex items-center gap-x-2">
            <TbLayoutCards />
            <p>30</p>
            <div
              onClick={addcard}
              className="flex cursor-pointer active:border-gray-700 items-center justify-center text-xl h-[30px] w-[30px] bg-transparent border-gray-500 rounded-[4px] border "
            >
              +
            </div>
          </div>
        </div>
        <div className="border border-gray-300"></div>
        <div className="py-2  flex flex-col gap-y-2">
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

      {editassignee ? (
        <div>
          <div className="absolute right-[5%]">
            {assignee.map((e, index) => {
              return (
                <div class="flex items-center">
                  <input
                    defaultChecked={editing === e.name}
                    id={`checkbox${index + 1}`}
                    type="checkbox"
                    value={`${e.name}`}
                    class="w-4 h-4 text-blue-600  bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="checked-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {e.name}
                  </label>
                </div>
              );
            })}
            <div className="bg-gray-500 px-3 py-2 " onClick={save}>
              submit
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Progressbox;
