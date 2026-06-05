// Variables globales
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let carritoLista, carritoTotal, carritoCount;

// Actualiza el contador del carrito dinámicamente
function updateCartCount() {
    const totalItems = cart.reduce((total, producto) => {
        const cantidad = producto.cantidad ? parseInt(producto.cantidad, 10) : 1;
        return total + (isNaN(cantidad) ? 0 : cantidad);
    }, 0);
    if (carritoCount) {
        carritoCount.textContent = totalItems;
    }
}

// ✅ Mueve esta función AQUÍ afuera
function renderCart() {
    if (carritoLista) {
        carritoLista.innerHTML = ""; // Limpia la lista
        let total = 0;

        cart.forEach((producto, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <a href="Visualizador_Productos.html?nombre=${encodeURIComponent(producto.nombre)}&descripcion=${encodeURIComponent(producto.descripcion)}&precio=${encodeURIComponent(producto.precio)}&imagen=${encodeURIComponent(producto.imagen)}" class="product-link">
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px; margin-right: 10px;">
                    <span>${producto.nombre} - ${producto.precio}</span>
                </a>
                <button class="remove-item" data-index="${index}">Eliminar</button>
            `;
            carritoLista.appendChild(listItem);
            total += parseFloat(producto.precio.replace("$", ""));
        });

        if (carritoTotal) carritoTotal.textContent = `Total: $${total}`;
    }
}

// Actualiza el carrito dinámicamente
function addToCart(producto) {
    cart.push(producto);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
    carritoLista = document.getElementById("carrito-lista");
    carritoTotal = document.getElementById("carrito-total");
    carritoCount = document.getElementById("carrito-count");

    updateCartCount();
    renderCart();

    carritoLista.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
            updateCartCount();
        }
    });

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (e) => {
            const producto = {
                nombre: e.target.getAttribute("data-nombre"),
                precio: e.target.getAttribute("data-precio"),
                imagen: e.target.getAttribute("data-imagen"),
            };
            addToCart(producto);
        });
    });
});

// LOGIN y botón Comprar
document.getElementById("comprar").addEventListener("click", () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

    if (!usuario) {
        alert("Debes iniciar sesión para realizar una compra.");
        document.getElementById("fondo-login").classList.add("activo");
        return;
    }

    if (cart.length > 0) {
        alert(`¡Gracias por tu compra, ${usuario.fullname || "usuario"}!`);
        // GUARDAR EN HISTORIAL
        const historialKey = `historialCompras_${usuario.username}`;
        const historial = JSON.parse(localStorage.getItem(historialKey)) || [];

        historial.push({
            fecha: new Date().toLocaleString(),
            productos: [...cart]
        });

        localStorage.setItem(historialKey, JSON.stringify(historial));
        localStorage.removeItem("cart");
        cart = [];
        renderCart(); // Ahora sí funciona correctamente
        updateCartCount();
    } else {
        alert("El carrito está vacío.");
    }

    
});

document.getElementById("comprar").addEventListener("click", () => {
    finalizarCompra();
});

function finalizarCompra() {
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    const carrito = JSON.parse(localStorage.getItem("cart")) || [];

    if (!usuario) {
        alert("Debes iniciar sesión para comprar.");
        return;
    }

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // Guardar en historial
    const historialKey = `historialCompras_${usuario.username}`;
    const historial = JSON.parse(localStorage.getItem(historialKey)) || [];

    historial.push({
        fecha: new Date().toLocaleString(),
        productos: carrito
    });

    localStorage.setItem(historialKey, JSON.stringify(historial));

    alert(`¡Gracias por tu compra, ${usuario.fullname || "usuario"}!`);

    // Limpiar carrito
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
    updateCartCount();
}

function mostrarHistorialCompras() {
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (!usuario) {
        alert("Debes iniciar sesión para ver tu historial.");
        return;
    }

    const historialKey = `historialCompras_${usuario.username}`;
    const historial = JSON.parse(localStorage.getItem(historialKey)) || [];
    const lista = document.getElementById("lista-historial");
    lista.innerHTML = "";

    if (historial.length === 0) {
        lista.innerHTML = "<li>No hay compras registradas.</li>";
        return;
    }

    historial.forEach((compra, compraIndex) => {
        const item = document.createElement("li");
        item.innerHTML = `
            <strong>${compra.fecha}</strong>
            <ul>
                ${compra.productos.map((p, prodIndex) => `
                    <li style="display: flex; align-items: center; margin-bottom: 5px;">
                        <img src="${p.imagen}" alt="${p.nombre}" style="width: 40px; height: 40px; margin-right: 8px;">
                        <span>${p.nombre} - ${p.precio}</span>
                        <button class="eliminar-producto-historial" 
                            data-compra-index="${compraIndex}" 
                            data-prod-index="${prodIndex}" 
                            style="margin-left: 10px;">Eliminar</button>
                    </li>
                `).join("")}
            </ul>
        `;
        lista.appendChild(item);
    });

    // Delegación de eventos para eliminar productos del historial
    lista.querySelectorAll(".eliminar-producto-historial").forEach(btn => {
        btn.addEventListener("click", function() {
            const compraIdx = parseInt(this.getAttribute("data-compra-index"), 10);
            const prodIdx = parseInt(this.getAttribute("data-prod-index"), 10);

            // Eliminar el producto del historial
            historial[compraIdx].productos.splice(prodIdx, 1);

            // Si la compra queda vacía, eliminar la compra completa
            if (historial[compraIdx].productos.length === 0) {
                historial.splice(compraIdx, 1);
            }

            localStorage.setItem(historialKey, JSON.stringify(historial));
            mostrarHistorialCompras();
        });
    });
}


document.getElementById("abrir-historial").addEventListener("click", (e) => {
    e.preventDefault();
    mostrarHistorialCompras();
    document.getElementById("historial-modal").style.display = "flex";
});

document.getElementById("cerrar-historial").addEventListener("click", () => {
    document.getElementById("historial-modal").style.display = "none";
});















