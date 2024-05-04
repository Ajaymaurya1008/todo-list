/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { useSelector } from "react-redux";

const TaskInput = () => {
  const [newTask, setNewTask] = useState("");
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      toast.error("Please type a task");
      return;
    }
    dispatch(addTask({ text: newTask, completed: false }));
    toast.success("Task added successfully");
    setNewTask("");
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={handleTask} className="flex justify-between ">
      <div className="join w-full">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Type here"
          className="input join-item input-bordered w-full"
        />
        <button type="submit" className="btn bg-blue-500 join-item text-white">
          Add task
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
