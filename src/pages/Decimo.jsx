import { useEffect, useState } from "react";

const KEY_THEME = "app-theme-preference";

const Decimo = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem(KEY_THEME, newTheme);
      return newTheme;
    });
  };

  const clearPreference = () => {
    localStorage.removeItem(KEY_THEME);
    setTheme("light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(KEY_THEME);

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const cardStyle =
    theme === "dark"
      ? "bg-gray-800 text-gray-100 border-gray-600"
      : "bg-white text-gray-800 border-gray-300";

  return (
    <>
      <h1 className="font-bold text-2xl">localStorage: Selector de Tema</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          **Nuevo Ejemplo:** Utilizamos `localStorage` para **guardar la
          preferencia de color (tema)** del usuario, permitiendo que la
          aplicación recuerde el tema entre sesiones.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div
          className={`w-120 border rounded-lg p-4 w-80 text-center ${cardStyle}`}
        >
          <h2 className="text-lg font-semibold mb-2">Tema Actual:</h2>

          <p className="mb-4 text-2xl font-bold">
            {theme === "light" ? "☀️ Claro" : "🌙 Oscuro"}
          </p>

          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 mx-1 rounded mt-4 transition duration-150"
            onClick={toggleTheme}
          >
            Guardar y Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded mt-4"
            onClick={clearPreference}
          >
            Limpiar Preferencia
          </button>
        </div>
      </div>
    </>
  );
};

export default Decimo;
