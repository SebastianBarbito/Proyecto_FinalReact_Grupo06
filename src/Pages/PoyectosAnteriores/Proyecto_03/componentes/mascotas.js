export const mascotas = [];

export function anotarMascota(nombre, tipo, edad, dueño, vacuna) {
  return {
    id: Date.now(),
    nombre,
    tipo,
    edad,
    dueño,
    vacuna
  };
}
