// filepath: c:\Users\USER\Downloads\CodeInfinityStore 1.1\CodeInfinityStore\InfiniteCode\auth.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita que el formulario se envíe

            // Obtén los valores del formulario
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Simula la autenticación (reemplaza esto con una verificación real en el backend)
            if (username === "admin" && password === "1234") { // Ejemplo de credenciales
                localStorage.setItem("isAuthenticated", true); // Guarda el estado de autenticación
                alert("Inicio de sesión exitoso.");
                window.location.href = "index.html"; // Redirige al inicio
            } else {
                alert("Credenciales incorrectas. Inténtalo de nuevo.");
            }
        });
    }
});




// filepath: c:\Users\USER\Downloads\CodeInfinityStore 1.1\CodeInfinityStore\InfiniteCode\auth-check.js

document.addEventListener("DOMContentLoaded", () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
        alert("Debes iniciar sesión para acceder a esta página.");
        window.location.href = "Login.html"; // Redirige al login
    }
});