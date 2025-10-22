import { useState } from "react";

const Noveno = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finalizar Laboratorio de React",
      completed: false,
      priority: "Alta",
    },
    { id: 2, title: "Comprar víveres", completed: false, priority: "Baja" },
    {
      id: 3,
      title: "Enviar email al profesor",
      completed: true,
      priority: "Media",
    },
  ]);

  const hasPendingTasks = tasks.some((task) => !task.completed);

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const priorityStyles = {
    Alta: "text-red-600 font-bold",
    Media: "text-yellow-600",
    Baja: "text-green-600",
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado: Monitor de Tareas</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          **Nuevo Ejemplo:** Se utiliza el **Renderizado Condicional** para
          mostrar el estado general de las tareas y el **Renderizado de Listas**
          para detallar cada tarea pendiente o completada.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-96 mx-auto text-center">
          <h2 className="text-xl font-bold text-left underline mb-4">
            Estado General (Condicional)
          </h2>

          {hasPendingTasks ? (
            <p className="text-orange-500 font-semibold">
              Tienes tareas pendientes. ¡A trabajar! 🚀
            </p>
          ) : (
            <p className="text-green-500 font-semibold">
              ¡Todas las tareas completadas! 🎉
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="border rounded-lg p-4 w-96 mx-auto">
          <h2 className="text-xl font-bold text-left underline mb-4">
            Lista de Tareas
          </h2>

          <ul className="text-left space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`p-2 border rounded cursor-pointer flex justify-between items-center transition-opacity ${task.completed ? "opacity-50 line-through bg-gray-100" : "bg-white"}`}
                onClick={() => toggleComplete(task.id)}
              >
                <div>
                  <span className="mr-2">{task.completed ? "✅" : "⏳"}</span>
                  {task.title}
                </div>
                {!task.completed && (
                  <span
                    className={`text-xs ${priorityStyles[task.priority]} ml-4`}
                  >
                    {task.priority}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Noveno;
