import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import gsap from "gsap";
import { EDITINGS, SELECTEDS } from "../redux/user/userActions";
import { GrClose } from "react-icons/gr";
function EditAssignee() {
  const dispatch = useDispatch();
  function closeedit() {
    dispatch(EDITINGS(false));
  }
  const editing = useSelector((state) => state?.datacame) || false;
  const selected = useSelector((state) => state?.select);
  function openediting() {
    console.log("changes occured", editing);
    if (editing) {
      gsap.to("#edit", {
        width: "90%",
        duration: 1,
      });
    } else {
      gsap.to("#edit", {
        width: "0%",
        duration: 1,
      });
    }
  }
  useEffect(() => {
    openediting();
  }, [editing]);
  return (
    <div className="flex justify-end">
      <div
        id="edit"
        className="w-0 h-screen bg-gray-200 border-l border-gray-400 "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center px-3 py-3 gap-x-4">
            <img
              src={`https://robohash.org/${selected?.name}?set=set2`}
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <p className="text-lg font-bold">{selected?.name}</p>
          </div>
          <div className="mr-2 cursor-pointer" onClick={closeedit}>
            <GrClose size={25} />
          </div>
        </div>
        <div className="w-full border border-gray-400"></div>
      </div>
    </div>
  );
}
export default EditAssignee;
