import Sexto from "./Sexto";

const Quinto = () => {
  const recipeData = {
    title: "Mote Pillo Ecuatoriano",
    prepTime: "20 minutos",
    difficulty: "Fácil",
    ingredients: [
      "Mote cocido",
      "Huevos",
      "Cebolla blanca",
      "Achiote",
      "Leche (opcional)",
    ],
    isVegetarian: true,
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Props: Lector de Recetas</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          **Nuevo Ejemplo:** Se utiliza Props para pasar todos los detalles de
          una receta (título, tiempo, ingredientes) del padre al hijo.
        </li>
      </ul>

      <h2 className="text-green-700 text-center mt-8">
        Componente Padre (Define la Receta)
      </h2>

      <div className="border-2 border-green-500 flex-colum justify-center items-center w-120 mx-auto mb-8">
        <Sexto details={recipeData} />
      </div>
    </>
  );
};

export default Quinto;
