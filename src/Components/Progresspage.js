import React from "react";
import EditAssignee from "./EditAssignee";
import Progressbox from "./Progressbox";

function Progresspage() {
  const progress = [
    { name: "Open" },
    { name: "In Progress" },
    { name: "Closed" },
  ];

  console.log(progress);

  return (
    <div>
      <div className="flex justify-end px-5 py-2 ">
        <div className="px-3 py-2 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 w-fit">
          Create List
        </div>
      </div>


        <div className="flex">
        <div className="flex gap-x-5 w-[75%]">
          {progress.map((progress) => {
            return <Progressbox className="" name={progress.name} />;
          })}
        </div>

            <div className="w-[25%]">
              <EditAssignee />
            </div>


        </div>
      </div>

  );
}

export default Progresspage;
