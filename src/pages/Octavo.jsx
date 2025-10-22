import useTempStore from "../context/useTempStore";

const Octavo = () => {
  const { temperature } = useTempStore();

  const alertStatus =
    temperature > 25
      ? "¡Advertencia! Temperatura Alta"
      : temperature < 15
        ? "¡Advertencia! Temperatura Baja"
        : "Temperatura Óptima";

  return (
    <>
      <h2 className="text-purple-700">Componente Hijo (Visualizador)</h2>

      <div className="flex justify-center mb-8">
        <div className="max-w-sm border-2 border-purple-500 rounded-lg p-4 w-80 text-center">
          <p className="text-4xl font-extrabold text-red-700 mb-3">
            {temperature}°C
          </p>

          <p
            className={`font-semibold ${temperature > 25 ? "text-red-700" : temperature < 15 ? "text-blue-700" : "text-green-700"}`}
          >
            {alertStatus}
          </p>
        </div>
      </div>
    </>
  );
};

export default Octavo;
