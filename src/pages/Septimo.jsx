import useTempStore from "../context/useTempStore";
import Octavo from "./Octavo";

const Septimo = () => {
  const { temperature, setTemperature } = useTempStore();

  const increaseTemp = () => {
    setTemperature(temperature + 1);
  };

  const decreaseTemp = () => {
    setTemperature(temperature - 1);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand: Termostato Inteligente</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          **Nuevo Ejemplo:** Utilizamos Zustand para manejar un estado global de
          **Temperatura** que puede ser actualizado desde cualquier parte de la
          aplicación.
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8">
        Componente Padre (Controles)
      </h2>

      <div className="border-2 border-blue-500 flex-colum justify-center items-center w-120 mx-auto mb-8 p-4">
        <Octavo />

        <p className="mt-4 mb-3 font-semibold text-xl">
          Temperatura Actual:{" "}
          <span className="text-red-600">{temperature}°C</span>
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded font-bold"
            onClick={increaseTemp}
          >
            🔥 Subir Temp
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded font-bold"
            onClick={decreaseTemp}
          >
            ❄️ Bajar Temp
          </button>
        </div>
      </div>
    </>
  );
};

export default Septimo;
