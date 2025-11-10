export function contarMascotas(mascotas) {
  let vacunadas = 0;
  let noVacunadas = 0;

  mascotas.forEach((m) => {
    if (m.vacuna === "Si") {
      vacunadas++;
    } else {
      noVacunadas++;
    }
  });

  return {
    total: mascotas.length,
    vacunadas,
    noVacunadas
  };
}
