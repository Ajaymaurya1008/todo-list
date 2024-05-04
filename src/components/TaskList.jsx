import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Tasks</h1>
      <div className="flex mt-10 gap-5 flex-col">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex px-4 bg-white text-black rounded-md font-medium text-md border py-3 items-center justify-between gap-7"
          >
            <input
              type="checkbox"
              defaultChecked={task.completed}
              disabled={true}
              className="checkbox checkbox-primary"
            />
            <p className={`${task.completed ? "line-through" : ""}`}>
              {task.text}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="btn btn-info"
              >
                <FaRegEdit />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-error"
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
