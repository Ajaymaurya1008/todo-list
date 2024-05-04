import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskEdit from "./components/TaskEdit";

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-20 mt-28 justify-center items-center">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p className="text-5xl font-bold">To-Do Application</p>
                <TaskInput />
                <TaskList />
              </>
            }
          />
          <Route path="/edit/:taskId" element={<TaskEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
