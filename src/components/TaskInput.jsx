import toast from "react-hot-toast";
import { useState } from "react";

const TaskInput = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTask = (e) => {
    e.preventDefault();
    if (newTask === "") {
      toast.error("Please type a task");
      return;
    }
    setTasks([newTask, ...tasks]);
    setNewTask("");
    toast.success("Task added successfully");
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
