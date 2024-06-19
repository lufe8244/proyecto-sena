document.addEventListener("DOMContentLoaded", () => {
    // Validar formulario
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const nombreApellido = document.getElementById("nombre-apellido").value.trim();
        const correoElectronico = document.getElementById("correo-electronico").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombreApellido || !correoElectronico || !telefono || !mensaje) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (!validateEmail(correoElectronico)) {
            alert("Por favor, introduzca una dirección de correo electrónico válida.");
            return;
        }

        alert("Formulario enviado exitosamente.");
        form.reset();
    });

    // Validar dirección de correo electrónico
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Navegación entre páginas
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = link.getAttribute("href").replace(".html", "");
            document.querySelector("main").scrollIntoView({ behavior: "smooth" });
            loadPage(target);
        });
    });

    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                document.querySelector("main").innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar la página:', error);
                document.querySelector("main").innerHTML = "<p>Error al cargar la página.</p>";
            });
    }

    // Alternar visibilidad de secciones
    const sectionToggles = document.querySelectorAll(".toggle-section");
    sectionToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const targetId = toggle.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.classList.toggle("hidden");
                // Redirigir a la URL especificada
                
window.location.href = "https://sd1z5c63-3000.use.devtunnels.ms/";

            }
        });
    });
});
