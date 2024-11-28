//Se activa el menu hamburguesa cuando se pulsa en el desplegando las distintas opciones.
const navbarToggler = document.getElementById("navbar-toggler");
const navLinks = document.getElementById("nav-links");

navbarToggler.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Se cierra dicho menu hamburguesa cuando se clickea fuera de las dimensiones del mismo ocultando las opciones.
document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !navbarToggler.contains(event.target)) {
        navLinks.classList.remove("active");
    }
}); 


//Funcionalidad de boton de LEARN MORE
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    const moreText = document.querySelector(".more-text");
    const btn = document.getElementById("learnMoreBtn");
    
    // Cambios de texto en botones y mostrar otro texto
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; // Muestra el texto adicional
        btn.textContent = "SHOW LESS"; // Cambia el texto del botón de LEARN MORE A SHOW LESS
    } else {
        moreText.style.display = "none"; // Oculta el texto adicional cuando esté el boton de LEARN MORE
        btn.textContent = "LEARN MORE"; // Cambia el texto del botón de SHOW LESS a LEARN MORE
    }
});


//Previene que se envie de inmediato el formulario y se fije dato por dato
document.getElementById("sendBtn").addEventListener("click", function(event) {
    event.preventDefault(); 

    // Recibe los valores ingresados
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error-message");

    // Valida el mail y si no pertenece al formato pide que se complete correctamente
    //Me costo bastante este pero se logró :)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return;
    }

    // Valida el mensaje y si no se escribe nada pide que se complete el campo
    if (message.trim() === "") {
        errorMessage.textContent = "Please enter your question.";
        errorMessage.style.display = "block";
        return;
    }

    // Si los datos ingresados son correctos muestra una alerta en pantalla diciendo que se envió correctamente.
    errorMessage.style.display = "none";
    alert("Your message has been sent!");
});