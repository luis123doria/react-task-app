import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center p-10">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map(
        (
          task // Aqui es un () porque no es codigo de Javascript sino que se esta usando el () para agrupar
        ) => (
          <TaskCard task={task} key={task.id} />
        )
      )}
    </div>
  );
};

export default TaskList;
