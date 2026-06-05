




// Actualizar el contador del carrito al cargar la página
document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);

//Menu//
function toggleMenu() {
    const menu = document.getElementById("menu-options");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}





document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
  const historialContainer = document.getElementById("historial-container");

  if (!usuario) {
    historialContainer.innerHTML = "<p>Debes iniciar sesión para ver tu historial.</p>";
    return;
  }

  const historialKey = `historialCompras_${usuario.username}`;
  const historial = JSON.parse(localStorage.getItem(historialKey)) || [];

  if (historial.length === 0) {
    historialContainer.innerHTML = "<p>No hay compras registradas.</p>";
    return;
  }

  historial.forEach((registro, index) => {
    const div = document.createElement("div");
    div.classList.add("registro-compra");

    div.innerHTML = `
      <h4>Compra realizada el ${registro.fecha}</h4>
      <ul>
        ${registro.productos.map(p => `
          <li>
            <img src="${p.imagen}" alt="${p.nombre}" style="width: 40px;">
            ${p.nombre} - ${p.precio}
          </li>`).join("")}
      </ul>
      <button class="eliminar-registro" data-index="${index}">Eliminar</button>
    `;

    historialContainer.appendChild(div);
  });

  // Botones para eliminar historial
  historialContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar-registro")) {
      const index = parseInt(e.target.dataset.index, 10);
      historial.splice(index, 1);
      localStorage.setItem(historialKey, JSON.stringify(historial));
      location.reload(); // Recarga la vista
    }
  });
});








