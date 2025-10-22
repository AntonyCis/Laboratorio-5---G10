import { useEffect, useState } from "react";

const Tercero = () => {
  const [country, setCountry] = useState(null);

  const [countryCode, setCountryCode] = useState("peru");

  const getCountryData = async () => {
    const request = await fetch(
      `https://restcountries.com/v3.1/name/${countryCode}?fullText=true`,
    );

    if (request.ok) {
      const response = await request.json();
      setCountry(response[0]);
    } else {
      setCountry(null);
      console.error("Error al cargar datos del país");
    }
  };

  useEffect(() => {
    if (countryCode) {
      getCountryData();
    }

    return () => {};
  }, [countryCode]);

  const changeCountry = () => {
    setCountryCode((prevCode) => (prevCode === "peru" ? "ecuador" : "peru"));
  };

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect: Carga de Datos de País</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          **Nuevo Ejemplo:** Utilizamos `useEffect` para realizar una petición
          asíncrona a la API de REST Countries para cargar la información de una
          nación.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="w-120 border rounded-lg p-4 w-80 text-center">
          {country ? (
            <>
              <h2 className="text-lg font-semibold mb-2">
                País: {country.name.common} 🌎
              </h2>

              <p className="mb-3 text-left">Capital: {country.capital?.[0]}</p>
              <p className="mb-3 text-left">
                Población: {country.population?.toLocaleString()}
              </p>
              <p className="mb-3 text-left">Región: {country.region}</p>
              <img
                src={country.flags.png}
                alt={`Bandera de ${country.name.common}`}
                className="my-3 mx-auto w-24 border"
              />
            </>
          ) : (
            <p className="text-gray-500">Cargando datos del país...</p>
          )}

          <button
            className="bg-indigo-600 text-white py-1 px-3 mt-3 rounded w-full hover:bg-indigo-700"
            onClick={changeCountry}
          >
            Cambiar País (Actual: {countryCode})
          </button>
        </div>
      </div>
    </>
  );
};

export default Tercero;
