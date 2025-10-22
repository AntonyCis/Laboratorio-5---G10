import { useState } from "react";

const Segundo = () => {
  const [itemsInCart, setItemsInCart] = useState(0);

  const handleEmptyCart = () => {
    setItemsInCart(0);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">useState: Carrito de Compras</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          **Nuevo Ejemplo:** En lugar de un contador de likes, gestionamos el
          número de artículos en un carrito de compras.
        </li>
      </ul>

      <div className="text-center mb-8">
        <h2 className="mt-4 mb-4 font-semibold text-xl">
          🛍️ Artículos en el Carrito:{" "}
          <span className="text-purple-600">{itemsInCart}</span>
        </h2>

        <button
          className="bg-purple-600 text-white py-1 px-3 mx-1 rounded hover:bg-purple-700"
          onClick={() => setItemsInCart(itemsInCart + 1)}
        >
          ➕ Añadir Artículo
        </button>

        <button
          className="bg-gray-500 text-white py-1 px-3 mx-1 rounded hover:bg-gray-600"
          onClick={handleEmptyCart}
        >
          🗑️ Vaciar Carrito
        </button>

        <button
          className={`py-1 px-3 rounded ${itemsInCart > 0 ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
          onClick={() => {
            if (itemsInCart > 0) {
              setItemsInCart(itemsInCart - 1);
            }
          }}
          disabled={itemsInCart === 0}
        >
          ➖ Quitar Artículo
        </button>
      </div>
    </>
  );
};

export default Segundo;
