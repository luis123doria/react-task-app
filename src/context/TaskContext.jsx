import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  // Crearemos la variable tasks que modificaremos añadiendo elementos al array.
  const [tasks, setTasks] = useState([]); // Aqui aun no podemos cargar la lista de Tareas de la base de datos. Debemos esperar que se cargue el Componente y luego lo podemos añadir. Usamos useEffect()

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);   /* Se ejecuta solo cuando cargue el Componente */

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
