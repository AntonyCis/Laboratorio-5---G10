import { create } from "zustand";

const useTempStore = create((set) => ({
  // Estado inicial
  temperature: 20,

  // Función para actualizar el estado
  setTemperature: (newTemp) => set({ temperature: newTemp }),
}));

export default useTempStore;
