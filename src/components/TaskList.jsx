import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const TaskList = () => {

      const deleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
      };


  return (
    <div>
      <h1 className="text-3xl font-bold">Tasks</h1>
      <div className="flex mt-10 gap-5 flex-col">
        {tasks.map((task, index) => {
          return (
            <div
              key={index}
              className="flex px-4 bg-white text-black rounded-md font-medium text-md border py-3 justify-between gap-7"
            >
              <input
                type="checkbox"
                defaultChecked={false}
                className="checkbox checkbox-success"
              />
              <p>{task}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white rounded-md px-2 btn-primary"
                >
                  <MdDeleteForever />
                </button>
                <button className="bg-blue-500 text-white rounded-md px-2 btn-primary">
                  <FaRegEdit />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskList