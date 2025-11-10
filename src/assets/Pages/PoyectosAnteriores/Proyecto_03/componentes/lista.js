export function mostrarLista(mascotas, borrarMascotaCallback) {
  const listaMascota = document.getElementById("listaMascotas");
  listaMascota.innerHTML = "";

  mascotas.forEach((mascota) => {
    const cadaMascota = document.createElement("li");
    cadaMascota.dataset.id = mascota.id;
    cadaMascota.innerHTML = `
      <strong>${mascota.nombre}</strong><br>
      Tipo: ${mascota.tipo}<br>
      Edad: ${mascota.edad}<br>
      Dueño: ${mascota.dueño}<br>
      Vacunada: ${mascota.vacuna}<br>
      <button data-id="${mascota.id}" class="borrar">Eliminar</button>
    `;
    listaMascota.appendChild(cadaMascota);
  });

  listaMascota.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")) {
      const id = parseInt(e.target.dataset.id);
      borrarMascotaCallback(id); 
    }
  });
}
