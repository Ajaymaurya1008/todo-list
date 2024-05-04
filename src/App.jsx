import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {

  return (
    <div className="flex flex-col gap-20 mt-28 justify-center items-center">
      <TaskInput/>
      <TaskList/>
    </div>
  );
}

export default App;
