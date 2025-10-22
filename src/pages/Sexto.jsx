const Sexto = ({ details }) => {
  const { title, prepTime, difficulty, ingredients, isVegetarian } = details;

  return (
    <>
      <h2 className="text-orange-800">Componente Hijo (Muestra el Detalle)</h2>

      <div className="flex justify-center mb-8">
        <div className="max-w-sm border-2 border-orange-500 rounded-lg p-4 w-80 text-left">
          <h2 className="text-xl font-bold mb-3 text-center">{title}</h2>

          <p className="mb-2">
            <strong>🕒 Tiempo:</strong> {prepTime}
          </p>
          <p className="mb-2">
            <strong>⭐ Dificultad:</strong> {difficulty}
          </p>

          <p className="mb-3">
            <strong>🌱 Dieta:</strong>{" "}
            {isVegetarian ? "Apto Vegetariano" : "Contiene Carne"}
          </p>

          <h3 className="font-semibold mt-4 mb-2">Ingredientes:</h3>
          <ul className="list-disc pl-5">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sexto;
