const Primero = () => {
  const product = {
    id: 456,
    name: "Smartphone X-Pro",
    inStock: 5,
    isAvailable: true,
  };

  const handleCheckout = () => {
    alert(
      `Procesando compra del producto ${product.name}. Stock actual: ${product.inStock}`,
    );
  };

  return (
    <>
      <h1 className="font-bold text-2xl">React Fundamentos: Nuevos</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          <strong>Variable:</strong> Se utiliza el objeto `product` para
          almacenar información.
        </li>
        <li>
          <strong>Fragment:</strong> Se usa la sintaxis corta `<></>` para
          agrupar sin un div extra.
        </li>
        <li>
          <strong>JSX:</strong> Combinación de HTML y JavaScript, por ejemplo,
          al usar `{product.name}`.
        </li>
        <li>
          <strong>Condicional:</strong> Se muestra el estado de disponibilidad
          basado en la variable `isAvailable`.
        </li>
        <li>
          <strong>Eventos:</strong> La función `handleCheckout` se ejecuta al
          hacer clic en el botón de compra.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="w-120 border rounded-lg p-4 w-80 text-center">
          <h2
            className={`text-lg font-semibold mb-2 ${product.isAvailable ? "text-green-700" : "text-red-700"}`}
          >
            {product.name}
          </h2>

          <p className="mb-3 font-bold">
            Estado: {product.isAvailable ? "✅ En Venta" : "❌ Descontinuado"}
          </p>

          <p className="mb-5 italic text-sm">
            Stock:{" "}
            {product.inStock > 0 ? `${product.inStock} unidades` : "¡Agotado!"}
          </p>

          <button
            className={`text-white py-1 px-3 rounded w-full ${product.inStock > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
            onClick={product.inStock > 0 ? handleCheckout : () => {}}
            disabled={product.inStock <= 0}
          >
            Comprar Ahora
          </button>
        </div>
      </div>
    </>
  );
};

export default Primero;
