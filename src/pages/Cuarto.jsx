import { useState, useEffect } from "react";

// ======================================================================
// 1. EL CUSTOM HOOK: useMousePosition

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return position;
};

// ======================================================================
// 2. EL COMPONENTE PRINCIPAL: MouseTracker

const MouseTracker = () => {
  const { x, y } = useMousePosition();

  const showCoordinates = () => {
    alert(`Coordenadas actuales del cursor: X=${x}, Y=${y}`);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">customHook: Rastreador de Mouse</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          **Nuevo Ejemplo:** El Custom Hook **`useMousePosition`** encapsula la
          lógica de **manejo de eventos** (rastreo del cursor), demostrando que
          un Custom Hook puede reutilizar lógica que no es solo de petición a
          una API.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="w-120 border rounded-lg p-4 w-80 text-center bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">
            Mueve el mouse sobre la página
          </h2>

          <div className="p-3 border border-dashed rounded bg-white">
            <p className="mb-2 text-left">
              Coordenada X (Horizontal):{" "}
              <strong className="text-blue-600">{x}</strong>
            </p>
            <p className="text-left">
              Coordenada Y (Vertical):{" "}
              <strong className="text-blue-600">{y}</strong>
            </p>
          </div>

          <button
            className="bg-green-700 text-white py-1 px-3 mt-4 rounded w-full hover:bg-green-800"
            onClick={showCoordinates}
          >
            Ver Coordenadas en Alerta
          </button>
        </div>
      </div>
    </>
  );
};

export default MouseTracker;
