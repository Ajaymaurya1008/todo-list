import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../features/tasks/taskSlice";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const TaskEdit = () => {
  const { taskId } = useParams();
  const task = useSelector((state) => state.tasks[parseInt(taskId)]);
  const [taskText, setTaskText] = useState(task.text || "");
  const [completed, setCompleted] = useState(task.completed || false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!task) {
      navigate("/");
    }
  }, [task, navigate]);
  {
  }

  const handleSave = () => {
    dispatch(
      editTask({
        index: parseInt(taskId),
        newValue: { text: taskText, completed },
      })
    );
    toast.success("task updated successfully");
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-10">Edit Task</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="input input-bordered w-full mb-4"
      />
      <div className=" flex mb-8 gap-2 cursor-pointer">
        <span className="font-medium">Completed</span>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="checkbox checkbox-primary"
        />
      </div>
      <button onClick={handleSave} className="btn btn-primary">
        Save Changes
      </button>
    </div>
  );
};

export default TaskEdit;
